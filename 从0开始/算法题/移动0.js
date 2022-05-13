// 快指针指到非0的就跟慢指针交换
// 快指针无条件右移，慢指针有条件右移
function moveZeroes(nums) {
    const l = nums.length
    let s = 0,f = 0
    
    while(f < l) {
       if(nums[f] != 0) {  
          [nums[s], nums[f]] = [nums[f], nums[s]]
          s++
       }
       f++
    }
}

  


const nums = [0,1,2,0,3,0]

moveZeroes(nums)

console.log(nums);




function moveZeroes(nums) {
    const l = nums.length
    let i = 0, j = 0
    
    while(j < l) {
      if(nums[j] != 0) {
         [nums[i], nums[j]] = [nums[j], nums[i]]
         i++
      }    
      j++
    }

}