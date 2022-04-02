
function permute (arr) {
  const res = []
  const used = {}

 function dfs(cur) {
    if(cur.length === arr.length) {
       res.push(cur.slice())
       return 
    }

   for (let i of arr) {
       //  if(cur.includes(i)) continue;   // 这样查找是O(n)
         if(used[i]) continue
         used[i] = true
         cur.push(i)
         dfs(cur)
         cur.pop() // 删除上一个加入的数，回溯
         used[i] = false // 使用标记也要回溯
   }
 }

 dfs([])
 return res
}

console.log(permute([1,2,3]));






function permute2(arr) {
    const res = []  
    const used = {}

    function dfs(cur) {
       if(cur.length === arr.length) {
         res.push(cur.slice()) // 返回浅拷贝防止指针出错
         return
       }
       
       for(let i of arr) {
         if(used[i]) continue
         used[i] = true
         cur.push(i)
         dfs(cur)
         cur.pop() //回退
         used[i] = false //回退
       }
    }
    dfs([])
    
    return res
} 

console.log(permute2([1,2,3,4]));


function permute3 (nums) {
    nums.sort()
    const res = [] 
    // const used = {}
    const used = new Array(nums.length)

    function dfs(path) {
      if(path.length === nums.length) {
        res.push(path.slice())
        return
      }
       

      for(let i in nums) {
          if(used[i])  continue 
          if(nums[i] === nums[i - 1] && used[i - 1])  continue 
          
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

console.log(permute3([1,2,3,3]));


