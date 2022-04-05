function maxStr(str) {
    const l = str.length
    let i = 0, j = 0, curLength = 0

    const set = new Set()
    while(i < l) { // 外循环极限是左侧窗口到l位置
     while(j < l && !set.has(str[j])) { // 只要是不重复的s[j]就一直扩张右侧到l位置
         set.add(str[j])
         j++
      }   
       // 只要是重复的就一直删左侧 且取最大值
        curLength = Math.max(set.size, curLength)
        set.delete(str[i])
        i++
    }
    return curLength
}


// console.log(maxStr('12342178461234567890'));


function max (s) {
   const l = s.length
   const set = new Set()
   let curLength = 0, i = 0, j = 0
   while(i < l) {
      while(j < l && !set.has(s[j])) {
          set.add(s[j])
          j++
      }
      curLength =  Math.max(curLength, set.size)
      set.delete(s[i])
      i++
   }

   return curLength
}

console.log(max('12312332123456'));