const fetchWithLimit = (limit, promises) => new Promise((resolve) => {
  // curIndex 当前开始执行的任务索引; finishIndex 已完成的index; curCount 当前处理的任务数
  let curIndex = 0, finishIndex = 0, curCount = 0;
  let result = []
  function run() {
    // 大于等于长度就resolve
    if (finishIndex >= promises.length) {
      resolve(result);
      return;
    }

    while (curCount < limit && curIndex < promises.length) { // 执行下一个任务
      promises[curIndex]().then(res => result.push(res)).finally(() => {
        finishIndex += 1;
        curCount -= 1;
        run();
      });
      curIndex += 1;
      curCount += 1;
    }
  }
  
  run();
});

const startTime = new Date().getTime();

const sleep = (time, value) => () => new Promise((resolve) => setTimeout(() => {
  console.log('sleep res', value, new Date().getTime() - startTime);
  resolve(time);
}, time));

fetchWithLimit(2, [sleep(3000, 1), sleep(1000, 2), sleep(2000, 3), sleep(4000, 4)]).then((data) => {
  console.log('then data', data);
});




function promiselimit (promises, limit) {
   return new Promise((resolve) => {
      const l = promises.length
      let curIndex = 0, finishIndex = 0, counter = 0
   
      function run () {
        if(finishIndex >= l) return resolve('finish')  
    
        while(curIndex < l && counter < limit) {
           promises[curIndex]().finally(() => {
              finishIndex++     
              counter--
              run()
           })
           curIndex++
           counter++
      }
    }
    run()
   })
}

const now = Date.now()
const p = (value, delay) => () => new Promise(resolve => {
    setTimeout(() => {
         console.log(value, Date.now() - now);
         resolve(value)
    }, delay);
})


promiselimit([p(1,1000), p(2, 2000), p(3, 3000), p(4, 4000)], 2)