const permuteUnique  =  (arr) => {
   const res = []
   const used = new Array(arr.length)
   
   const dfs = (path) => {
      if(path.length === arr.length) {
        res.push(path.slice())
        return
      }
        
      for(let i = 0; i < arr.length; i++) {
         if(used[i]) { continue } 
         
         if(i - 1 >= 0 && arr[i - 1] === arr[i] && !used[i - 1]) { continue } 
  
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

console.log(permuteUnique([1,2,3,3]));