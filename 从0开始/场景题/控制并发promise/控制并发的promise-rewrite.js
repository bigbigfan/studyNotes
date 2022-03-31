// const fetchWithLimit = (promises, limit) =>
//   new Promise((resolve) => {
//     // curIndex 是当前开始执行任务索引 finishIndex当前完成任务索引 curCount 是当前处理任务数
//     let curIndex = 0,
//       finishIndex = 0,
//       curCount = 0;
//     // 调度函数
//     function run() {
//       if (finishIndex >= promises.length) {
//         resolve("finish");
//         return;
//       }

//       //   当前任务数小于限制数 且 当前任务索引小于数组长度开启循环 处理任务
//       while (curCount < limit && curIndex < promises.length) {
//         promises[curIndex]().finally(() => {
//          // 进到这里说明这个任务状态已经改变了
//           finishIndex += 1; // 完成的索引+1
//           curCount -= 1;  // 当前任务数-1
//           run(); // 递归
//         });
//         // 否则依次增加
//         curIndex += 1; 
//         curCount += 1;
//       }
//     }

//     run();
// });
// const startTime = new Date().getTime()

// const p = (value, time) => () => new Promise(resolve => setTimeout(() => {
//     console.log('res', value, new Date().getTime() - startTime);
//     resolve(value)
// } ,time))

// fetchWithLimit([p(1,1000), p(2,2000), p(3, 3000), p(4, 4000)], 2).then(res => {
//     console.log('then',res);
// })



function fetchWithLimit(promises, limit) {
   return new Promise(resolve => {
     let count = 0, curIndex = 0, finishIndex = 0

     function run () {
        if(finishIndex >= promises.length) { // 完成索引大于长度 直接结束
            return resolve('finish!')
        }
        //  未超过限制数时 持续抓取任务执行
        while (count < limit && curIndex < promises.length) {
          promises[curIndex]().finally(() => { //进到这说明该任务做完了
              finishIndex += 1 // 记录完成的索引
              count -= 1  // 消除一个当前的任务数
              run() //递归
          })
          count += 1
          curIndex += 1
        }  
     }
   
     run()

   })
   

   
}