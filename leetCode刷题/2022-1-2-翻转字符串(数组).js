// function reverseArr(s) {
//     const l = s.length
//     let arr = s.split('')
//     if(l <= 1) return arr
//     // 判断奇偶  
//     for (let i = 0; i < Math.floor(l / 2); i++ ) {
//         [arr[i], arr[l - 1 - i ]] = [arr[l - 1 - i], arr[i]]
//     }
//     return arr
// }

// console.log(reverseArr('abc'));

// 两侧向中间归并
function reverseArr(s) {
     const l = s.length
     for(let left = 0, right = l - 1; left < right; ++left, --right ) {
         [s[left], s[right]] = [s[right], s[left]]
     }
    return s
}
 console.log(reverseArr([1,2,3,4]));