
const arr = [1,[2,[3,{a : 1},[4]]]]
 
function flatArr (arr) {
   return arr.reduce((pre, cur) => {
      return pre.concat(Array.isArray(cur)? flatArr(cur)  : cur )        
    }, [])
} 


