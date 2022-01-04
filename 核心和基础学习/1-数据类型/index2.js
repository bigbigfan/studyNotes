// new Promise(resolve => {
//     Promise.resolve().then(() => {
//         console.log('1111');
//     })
//     resolve()
// })
// // .then(() => {
// //    console.log('commit');
// // })

// setTimeout(() => {
//     console.log('commit');
// }, 0);


// function bubbleSort(arr){
//     for(let i = 0; i < arr.length; i++) {
//         let flag = true
//       for(let j = 0; j < arr.length - i - 1; j++) {
//         if(arr[j] > arr[j+1]) {
//             // 如果前面大于后面换位置
//           flag = false  // 存在交换就把flag变成false
//           let temp = arr[j]
//           arr[j] = arr[j+1]
//           arr[j+1] = temp
//         }
//       }
//       if(flag) break
//     }
//     return arr
//   }

// let arr = [3,2,4,5,1,7,8,9]
// console.log(bubbleSort(arr));



// 异或运算
// let a  =  1
// let b = 2

// a = a ^ b
// b = a ^ b

// a = b ^ a

// console.log(a, b);


// function quick (arr) {
//     if(arr.length <= 1) return arr 
//     // 基准点
//     const primary = arr.length / 2 || 0
//     // 抓取参照项目
//     const primaryValue = arr.splice(primary, 1)[0]
//     const leftArr = []
//     const rightArr = []
//     arr.forEach(val => {
//         val > primaryValue? rightArr.push(val) : leftArr.push(val)
//     })
//     //  向上逐次合并数组
//     return [...quick(leftArr),primaryValue, ...quick(rightArr)]
// }

// const x = quick([3,2,1,45,5])
// console.log(x);

// const arr = [1,2,3]
// [arr[0], arr[2]] = [arr[2], arr[0]]
let a = 'a';
let b = 'b';
// [b,a]=  [a, b];
//  console.log(a, b);

let arr = [a, b]

a = null
console.log(arr);