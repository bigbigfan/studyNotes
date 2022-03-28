// set
const arr = [1,2,2,2,3,3,3]

const res1 = Array.from(new Set(arr))
const res2 = Array.from(new Set(arr))

console.log(res1, res2);





// reduce
function quchong(arr) {
   return arr.reduce((tol, cur) => {
      return tol.includes(cur)? tol : tol.concat(cur)
   } ,[])
}

console.log(quchong(arr));