//  fn 一个函数  init 初始值
 Array.prototype.myRd = function (fn, init) {
     if(!Array.isArray(this)) {
         return new TypeError ('this must been function')
     }
     const arr = this
     let total = init || arr[0] // 默认是数组的第一项
    //  有初始值就从0遍历  否则从1遍历
    for(let i = init ? 0 : 1; i < arr.length; i++) {
        // 更新当前的total累加值
       total = fn(total, arr[i], i, arr)
    }
    return total
 }


 const x = [1,2,2,3,4,3,4].myRd((tol, cur) => {
    return tol.includes(cur)? tol : tol.concat(cur) 
 }, [])

 console.log(x);



 Array.prototype.myRedcue = function (fn, init) {
    const arr = this
    const l = arr.length
    let total = init || arr[0]

    for(let i = init ? 0 : 1; i < l; i++) {
        total = fn(total, arr[i], i, arr)
    }
   return total
}
const arr = [1,2,3,4]
const z = arr.myRedcue((total, cur) => total += cur, 0)
console.log(z);


function A(arr, num) {
    const l = arr.length
    const map = new Map()
    for(let i = 0; i < l; i++) {
     const res = num - arr[i] 
     if(map.has(res)) {
       return [map.get(res), i]
     } else {
       map.set(arr[i], i)
     }
    }
 }
console.log(two([1,2,3,4,5], 9));


