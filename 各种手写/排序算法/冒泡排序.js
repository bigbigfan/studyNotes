function bubbleSort(arr) {
  const l = arr.length;
   for (let i = 0; i < l; i++) {
    let flag = true;
    for (let j = 0; j < l - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = false;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (flag) break; // 如果flag是ture说明本次循环没有执行过冒泡，数组已经标准，直接终断循环返回结果
  }
  return arr;
}

// function bubbleSort(arr) {
//   const l = arr.length;
//   for (let i = 0; i < l; i++) {
//     let flag = true;
//     for (let j = 0; j < l - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         flag = false;
//         [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//       }
//     }
//     if (flag) break;
//   }
//   return arr;
// }

console.log(bubbleSort([4, 3, 2, 5, 8, 7, 8, 7]));
