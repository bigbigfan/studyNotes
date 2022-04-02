var permutation = function(s) {
    const arr = s.split('')
    const res = []
    const used = {}

    const dfs = (path) => {
       if(path.length === arr.length) {
           res.push(path.slice())
           return 
       }

       for(let i = 0; i < arr.length; i++) {
           if(used[i]) {
               continue
           }
            
           if(arr[i - 1] === arr[i] && used[i - 1]) {
               continue
           }

           used[i] = true
           path.push(arr[i])
           dfs(path)  
           path.pop()
           used[i] = false
       }
    
    } 
    dfs([])
    return res.map(i => i.join(''))
};

console.log(permutation('aabc'));








var permutation1 = function(s) {
    const res = new Set()
    const visit = {}
    function dfs(path) {
        if(path.length === s.length) return res.add(path)
        for (let i = 0; i < s.length; i++) {
            if (visit[i]) continue
            visit[i] = true
            dfs(path + s[i])
            visit[i] = false
        }
    }
    dfs('')
    return [...res]
};

console.log(permutation1('aabc'));