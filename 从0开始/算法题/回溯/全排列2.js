// 需要sort配合 判断前后数组成员是否相同和used标记去重
const permuteUnique  =  (arr) => {
   const res = []
   const used = new Array(arr.length)
   arr.sort()
   const dfs = (path) => {
      if(path.length === arr.length) {
        res.push(path.slice())
        return
      }
        
      for(let i = 0; i < arr.length; i++) {
         if(used[i]) { continue } // 某位的数字不能重复被选中
         // 同层的前一个数字跟本数相同，但数字没被选过
         if(i - 1 >= 0 && arr[i - 1] === arr[i] && used[i - 1]) { continue } 
  
          path.push(arr[i])
          used[i] = true
          dfs(path)          
          path.pop()
          used[i] = false
      }
   }
   dfs([])
   return res
}

console.log(permuteUnique([1,2,3,3]))



const permute = function(nums) {
   nums.sort()
   const l = nums.length 
   const res = []
   const used = new Array(l)

   function dfs(path) {
      if(path.length === l) {
         res.push(path.slice())
         return
      }
     
      for(let i = 0; i < l; i++) {
        if(used[i]) continue
        if(nums[i] === nums[i - 1] && used[i - 1]) continue
        
        used[i] = true
        path.push(nums[i])
        dfs(path)       
        path.pop()
        used[i] = false
      }
   }

   dfs([])
   return res
}

console.log(permute([1,2,3,3]));




function permute(nums) {
   const res = []
   const used = new Array(nums.length) 


   function dfs(path) {
      if(path.length === nums.length) {
         res.push(path.slice())
         return
      }
 
      for(let i = 0 ; i < nums.length; i++) {
         if(used[i]) continue
         if(nums[i] === nums[i-1] && used[i - 1]) continue
         used[i] = true
         path.push(nums[i])
         dfs(path)
         path.pop()
         used[i] = false
      }
   }

   dfs([])
   return res
}

console.log(permute([1,2,3,3]));