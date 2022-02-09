
function bubbleSort(arr) {
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    let flag = true;
    for (let j = 0; j < l - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = false;
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
    if (flag) break;// 如果flag是ture说明本次循环没有执行过冒泡，数组已经标准，直接跳出外层循环
  }
  return arr;
}

console.log(bubbleSort([4, 3, 2, 5, 8, 7, 8, 7]));



const addArr = [1,2,1]
let base = 0

function add(arr) {
  for(let i = 0; i < arr.length;i++) {
    if(arr[i] !== 1) break
    base += arr[i]
  }
  return base
}

console.log(add(addArr));