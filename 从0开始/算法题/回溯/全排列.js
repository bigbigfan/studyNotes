/* eslint-disable no-restricted-syntax */
/* eslint-disable no-continue */


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

