function bubble (arr) {
    const l = arr.length
    for(let i = 0; i < l; i++) {
      let flag = true
     for (let j = 0; j < l - i - 1; j++) {
         if(arr[j] > arr[j+1]) {
          flag = false;
         [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
         }
      }
      if(flag) break
    }
    return arr
} 


console.log(bubble([3,2,1,5,4,4]));