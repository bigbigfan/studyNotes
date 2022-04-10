function search(nums, target) {
    const l = nums.length
    if(l < 1) return -1
    let left = 0
    let right = l - 1
   
    while(left <= right) {
      const half = Math.floor((left + right) / 2)
      if(nums[half] === target) {
          return half
      } else if (nums[half] < target) {
          left++
      } else {
          right--
      }
    }

    return -1

}

console.log(search([1,2,3,4], 2));



