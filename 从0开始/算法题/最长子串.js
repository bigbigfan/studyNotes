function maxStr(str) {
    const l = str.length
    let i = 0, j = 0, curLength = 0

    const set = new Set()
    while(i < l) {
     while(j < l && !set.has(str[j])) { // 只要是不重复的就一直加右侧
         set.add(str[j])
         j++
      }   
       // 只要是重复的就一直删左侧
        curLength = Math.max(set.size, curLength)
        set.delete(str[i])
        i++
    }
    return curLength
}


console.log(maxStr('12342178461234567890'));