//题目描述:
//给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

// 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

// 假设环境不允许存储 64 位整数（有符号或无符号）。

// 示例 1：

// 输入：x = 123
// 输出：321

// 示例 2：

// 输入：x = -123
// 输出：-321

//思路1: 其实这题之前做过回文很像，上来可能就会想用字符串，但其实对于一个整数来说，用余数的数学方法可能会来得更快
// 先给出余数解答吧 1: 对x用10去求余数digit，作为反序的头位，然后用~~()位运算取x/10的整数部分以便于下轮计算
//每一次都用res*10 + digit 循环执行以上逻辑

var reverse1 = function (x) {
  let rev = 0
  while (x != 0) {
    const digit = x % 10
    x = ~~(x / 10)
    rev = rev * 10 + digit
    if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
      return 0
    }
  }
  return rev
}

// console.log(reverse1(123321)) //123321
// console.log(reverse1(-7758521)) // -1258577
// console.log(reverse1(-10000)) //-1
// console.log(reverse1(19999999999)) // 0


// 思路2: 使用字符串转换的笨蛋解法

const reverse2 = function (x) {
  const absNumStr = Math.abs(x).toString()
  const reAbsNumStr = myReverse(Math.abs(x).toString())
  if (absNumStr === reAbsNumStr) {
    return x
  } else if (Number(reAbsNumStr) > (Math.pow(2, 31) - 1) || Number(reAbsNumStr) < -Math.pow(2, 31)) {
    return 0
  }
  for (let i = 0; i < reAbsNumStr.length; i++) {
    if (reAbsNumStr[i] !== 0) return x > 0 ? ~~(reAbsNumStr.substring(i)) : -~~(reAbsNumStr.substring(i))
  }
}
// 实现一个翻转字符串的方法
const myReverse = function (str) {
  let reStr = ''
  let i = str.length - 1
  while (reStr.length < str.length) {
    reStr += str[i--]
  }
  return reStr
}


// console.log(reverse2(123321)) //123321
// console.log(reverse2(-7758521)) // -1258577
// console.log(reverse2(-10000)) //-1
// console.log(reverse2(19999999999)) // 0
