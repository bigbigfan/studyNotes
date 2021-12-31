/**
 * @param {number} num
 * @return {boolean}
 */
//  可以用枚举法 列举这个数的因子
// 最后判断 sum 和 num 是否相等
// 枚举的手段就是用 num % 当前循环项 如果结果是0说明整除是因子
// 而枚举时 要枚举不超过根号num的数， 因为显然在根号num *根号num = num 的情况下 若有一方是小于根号num的（设为d） 无疑另一个乘数会大于根号num 且其值为 f = num / d
// 所以这里还要判断 当该数为因子的时候且 该因子的平方 < num  才会去得出另一个因子是 num / d 加入累计

const checkPerfectNumber = function(num) {
    if(num === 1) return false
    let sum = 1 // sum 至少有1
    for (let i = 2; i * i <= num; ++i) {
       if(num % i === 0) { // 整除就加入因子累计
         sum += i
          // 找另一成对出现的因子是否存在 根据上面的理论，如果平方大于num说明已经是累加过该因子了
          if(i * i < num) {
              sum += Math.floor(num / i)
          }
       }
    } 
    return sum === num
  };

//   TEST
  console.log(checkPerfectNumber(28)); //true
  console.log(checkPerfectNumber(20)); //false