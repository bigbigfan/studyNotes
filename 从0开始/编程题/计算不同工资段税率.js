function caculateTax(n) {
    const map = new Map([
        [3000, 0.05],
        [6000, 0.1],
        [10000, 0.15]
    ])
    const keys = [...map.keys()]
    if(n >= keys[keys.length - 1]) return map.get(keys[keys.length - 1]) * n 
    for(let i = 0; i < keys.length; i++) {
        const min = keys[i - 1] | 0
        const max = keys[i]
        if(n >= min && n < max) {
            return n * map.get(keys[i])
        }
    }
  }



console.log(caculateTax(10000));



