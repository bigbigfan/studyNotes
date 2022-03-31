// var generateParenthesis = function(n) {
//   const sum = n * 2 // 总括号数
//   const res = [] // 结果集
     
//    const dfs = (lRemain, rRemain, str) => {
//       if(sum === str.length) {
//           res.push(str)
//           return
//       }     

//       if(lRemain > 0) {
//          dfs(lRemain - 1, rRemain, str + '(')
//       }

//       if(rRemain > lRemain) { // 添加')' 是需要负责的.否则无法闭合
//           dfs(lRemain, rRemain - 1, str + ')')
//       }
//    }

//    dfs(n, n, '')
  
//    return res
// };

// console.log(generateParenthesis(3));

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




