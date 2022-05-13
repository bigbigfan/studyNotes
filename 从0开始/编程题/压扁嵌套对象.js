const flatObj = function(obj, prekey) {
   return Object.keys(obj).reduce((tol, cur) => {
       const value = obj[cur] 
      // 区分上次递归拷贝的是对象还是数组决定这次的拼接方式    
      const concatType = Array.isArray(obj)? `${prekey}[${cur}]` : `${prekey}.${cur}`
      // 区分上次递归是否有prekey决定是否需要拼接   
       const key = prekey? concatType : cur
     //  决定是否递归调用  
       return typeof value === 'object' ? {...tol, ...flatObj(value, key)} : {...tol, [key]: value}
   }, {})
}

const x = {a:{b:{c: {d:1}}}, f: 2, g: [1,2,3]}

console.log(flatObj(x));





function flatObj2(obj, prekey = '') {
     return Object.keys(obj).reduce((tol, cur) => {
       const value = obj[cur]
       const typeKey = Array.isArray(obj) ? `${prekey}[${cur}]` : `${prekey}.${cur}`
       const key = prekey ?  typeKey : cur 
      
       return typeof value === 'object' ? {...tol, ...flatObj2(value, key)} : {...tol, [key]: value}

     }, {}) 
}


const ins = {
    a: {
      b: {
        c: 1
      }
    },
    d: {
     e: 2,
     f:3
    },
    g:4,
    h: [5,6,7]
}

console.log(flatObj2(ins));





