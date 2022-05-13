 

 const arr = [1,2,3,4,5,5,6,6,7,8]

//  function count(arr) {   
//      const map = {}
    
//      arr.forEach((item) => {
//         if(map.hasOwnProperty(item)) {
//             map[item]++
//         } else {
//             map[item] = 1
//         }
//      })

//      return map
//  }

function count(arr) {
   return arr.reduce((tol, cur) => {
        tol[cur] ? tol[cur] += 1 : tol[cur] = 1
        return tol
   }, {}) 
}

console.log(count(arr));



//  console.log(count(arr));