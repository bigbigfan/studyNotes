var generateParenthesis = function(n) {
  const sum = n * 2 // 总括号数
  const res = [] // 结果集
     
   const dfs = (lRemain, rRemain, str) => {
      if(sum === str.length) {
          res.push(str)
          return
      }     

      if(lRemain > 0) {
         dfs(lRemain - 1, rRemain, str + '(')
      }

      if(rRemain > lRemain) { // 添加')' 是需要负责的.否则无法闭合
          dfs(lRemain, rRemain - 1, str + ')')
      }
   }

   dfs(n, n, '')
  
   return res
};

console.log(generateParenthesis(3));

var generateParenthesis = function(n) {
  const sum = n * 2 // 总括号数
  const res = [] // 结果集
     
   const dfs = (lRemain, rRemain, str) => {
      if(sum === str.length) {
          res.push(str)
          return
      }     

      if(lRemain > 0) {
        dfs(lRemain - 1, rRemain, str + '(')
      }
      if(rRemain > lRemain) { // 添加')' 是需要负责的.否则无法闭合
          dfs(lRemain, rRemain - 1, str + ')')
      }      
   }

   dfs(n, n, '')
  
   return res
};

console.log(generateParenthesis(2));





function match(n) {
   const sum = n * 2

   const res = []
    
   function dfs(lRemain, rRemain, str) {
        if(str.length === sum) {
          res.push(str)
          return
        }

        if(lRemain > 0) {
          dfs(lRemain - 1, rRemain, str + '(')
        }

        if(rRemain > lRemain) {
           dfs(lRemain, rRemain - 1, str + ')')
        }
   }

   dfs(n, n, '')
   return res 
}

console.log(match(3));




function kuohao(n) {
   
   const sum = n * 2
   const res = []
   function dfs(lRemain, rRemain , path) {
       if(path.length === sum) {
          res.push(path)
          return
       }
      
       if(lRemain > 0) {
          dfs(lRemain - 1, rRemain, path + '(')
       }

       if(rRemain > lRemain) {
          dfs(lRemain, rRemain - 1, path + ')')
       } 
   }

   dfs(n, n, '')
   return res
}

console.log(kuohao(2));







