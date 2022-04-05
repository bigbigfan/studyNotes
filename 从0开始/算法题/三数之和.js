function threeSum (nums) {
   const l = nums.length
   nums.sort() // 排序
   let res = []
   for(let i = 0; i < l; i++) {
       const n1 = nums[i]
       if(n1 > 0) break // 由于开始排序过，所以全正情况下不可能有0解
       if(i > 0 && nums[i] === nums[i - 1]) continue // 去重


       let left = i + 1, right = l - 1
       while(left < right) {
         const sum = n1 + nums[left] + nums[right]
         if(sum === 0) {
             res.push([n1,nums[left],nums[right]])
             // 去重
             while(left < right && nums[left] === nums[left + 1]) left++
             while(left < right && nums[right] === nums[right - 1]) right--
            //  生成一个解，指针也要同时并拢
             left++
             right--
         } else if (sum > 0) {
             right--
         } else if(sum < 0) {
             left++
         }
       }
   }
   return res
}
console.log(threeSum([-1,0,1,2,-1,-4]));