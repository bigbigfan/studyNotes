
const arr = [1,2,[3,4,[5,6,[7]]]]
 
function flatArr (arr) {
   return arr.reduce((tol, cur) => {
      return tol.concat(Array.isArray(cur)? flatArr(cur) : cur )        
    }, [])
} 

console.log(flatArr(arr));







const obj = {a: { b: {c: { d : 1 } } }, e: { f: 2} }



const flatObj = (obj, preKey = '') => {
    return Object.keys(obj).reduce((tol, cur) => {
       const value = obj[cur]
       const isObject = typeof value === 'object' 
       const newKey = preKey? `${preKey}.${cur}` : cur

       return isObject? {...tol,  ...flatObj(value, newKey)} : {...tol, [newKey]: value}
    }, {})
}


// console.log(flatObj(obj))







const myFlatObj = (obj, preKey = '') => {
    return Object.keys(obj).reduce((tol, cur) => {
      const value = obj[cur]
      const isObj = typeof value === 'object'
      const newKey = preKey?`${preKey}.${cur}` : cur 
      return isObj? {...tol, ...myFlatObj(value, newKey)} : {...tol, [newKey]: value}   
    }, {}) 
}

console.log(myFlatObj(obj));


