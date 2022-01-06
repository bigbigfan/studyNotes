// function bable(arr) {
//   const l = arr.length;
//   for (let i = 0; i < l; ++i) {
//     for (let j = 0; j < l - i - 1; ++j) {
//       let flag = true
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         flag = false
//       }
//       if(!flag) break
//     }
//   }
//   return arr;
// }
// const res = bable([1, 3, 2, 4, 6]);
// console.log(res);

let sum = 1
for(let i = 2; i < 100; i++) { 
  if(i % 2 === 0) {
    sum -=  1 / i
  } else {
    sum += 1 / i
  }
}
console.log(sum);
