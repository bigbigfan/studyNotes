function threeSum (nums) {
   const l = nums.length
   nums.sort() // 排序
   console.log(nums);
   let res = []
   if(nums == null || l < 3) return res

   for(let i = 0; i < l; i++) {
       const n1 = nums[i]
       if(n1 > 0) break // 由于开始排序过，所以全正情况下不可能有0解
       if(i > 0 && nums[i] === nums[i - 1]) continue // 去重


       let left = i + 1, right = l - 1
       while(left < right) {
         const sum = n1 + nums[left] + nums[right]
         if(sum == 0) {
             res.push([n1,nums[left],nums[right]])
             while(left < right && nums[left] === nums[left + 1]) left++
             while(left < right && nums[right] === nums[right - 1]) right--
             left++
             right--
         } 
         else if (sum < 0) left++
         else if (sum > 0) right--
       }
   }
   return res
}
console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]));





 






