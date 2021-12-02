// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('result')
//     }, 1000)
// })

// p1
// .then(res => console.log('then!!!' ,res))
// .catch(err => console.log('err!!!' ,err))

// 大概描述
//  Promise 的构造方法接受一个executor() 在new Promise() 时就立刻执行这个executor回调
// execuror()内部的异步任务被放入宏/微任务队列，等待执行
// then() 被执行，收集成功/失败回调，放入对应的队列
// executor() 的异步任务被执行，触发resolve/reject 从成功/失败队列中取出回调依次执行


// then收集依赖 -> 异步触发resolve -> resolve执行依赖 

// ===================超低配版=========================
class MyPromise {
    // 构造方法接受一个回调
    constructor(executor) {
        this._resolveQueue = []  // then收集的执行成功的队列
        this._rejectQueue = []   // then收集的执行失败的队列
     // 由于resolve/reject是在executor内部被调用，因此需要使用箭头函数固定
     let _resolve = (val) => {
        // 从成功队列里取出回调依次执行
        while(this._resolveQueue.length) {
          const callback = this._resolveQueue.shift()
          callback(val)
        }
     } 
     //reject
     let _reject = (val) => {
         while(this._rejectQueue.length) {
             const callback = this._rejectQueue.shift()
             callback(val)
         }
     }
     
     // new Promise() 时立即执行executor 并传入resolve和reject
     executor(_resolve, _reject)
    }

    // then方法，接受一个成功的回调和一个失败的回调，并push进对应队列
    then(resolveFn, rejectFn) {
        this._resolveQueue.push(resolveFn)
        this._rejectQueue.push(rejectFn)
    }
}


// // 实验一下
const p1 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('result')
    }, 1000)
})

p1
.then(res => {
    console.log(res);
})


// ========================== Promise A+规范=============================
// 核心的两条规则
// 1，Promise本质是一个状态机，且只有三种状态 Pending（等待） Fulfilled（执行）Reject（拒绝）状态的变更是单向的，意味着状态一旦发生改变就不能再被修改
// 2，then方法，接受两个可选参数，分别对应resolve和reject时候触发的回调。then方法返回一个promise。then方法可以被同一个promise调用多次

// ==========================补充一下Promise代码-状态改变=============================

// // Promise/A+ 规范的三种状态
// const PENDING = 'pending'
// const FULFILLED = 'fulfilled'
// const REJECTED = 'rejected'

// class MyPromise {
//    // 构造方法接受一个回调
//    constructor(executor) {
//        this._status = PENDING // Promise 状态
//        this._resolveQueue = [] // 成功队列，resolve触发
//        this._rejectQueue = [] // 失败队列，reject触发
//      // 由于resolve/reject 是在executor内部被调用，因此需要使用箭头函数固定this指向，否则找不到this._resolveQueue  
//        let _resolve = (val) => {
//           if(this._status !== PENDING) return // 对应规范中的"状态只能由pending到fulfilled或rejected
//           this._status = FULFILLED // 变更状态
         

//           // 这里之所以用一个队列储存回调，是为了实现规范要求的then方法可以被同一个Promise调用多次
//           // 如果使用一个变量而非队列来储存回调，那么及时多次p1.then()也只会执行一次回调
          
//             while(this._resolveQueue.length) {
//                 const callback = this._resolveQueue.shift() // 队列是先进先出的和排队打饭一样
//                 callback(val)
//             }
//        }
//        //实现reject
//        let _reject = (val) => {
//            if(this._status !== PENDING) return // // 对应规范中的"状态只能由pending到fulfilled或
//            this._status = REJECTED // 变更状态
          
//            while(this._rejectQueue.length) {
//                const callback = this._rejectQueue.shift() 
//                callback(val)
//            }
//         }  
//        //  new Promise()时立即执行executor 并传入resolve和reject
//         executor(_resolve, _reject)    
//     }
   
//     // then方法，接受一个成功的回调和一个失败的回调
//     then(resolveFn, rejectFn) {
//         // return 一个新的promise
//         return new MyPromise((resolve, reject) => {
//          // 把resolveFn 重新包装一下，再push进resolve执行队列，这是为了能够获取回调的返回值进行分类讨论
//             const fulfilledFn = value => {
//                try {
//             //   执行第一个（当前的）Promise的成功回调，并获取返回值
//                let x = resolveFn(value)
//             //  分类讨论返回值，如果是Promise那么等待Promise状态变更 否则直接resolve
//             // 这里resolve 之后，就能被下一个.then()的回调获取到返回值，从而实现链式调用
//                x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
//               } catch(error) {
//                  reject(error)
//               }
//             }
//         //   把后续then收集的依赖都push进当前Promise的成功回调队列中 为了保证顺序调用
//            this._resolveQueue.push(fulfilledFn)
         
//            // reject    
//           const rejectedFn = error => {
//               try {
//                   let x = rejectFn(error)
//                   x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
//               } catch(error) {
//                   reject(error)
//               }
//             }
//             this._rejectQueue.push(rejectedFn)
//         })
//     }
// }

// //  ==================== then 的链式调用 ===========================
// // 接着实现链式调用 (重点和难点)
// // const p1 = new Promise((resolve, reject) => {
// //     resolve(1)
// // })

// // p1
// // .then(res => {
// //     console.log(res);
// //     //  then回调中可以return 一个Promise
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             resolve(2)
// //         }, 1000);
// //     })
// // })
// // .then(res => {
// //     console.log(res);
// //     // then回调中也可以return一个值
// //     return 3
// // })
// // .then(res => {
// //     console.log(res);
// // })

// // 输出结果 1 2 3

// // 思考一下如何实现这种链式调用：
// // 1， 显然.then()需要返回一个Promise 这样才能找到then方法，所以我们会把then方法的返回值包装成Promise
// // 2， .then()的回调需要拿到上一个.then()的返回值
// // 3，.then() 的回调需要顺序执行，以上面这段代码为例子 虽然中间return了一个Promise 但执行顺序也要保证是1 -> 2 -> 3我们要等待当前Promise状态变更后 再执行下一个then收集的回调，这就要求我们对then的返回值分类讨论


// // then方法:

// //  then(resolveFn, rejectFn) {
// //     // return 一个新的promise
// //     return new MyPromise((resolve, reject) => {
// //      // 把resolveFn 重新包装一下，再push进resolve执行队列，这是为了能够获取回调的返回值进行分类讨论
// //         const fulfilledFn = value => {
// //            try {
// //         //   执行第一个（当前的）Promise的成功回调，并获取返回值
// //            let x = resolveFn(value)
// //         //  分类讨论返回值，如果是Promise那么等待Promise状态变更 否则直接resolve
// //         // 这里resolve 之后，就能被下一个.then()的回调获取到返回值，从而实现链式调用
// //            x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
// //           } catch(error) {
// //              reject(error)
// //           }
// //         }
// //     //   把后续then收集的依赖都push进当前Promise的成功回调队列中 为了保证顺序调用
// //        this._resolveQueue.push(fulfilledFn)
     
// //        // reject    
// //       const rejectedFn = error => {
// //           try {
// //               let x = rejectFn(error)
// //               x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
// //           } catch(error) {
// //               reject(error)
// //           }
// //         }
// //         this._rejectQueue.push(rejectedFn)
// //     })
// // }

// const p1 = new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//     resolve(1) 
//     }, 500);
// })

// p1
// .then(res => {
//     console.log(res)
//     return 2
// })
// .then(res => {
//     console.log(res)
//     return 3
// })
// .then(res => {
//     console.log(res);
// })


// 输出 1 2 3






