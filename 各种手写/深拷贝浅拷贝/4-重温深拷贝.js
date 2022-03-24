function deepClone (target, map = new Map()) {
    if(typeof target !== 'object') return target 
    // 递归的终点
    const cloneTarget = Array.isArray(target)? [] : {}
    
    if(map.has(target)) {
        return map.get(target)
    } else {
        map.set(target, cloneTarget)
    }
     
    // 函数
    if(typeof target === 'function') {
        const Fn = (...args) => {
            target(...args)
        }
        Fn.__proto__  = target.__proto__
        return Fn
    }
    // 日期
    if(target instanceof Date) {
        return new Date(target)
    }

    for (let key in target) {
        const value = target[key]
        cloneTarget[key] = typeof value === 'object' ? deepClone(value, map) : value
    }
    // 这是返回函数结果
    return cloneTarget
}

const x  = {
    a: 1,
    b: {
        c: {
            d: 2
        }
    },
    c: function() {
        console.log('function aaaaaa', this.a);
    }
}

const y = deepClone(x)
y.a= 3
console.log(x,y);

y.c()
x.c()