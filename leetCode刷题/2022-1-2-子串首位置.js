var strStr = function(haystack, needle) {
    if(!needle.length) return 0
    const n = haystack.length
    const m = needle.length 
    // let result = -1
    for(let i = 0; i < n - m + 1; i++) {
        const str = haystack.substring(i,  i + m )
        if(str === needle) {
            result = i
            break
        // console.log(str, needle);
        } 
    }
    return result
};

const x = strStr('abc', 'ab')
console.log(x);
// strStr('abc', 'ab')