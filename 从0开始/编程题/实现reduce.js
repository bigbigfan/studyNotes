Array.prototype.myReduce = function(fn, init) {
    const arr = this
    let tol = init || arr[0]

    for(let i = init? 0 : 1; i < arr.length; i++) {
        tol = fn(tol, arr[i], i, arr)
    }
    return tol
} 

const arr = [1,2,3,4]

console.log(arr.myReduce((tol, cur) => {
    return tol += cur      
}, 0));

a