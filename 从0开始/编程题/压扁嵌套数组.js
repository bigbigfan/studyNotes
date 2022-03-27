function flatArr (arr) {
    return arr.reduce((tol, cur) => {
       
       return tol.concat(Array.isArray(cur) ? flatArr(cur) : cur)
    }, [])
}

const Arr = [1,[2,3,[4]]]
console.log(flatArr(Arr));