// 7.3 题目三
// const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('resolve3');
//       console.log('timer1')
//     }, 0)
//     resolve('resovle1');
//     resolve('resolve2');
//   }).then(res => {
//     console.log(res)
//     setTimeout(() => {   // p1-st2
//       console.log(p1)
//     }, 1000)
//   }).finally(res => {
//     console.log('finally', res)
//   })
// 这里最后一步的 p1-st2 打印的p1 其实是finally返回的结果， finally上一个Promise 是.then() 但是这个.then() 没有返回值 所以finally返回上个.then()的值是 undefined

// 8. 几道大厂的面试题
// 8.1 使用Promise实现每隔1秒输出1,2,3

// ================================================
// 题外话 循环打印1 2 3 间隔是1s
// const delay = (time) =>
//   new Promise((resolve) => {
//     setTimeout(resolve, time);
//   });

// const Log = (x, duration) => {
//   console.log(x);
//   return delay(duration);
// };

// Promise.resolve()
//     .then(() =>  Log(1, 1000))
//     .then(() =>  Log(2, 1000))
//     .then(() =>  Log(3, 1000))

// const cirleLog = () => {
//     return Promise.resolve()
//     .then(() =>  Log(1, 1000))
//     .then(() =>  Log(2, 1000))
//     .then(() =>  Log(3, 1000))
//     .then(() =>  cirleLog())
// }

// cirleLog()



// ================================================
// const arr = [1, 2, 3]

// arr.reduce(async(tol, cur) => {
//     return tol.then(() => {
//         return new Promise(r => {
//             setTimeout(() => {
//              r(console.log(cur))
//             }, 1000);
//         })
//     })
// },  Promise.resolve())








// ================================================

// //  里面是一个箭头函数实际上return了新的Promise
// Promise.resolve(1)
// .then(() => Promise.resolve(2))
// .then(res => console.log('鸡汤来咯', res))

// 没return
// Promise.resolve(1)
// .then(() => { Promise.resolve(2) })
// .then(res => console.log('鸡汤来咯', res))

// 是一个Promise对象所以穿透了
// Promise.resolve(1)
// .then(Promise.resolve(2))
// .then(res => console.log('鸡汤来咯', res))

// console.log(Promise.resolve(1));
// ================================================
 


// Promise.resolve()
// .then(() => new Promise(r => {
//     setTimeout(()=> r(console.log(1)), 1000)
// }))
// .then(() => new Promise(r => setTimeout(() => r(console.log(2)), 1000)))


// 证明Promise.resolve(1)不是一个函数
// setTimeout(Promise.resolve(1), 1000);
