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

// ================================================

// 证明Promise.resolve(1)不是一个函数
// setTimeout(Promise.resolve(1), 1000);

// const delay = (time) => {
//    return new Promise(r => setTimeout(() => r(), time))
// }

// const action = (x,time) => {
//     console.log(x)
//     return delay(time)
// }

// const circleColor = async () => {
//    await action('red', 3000)
//    await action('green', 1000)
//    await action('yellow', 2000)
//    await circleColor()
// }
// circleColor()

// const time = (timer) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, timer);
//   });
// };
// const ajax1 = () =>
//   time(2000).then(() => {
//     console.log(1);
//     return 1;
//   });
// const ajax2 = () =>
//   time(1000).then(() => {
//     console.log(2);
//     return 2;
//   });
// const ajax3 = () =>
//   time(1000).then(() => {
//     console.log(3);
//     return 3;
//   });

// function mergePromise(arr) {
//   const data = []; // 承载数据结果
//   let promise = Promise.resolve(); // 制造一个promise
//   arr.forEach((ajax) => { // 循环叠加then
//     promise = promise.then(ajax).then((res) => {
//       data.push(res);
//       return data
//     });
//   });

//   return promise;
// }

// mergePromise([ajax1, ajax2, ajax3]).then((data) => {
//   console.log("done");
//   console.log(data); // data 为 [1, 2, 3]
// });

// 要求分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]









