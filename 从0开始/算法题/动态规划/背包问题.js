// 重量w   价值 v 两个数组  bag背包容量

function getMaxValue(w, v, bag) {
   if(w.length !== v.length || w.length == 0) {
       return 0
   }
   const n = w.length
  //    index   0 - n     rest  0 - bag
   const dp = new Array(n + 1).fill().map(() => Array(bag + 1).fill(0))
   //  填dp
   for(let index = n - 1; index >= 0; index--) {
      for(let rest = 0; rest <= bag; rest++) {
        //  抄完就改
        const p1 = dp[index + 1][rest]
        let p2 = 0
        let next = rest - w[index] < 0 ? -1 : dp[index + 1][rest - w[index]]
        if(next != -1) {
            p2 = v[index] + next
        }
        dp[index][rest] = Math.max(p1, p2)
      }
   }
   return dp[0][bag]
}
// 当前考虑到index号货物  index 所有的货物可以自由选择
// 做的选择不能超过背包容量
// 返回最大价值
// function process(w, v, index, rest) {
//     // base case
//     if(rest < 0) {  // 装不下了
//         return -1
//     }
//     if(index == w.length) { // 装到头了 // 最后一行全是0
//        return 0 
//    }
//     // 有货 index位置的货色
//     // bag有空间 0
//     // 不要当前的货 

//     const p1 = process(w, v, index + 1, rest)
    
//     // 要当前的货
//     //  减去当前货的重量，总价值需要加上此时的货价值
//     let next = process(w, v, index + 1, rest - w[index])
//     let p2 = 0
//     if(next != -1) {
//         p2 = v[index] + next 
//     }

//     return Math.max(p1, p2)
// }

const w = [3,2,4,7]
const v = [5,6,3,19]
const bag = 11
console.log(getMaxValue(w,v, bag));