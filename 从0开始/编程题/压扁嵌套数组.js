function flatArr (arr) {
    return arr.reduce((tol, cur) => {
       
       return tol.concat(Array.isArray(cur) ? flatArr(cur) : cur)
    }, [])
}

const Arr = [1,[2,3,[4]]]
console.log(flatArr(Arr));




function myflat(arr) {
   return arr.reduce((tol, cur) => {
      return tol = tol.concat(Array.isArray(cur)? myflat(cur) : cur)
   }, []) 
}


const Arr = [1,[2,3,[4]]]
console.log(myflat(Arr));





