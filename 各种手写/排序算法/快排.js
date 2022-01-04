// 大的放左边小的放右边然后递归执行
// function quick(arr) {
//   const l = arr.length;
//   if (l <= 1) return arr;
//   const halfIndex = l / 2 || 0;
//   const halfItem = arr.splice(halfIndex, 1)[0];
//   const leftArr = [];
//   const rightArr = [];
//   arr.forEach((i) => {
//     i > halfItem ? rightArr.push(i) : leftArr.push(i);
//   });
//   return [...quick(leftArr), halfItem, ...quick(rightArr)];
// }

// console.log(quick([1,3,2,4,6]))
// 上边这个快排只是让读者找找感觉，我们不能这样写快排，如果每次都开两个数组，会消耗很多内存空间，数据量大时可能造成内存溢出，我们要避免开新的内存空间，即原地完成排序

//  子程序的交换规则
//  以最后一位未基准数，再设定一个初始位置pos = -1， 然后从数组第一位开始循环 每当当前项比基准小就把 pos++ 然后取arr[pos] 和当前遍历项互换

function quick(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pos = left - 1; // 初始位置是被置换的位置，是left - 1位
    for (let i = left; i <= right; i++) {
      let povit = arr[right]; //取末位作基准
      if (arr[i] <= povit) {
        //  pos自增后置换当前项 和 pos指向项
        pos++;
        [arr[pos], arr[i]] = [arr[i], arr[pos]];
      }
    }
    //  一趟走完之后 pos位置来到基准数的位 以pos分割左小右大的数组
    quick(arr, left, pos - 1); // pos - 1 是左侧数组最后一位的index
    quick(arr, pos + 1, right);
  }
  return arr;
}
const arr = [1, 3, 2, 4, 6, 7, 7, 8, 9];

console.log(quick(arr));
