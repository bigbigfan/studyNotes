
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





function bableF(arr) {
  const l = arr.length
  for(let i = 0; i < l; i++) {
    let flag = true
    for(let j = 0; j < l - i; j++) {
      if(arr[j] > arr[j + 1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        flag = false
      }
    }
    if(flag) {
      return arr
    }
  }
  return arr
}

const arr1 = [3,1,2,4,4,5,6,6,6]

console.log(bableF(arr1))





const bable313 = function(arr) {
  const l = arr.length
  for(let i = 0; i < l; i++) {
    let flag = true
    for(let j = 0; j < l - i - 1; j++) {
      if(arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        flag = false
      }
    } 
    if(flag) return arr
  }
  return arr
}

console.log(bable313([1,3,4,2,5]), '3-13');