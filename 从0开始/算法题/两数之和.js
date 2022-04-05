function twoSum(nums, target) {
     const l = nums.length
     const map = new Map()
     for(let i = 0; i < l;i++) {
        const res = target - nums[i]
        if(map.has(res)) {
            return [i, map.get(res)]
        } else {  
            map.set(nums[i], i)
        }
     }
}



console.log(twoSum([1,2,3,4,5], 9));