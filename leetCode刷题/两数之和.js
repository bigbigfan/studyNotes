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

var twoSum = function (nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const res = target - nums[i]
    if (map.has(res)) {
      return [map.get(res), i]
    } else {
      map.set(nums[i], i)
    }
  }
}

console.log(twoSum([3, 2, 4], 6)) // 1 2