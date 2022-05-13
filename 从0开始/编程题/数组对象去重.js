const arrobj = [
    {a: 1, b:2},
    {a: 2, b:2},
    {a: 3, b:2},
    {a: 3, b:99},
    {a: 4, b:2}
] 
// 根据a去重 保留的是最后的重复值

function unique1(arr, key) {
   return Object.values(arr.reduce((tol, cur) => {
     tol[cur[key]] = cur   
     return tol
   }, {})) 
}
// 根据a去重 保留的是最前的重复值
function unique2(arr, key) {
    return Object.values(arr.reduce((tol, cur) => {
      if(!tol.hasOwnProperty(cur[key])) tol[cur[key]] = cur 
      return tol
    }, {})) 
 }



console.log(unique1(arrobj, 'a'));




function unique(arr, key) {
   return Object.values(arr.reduce((tol, cur) => {
        tol[cur[key]] = cur
        return tol
   }, {}))
}

console.log(unique(arrobj, 'a'));