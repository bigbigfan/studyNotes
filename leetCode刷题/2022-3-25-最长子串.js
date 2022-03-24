var lengthOfLongestSubstring = function(s) {
    const l = s.length
    let i = 0, j = 0, curLength = 0
    const set = new Set() // 无重复的set
    while(i < l) { 
       while(j < l && !set.has(s[j])) {    // 不存该数据在且j<l 就一直插数据 窗口右侧扩充
           set.add(s[j])
           j++
       }
       curLength = Math.max(set.size, curLength)  // 到这说明有重复 更新最大值 然后窗口左侧收缩，删除重复项
       set.delete(s[i])
       i++  
    }
    return curLength
};