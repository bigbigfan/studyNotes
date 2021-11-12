// 给定一个target 再给定一个数组nums nums取3个数求和最接近target并返回sum值
// 思路：
// 1：先把数组做升序排列方便双指针微调，取一个初始的res和
// 2：再固定其中一个值 用左右双指针向中间归并 
// 3： 每次遍历都用sum和target比较如果 大就让右指针左移，从而缩小sum 反之左指针右移，放大sum 
// 4： 每次遍历都用sum和res作比较 Math.abs去取二者差值的绝对值 如果sum - target 差的绝对值小于res - target的绝对值，说明更接近， 更新res的值
// const threeSumClosest = function (nums, target) {
//   nums.sort((a, b) => a - b)
//   const l = nums.length
//   let res = nums[0] + nums[1] + nums[l - 1]
//   for (let i = 0; i < l - 2; i++) {
//     const n1 = nums[i]
//     let left = i + 1
//     let right = l - 1
//     while (left < right) {
//       const n2 = nums[left]
//       const n3 = nums[right]
//       const sum = n1 + n2 + n3
//       if (Math.abs(sum - target) < Math.abs(res - target)) {
//         res = sum
//       }
//       if (sum > target) {
//         right--
//       } else if (sum < target) {
//         left++
//       } else {
//         return sum
//       }
//     }
//   }
//   return res
// }

// console.log(threeSumClosest([1, 2, 3, 4, 10, 16], 30))


// 感觉这样写也差不多
// const threeSumClosest = function (nums, target) {
//   nums.sort((a, b) => a - b)
//   const l = nums.length
//   let res = nums[0] + nums[1] + nums[2]
//   for (let i = 0; i < l; i++) {
//     const n1 = nums[i]
//     let left = i + 1
//     let right = l - 1
//     while (left < right) {
//       const n2 = nums[left]
//       const n3 = nums[right]
//       const sum = n1 + n2 + n3
//       if (Math.abs(sum - target) < Math.abs(res - target)) {
//         res = sum
//       }
//       if (sum > target) {
//         right--
//       } else if (sum < target) {
//         left++
//       } else {
//         return sum
//       }
//     }
//   }
//   return res
// }

// console.log(threeSumClosest([1, 2, 3, 4, 10, 16], 30))
