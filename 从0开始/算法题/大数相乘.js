const multiply = function(num1, num2) {
   const l1 = num1.length
   const l2 = num2.length
   
   let res = new Array(l1 + l2).fill(0) // 结果最多为m + n位
//    从个位开始逐位相乘
   for (let i = l1 - 1; i >= 0; i--) {
       let n1 =  +num1[i] // 转number类型
       for(let j = l2 - 1; j >= 0; j--) {
           let n2 = +num2[j]
           let mul = n1  * n2
           let p1 = i + j, p2 = i + j + 1
           let sum = mul + res[p2]  
           // 当前两个乘完了之后加上当前i+j+1已经存在的值， 再去考虑进位
        //    当前乘的值模10的余数放在 p2 位  进位放进 p1位
           res[p2] = sum % 10 // 直接把加完的数取余数就行
           res[p1] += sum / 10 | 0 // 需要取模之后 加上 现有的值 再做进位
       }
   }
  while(res[0] == 0) { //多余的0砍了
      res.shift()
  }
  return res == 0 ? 0 : res.join('')
}
console.log(multiply('123', '456'));
// console.log(54 /10 | 0);  // xx | 0   可以取整，绝活 
// console.log(Math.floor(54 / 10)); // 也可以取