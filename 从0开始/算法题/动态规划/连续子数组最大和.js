function add(nums) {
   const l = nums.length 
   let p = 0, res = nums[0]
   for(let i = 0; i < l; i++) {
       p = Math.max(p + nums[i], nums[i]) // 如果nums[i - 1]之前的和加上nums[i]还不如nums[i]大说明受益是负的
       res = Math.max(p, res)
   }

   return res 
}



// dp[i] 算是前i项和，题目要求连续，所以一旦加完之后还不如当前nums[i]考虑之前放弃之前的和

function max(nums) {
    const l = nums.length
    // const dp = [nums[0]] 
    let p = nums[0]
    let max = nums[0]
    for(let i = 1; i < l; i++) {
      // dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]) 
      //  max = Math.max(dp[i], max)
      p = Math.max(p + nums[i], nums[i])  
      max = Math.max(max, p) // 更新max
    }
    return max
}

