// 回顾下扩展运算符
const fn = (a, ...args) => {
  console.log(args);
}

fn(1,2,3,4,5)

// // fn([
// //     {
// //      a: 132,
// //      b: 312,
// //      c: 333
// //     }
// // ])

// const x = fn(logA(), 'wowowo') 
// console.log(x());
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const obj = {a : 1}
// const arr3 = [...arr1, obj]
// console.log(arr3);