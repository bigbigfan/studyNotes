// 类似于爬楼梯 拆分问题因子 从上到下倒退算, 但是这里coins是数组还要循环一次
const coinChange = function(coins, amount) {
    //初始化长度为amount+1，值为无穷大的数组
    let dp = Array(amount+1).fill(Infinity)
    dp[0] = 0;
    for(let i = 0; i < dp.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            // 如果差值小于零跳过
            if (i - coins[j] < 0) continue;
            // 每一个金额最低需要几个硬币 
            dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
        }
    }
  return dp[amount] === Infinity ? -1 : dp[amount] 
};



  console.log(coinChange([1,2,5], 0));



 const coinChange1 = (conins, amount) => {
      const dp = new Array(amount+1).fill(Infinity)
      dp[0] = 0
     
      for(let i = 0; i < dp.length; i++) {
          for(let j = 0; j < conins.length; j++) {
              if(i - conins[j] < 0) continue
              
              dp[i] = Math.min(dp[i], dp[i - conins[j]] + 1)   
          }
      }

      return dp[amount] === Infinity? -1 : dp[amount] 
  }

  console.log(coinChange1([1,5,10], 11));


 










function changeCoin(coins, amount) {
   const dp = new Array(amount + 1).fill(Infinity)
   dp[0] = 0
   
   for(let i = 0; i < dp.length; i++) {
       for(let j = 0;j < coins.length; j++) {
         if(i - coins[j] < 0) continue 
         dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
       }
   }
   return dp[amount] == Infinity ? -1 : dp[amount]
}


console.log(changeCoin([1,5,10], 12));



function change(coins, amount) {
   const dp = new Array(amount + 1).fill(Infinity)
   dp[0] = 0
   
   for(let i = 0; i < amount; i++) {
     for(let j = 0; j < coins.length; j++) {
          if(i - coins[j] < 0) continue
          dp[i] = Math.min(dp[i],  dp[i - coins[j]] + 1)
      }
   }
   
   return dp[amount] == Infinity ? -1 : dp[amount]    
}