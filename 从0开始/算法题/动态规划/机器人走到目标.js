// n 几个位置    k 总步数  
function way1(n, start, aim, k) {
    // 生成一个二维矩阵，填表
    const dp = Array(n + 1).fill().map(() => Array(k + 1).fill(-1));
    return process(start, k, aim, n, dp)
}

// cur 当前机器人位置
// rest 剩余步数
// aim 最终目标
// n 位置数   
// 返回机器人从 cur 走过rest之后 停在aim方法数是多少
// cur 1-n    rest 0-k
function process(cur, rest, aim, n, dp) {
    if(dp[cur][rest] != -1) {
        return dp[cur][rest]
    }    
    // 没算过
    let ans = 0
    if(rest == 0) {
         ans = cur == aim ? 1 : 0
    } else if (cur == 1) {
         ans = process(2, rest - 1, aim, n, dp)
    } else if (cur == n) {
         ans = process(n - 1, rest - 1, aim, n, dp)
    } else {
         ans = process(cur - 1, rest - 1, aim, n, dp) + process(cur + 1, rest - 1, aim, n, dp)
    }
    // 记缓存
    dp[cur][rest] = ans
    return ans

 }

 
function way2(n, start, aim, k) {
    // 排除无效参数
    if(n < 2 || k < 1 || start < 1 || start > n || aim > n || aim < 1 ) {
        return 0
    }

   const dp = Array(n + 1).fill().map(() => Array(k + 1).fill(0));
   dp[aim][0] = 1 
   //  之所以要先列再行是因为内层循环的首行和尾行 依赖情况特殊   
   for(let rest = 1; rest <= k; rest++) { // 列
       dp[1][rest] = dp[2][rest - 1]
       for(let cur = 2; cur < n; cur++) {
           dp[cur][rest] = dp[cur - 1][rest - 1] + dp[cur + 1][rest - 1]
       }
       dp[n][rest] = dp[n - 1][rest - 1]
   }
   return dp[start][k]
}


console.log(way1(5,2,4,6));

console.log(way2(5,2,4,6));