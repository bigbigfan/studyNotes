const a = [3]
const b = [1, 2 ,3] 
let intersection = a.filter(v => b.includes(v))
// let difference = a.concat(b).filter(v => !intersection.includes(v)) // a 并 b - a 交 b
let difference = a.concat(b).filter(v => !b.includes(v) || !a.includes(v)) // a 并 b - a 交 b



const intersection1 = a.filter(v => b.includes(v))

const difference2 = a.concat(b).filter(v => !(a.includes(v)&& b.includes(v)))

console.log(difference, difference2);








function single(arr) {
    return arr.reduce((tol, cur) => {
      return tol.includes(cur)? tol : tol.concat(cur) 
    } ,[])
}

function flatArr(arr) {
    return arr.myReduce((tol, cur) => {
       return tol.concat(Array.isArray(cur)? flatArr(cur) : cur)  
    }, [])
}

Function.prototype.myReduce = function(fn, init) {
     const arr = this
     let tol = init || arr[0]
     for (let i = init? 0 : 1; i< arr.length; i++) {
         tol = fn(tol, arr[i])
     }
     return tol
}

 console.log(flatArr([1,2,[3,4,[5,6,[7]]]]));