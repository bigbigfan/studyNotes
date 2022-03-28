function add (num1, num2) {
    const l1 = num1.length
    const l2 = num2.length
    let i = l1 - 1, j = l2 - 1 
    let res = '' //不断更新结果
    let cache = 0 // 设置一个cahce 每次都存好当前需要进的位
    while(i >= 0 || j >= 0 || cache != 0) { // cahce不是0就需要多进行一轮
         const cur1 = num1[i]? +num1[i] : 0
         const cur2 = num2[j]? +num2[j] : 0
         const sum = cur1 + cur2 + cache 
         res =  sum % 10 + res
         cache = Math.floor(sum / 10) 
        i--
        j--
    }
   return res 
}
console.log(add('199','11'));



// 官方这里是操作数组push 所以最后需要reverse   
function addString(num1, num2) {
    let i = num1.length - 1, j = num2.length - 1, add = 0;
    const ans = [];
    while(i >=0 || j >= 0 || add != 0 ) {
       const x = i >= 0 ? num1.charAt(i) - '0' : 0 // 这里是用字符串相减转换格number类型
       const y = j >= 0 ? num2.charAt(j) - '0' : 0
       const result = x + y + add
       ans.push(result % 10)
       add = Math.floor(result / 10)
       i--
       j--
    }
    return ans.reverse().join('')
}

console.log(addString('123', '3211'));