function deepClone (target, map = new Map() ) {
    if(typeof target !== 'object') return target

    const cloneTarget = Array.isArray (target) ? [] : {} 
    
    if(map.has(cloneTarget)) {
        return map.get(cloneTarget)
    } else {
        map.set(cloneTarget, target)
    }
    // 日期
    if(target instanceof Date) {
        return new Date(target)
    }
    
    // 函数
    if(target instanceof Function) {
        const Fn = function (...args) {
            target.call(this, ...args)
        }
        Fn.__proto__ = target.__proto__
        return Fn
    }

    for(let key in target) {
        cloneTarget[key] = typeof target[key] === 'object'? deepClone(target[key] ,map) : target[key]
    }
    return cloneTarget
}

const wzf = {
    a: {
        b: {
            c:1
        }
    },
    d: [1,2,3],
    say: function() {
        console.log('hahhahahh wzf');
    }
}
const txj = deepClone(wzf)
txj.a.b.c = 2
txj.d[2] = 4
console.log(wzf, txj);
txj.say()
