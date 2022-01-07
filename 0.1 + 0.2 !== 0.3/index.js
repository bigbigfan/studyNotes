// 机器精度问题
// 前面说了，JS 采用 IEEE 754 双精度版本（64位），六十四位中符号位占一位，整数位占十一位，其余五十二位都为小数位。因为 0.1 和 0.2 都是无限循环的二进制，所以在小数位末尾处需要判断是否进位（规则和十进制里的四舍五入一样）。
//   所以 0.1的二进制表示（0.1 = 2^-4 * 1.10011(0011)） 进位后就变成了 2^-4 * 1.10011(0011 * 12次)010，同理可得0.2的二进制表示 。把这两个二进制加起来得到 2^-2 * 1.0011(0011 * 11次)0100 , 这个值再换算成十进制就是 0.30000000000000004。

// Number.EPSILON 精度
// 让 0.1 + 0.2 === 0.3

function euqal(a , b) {
  let res = false
  const p = Number.EPSILON || Math.pow(2, -52)
  if(a - b < p) {
      res = true
  }
  return res
}

const res = euqal(0.1 + 0.2, 0.3)
console.log(res);

// 或者直接 toFixed(2)
 const add = 0.1 + 0.2
 const res1 = add.toFixed(1)

 console.log(res1);