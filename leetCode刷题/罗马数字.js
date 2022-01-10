// 建造hash表
// 考虑边缘情况如 IV是4  IX是9 
// 比下个数字小就做减法比下个数字大就做加法
var romanToInt = function (s) {
  const symbolValues = new Map()
  symbolValues.set('I', 1)
  symbolValues.set('V', 5)
  symbolValues.set('X', 10)
  symbolValues.set('L', 50)
  symbolValues.set('C', 100)
  symbolValues.set('D', 500)
  symbolValues.set('M', 1000)

  let ans = 0
  const n = s.length
  for (let i = 0; i < s.length; i++) {
    const value = symbolValues.get(s[i])
    if (i < n - 1 && value < symbolValues.get(s[i + 1])) {
      ans -= value
    } else {
      ans += value
    }
  }
  return ans
}

console.log(romanToInt('IX'))