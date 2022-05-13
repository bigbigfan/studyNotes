function quick(arr) {
    const l = arr.length 
    if(l <= 1) return arr
   
    const half = l / 2 || 0
    const halfItem = arr.splice(half, 1)[0]
    const left = []
    const right = []
    arr.forEach(i => {
        i <= halfItem? left.push(i) : right.push(i)
    })
    
    return [...quick(left), halfItem,...quick(right)]
}

console.log(quick([3,1,2,5,4]));






const arr = ['a', 'a', 'b', 'b', 'c', 'd']

function qufen(arr) {
    const set = new Set()
    
    for(let i = 0; i < arr.length; i++) {
        if(set.has(arr[i])) {
            set.delete(arr[i]) 
        } else {
            set.add(arr[i])
        }
    }
    
    return [...set] 
}

console.log(qufen(arr));