function quick(arr) {
    const l = arr.length 
    if(l <= 1) return arr
   
    const half = l / 2 || 0
    const halfItem = arr.splice(half, 1)[0]
    const left = []
    const right = []
    arr.forEach(i => {
        i < halfItem? left.push(i) : right.push(i)
    })
    
    return [...quick(left), halfItem,...quick(right)]
}

console.log(quick([3,1,2,5,4]));



