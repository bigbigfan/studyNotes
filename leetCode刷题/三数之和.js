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






const threeNumber = function(arr, number) {
     const l = arr.length
     if(l < 3) return new Error('length must >= 3')
     

     let res = arr[0] + arr[1] + arr[l-1]

     for(let i = 0; i < l - 2; i++) {
       const n1 = arr[i]  // 当前轮次外层循环的基数
       let left = 0, right = l - 1
         while(left < right) { // 只要左小于右就开始双指针遍历
            let curRes = arr[i] + arr[left] + arr[right]
           if(Math.abs(curRes - number) < Math.abs(res - number)) {
               res = curRes
           }
            if(curRes > number) {
                right--
             } else if(curRes < number) {
                 left++
             } else {
                 return curRes
             }
         }
     }
     return res

}

// console.log(threeNumber([1,2,3,4,5], 13));





const threeSum = (arr, num) => {
    const l = arr.length
    let sum = arr[0] + arr[1] + arr[l-1]
    for(let i = 0; i < l - 2; i++) {
        let left = 0; right = l -1
        let curSum = arr[i] + arr[left] + arr[right]
        while(left < right) {
           if(Math.abs(curSum - num) < Math.abs(sum - num)) {
               sum = curSum
           }
           if(curSum < num) {
               left++
           } else if (curSum > num) {
               right--
           } else {
               return curSum
           }
        }
    }
    return sum
}

console.log(threeSum([1,2,3], 10));