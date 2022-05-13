// 思路是左括号可以随便插，插右括号时候注意栈顶是否为对应匹配左括号，且匹配完毕之后出栈
// 每次匹配pop出stack最后一个成员，不用担心会破坏数据，因为1.不匹配整个函数return false 2.匹配直接出栈

function isValid(s) {
    const stack = []
    if(s.length % 2 !== 0) return fasle // 奇数长度一定不匹配
    // 生成一个hash map以供后续匹配判定
    const map = new Map([ 
        [')', '('],
        ['}', '{'],
        [']', '['],
    ])
    for(let i = 0; i < s.length; i++) {
       if(map.has(s[i])) {//判断右括号
          if(stack.pop() !== map.get(s[i])) return false // 不等直接false退出函数
       } else {
           stack.push(s[i]) 
       }
    }
    return stack.length === 0 
}

console.log(isValid('{{]}'));




function isValid(s) {
    if(s.length % 2 !== 0) return false
    const stack = []
    const map = new Map([
        [')', '('],
        ['}', '{'],
        [']', '['],
    ])
      
    for(let i = 0; i < s.length; i++) {
       if(map.has(s[i])) {
           if(stack.pop() !== map.get(s[i])) return false
       } else {
           stack.push(s[i])
       }
    }
    
    return stack.length === 0 
}




function isValid(s) {
   if(s.length % 2 !== 0) return false
   const stack = []
   const map = new Map([
       [')', '('],
       ['}', '{'],
       [']', '['],
   ])
    
   for(let i = 0; i < s.length; i++) {
       if(map.has(s[i])) { // 判断是右括号
        if(stack.pop() !== map.get(s[i])) { // 在判断上一项是否是匹配括号 
            return false
         }
       } else { // 左括号就无脑进栈
        stack.push(s[i])
       }         
   }
   return !stack.length
}

console.log(isValid('{[()]}'));

