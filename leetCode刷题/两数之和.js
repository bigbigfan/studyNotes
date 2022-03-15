// 双指针
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     let res = target - nums[i]
//     nums.forEach((item, index) => {
//       if (item === res) {
//         return [index, i]
//       } else {
//         i++
//       }
//     })
//   }
// }

// console.log(twoSum([3, 2, 4], 6)) // 1 2


//hash表法 找target和当前遍历项nums[i]的差值是否在nums中，若在则返回若不在就把其和对应的数组索引index压入map表中


function findTwoSum(arr, num) {
  const l = arr.length
  const map = new Map() // 考虑关联数 和 数组下标
  for(let i = 0; i < l; i++) {
   const res = num - arr[i]
  
   if(map.has(res)) { //如果有就直接返回事先关联的数组下标
      return [map.get(res), i]  
   } else {
      map.set(arr[i], i)  // 没有就把当前数 关联好数组下标
   }
  }
} 

const target = findTwoSum([1,2,3,4,54], 55)
console.log(target);







function twoIndex(arr, num) {
  let left = 0, right = arr.length - 1, res = null
  const Arr = [...arr].sort((a, b) => a - b)
  while(res !== num) {
     res = arr[left] + arr[right] // 动态和
     if(res > num) {
       right--
     } else if (res < num) {
       left++
     } 
  }
  return [left , right]
}

console.log(twoIndex([1,2,3,4,5], 6));




// map hash 
function A(arr, num) {
   const l = arr.length
   const map = new Map()
   for(let i = 0; i < l; i++) {
    const res = num - arr[i] 
    if(map.has(res)) {
      return [map.get(res), i]
    } else {
      map.set(arr[i], i)
    }
   }
}
console.log(A([2,55,67,3,4], 5));

// two index 双指针
function B(arr, num) {
  const l = arr.length
  let left = 0, right = arr.length - 1, res = null
  while(res !== num) {
      res = arr[left] + arr[right]
      if(res < num) {
         left++
      } else if(res > num) {
        right--
      }
  }  
  return [left, right]
}

console.log(B([2,55,67,3,4], 5));