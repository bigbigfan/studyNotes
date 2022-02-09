

// // 手写Promise.all()
// function promiseAll(promises) {
//   return new Promise((resolve, reject) => {
//     if (!Array.isArray(promises)) {
//       throw new TypeError(`argument must be a array`);
//     }
//     let resolvedCounter = 0;
//     const promiseNum = promises.length;
//     let resolvedResult = []; // 最终返回的结果
//     for (let i = 0; i < promiseNum; i++) {
//       // 包裹一层Promise
//       Promise.resolve(promises[i]).then(value => {
//         resolvedCounter++; // 每次执行计数器自增
//         resolvedResult[i] = value; //赋值给对应的项
//         if (resolvedCounter == promiseNum) {
//           //判断最后一项停止
//           return resolve(resolvedResult);
//         }
//       }, error => reject(error));
//     }
//   });
// }





function promiseAll1(promises) {
  return new Promise((resolve, reject) => {
    if(!Array.isArray(promises)) {
      throw new TypeError(`arguments is not Array`)
    }
    const l = promises.length
    let promiseCounter = 0
    let promisesRes = []
    for(let i = 0; i<l; i++) {
      return Promise.resolve(promises[i]).then(value => {
        promiseCounter++
        promisesRes[i] = value
        if(promiseCounter == l) {
          return resolve(promisesRes)
        }
      }, error => reject(error))
    }
  })
}


// function promiseAll2(promises) {
//   return new Promise((resolve, reject) => {
//     if(!Array.isArray(promises)) {
//       throw new TypeError(`arguments is not Array`)
//     }
//     // const l = promises.length
//     // let promiseCounter = 0
//     let promisesRes = []
//     // for(let i = 0; i<l; i++) {
//     //   return Promise.resolve().then(value => {
//     //     promiseCounter++
//     //     promisesRes[i] = value
//     //     if(promiseCounter == l) {
//     //       return resolve(promisesRes)
//     //     }
//     //   }, error => reject(error))
//     // }
//     promises.map((item, index) => {
//       return Promise.resolve(item).then(value => {
//         promisesRes[index] = value
//       }, error => reject(error))
//     })
//     return resolve(promisesRes)
//   })

//   //这里的问题是return 不能跳出map循环
// }


function aPromise(value) {
  return new Promise(resolve => resolve(value))
}
const rej = new Promise((resolve, reject) => reject('haha reject!!!!!!'))

const pArr = [aPromise(1), aPromise(2), aPromise(3),rej]

promiseAll1(pArr).then(res => console.log(res)).catch(err => console.log(err))