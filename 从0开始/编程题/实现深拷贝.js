function deepClone (target, map = new Map() ) {
    if(typeof target !== 'object') return target
    //  区分数组和对象
    const cloneTarget = Array.isArray (target) ? [] : {} 
    
    if(map.has(target)) {
        return map.get(target)
    } else {
        map.set(target, cloneTarget)
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




function deepClone(target, map = new WeakMap()) {
   if (typeof target !== 'object') return target
   const cloneTarget = Array.isArray(target) ? [] : {}
   if(map.has(target)) {
     return map.get(target)
   } else {
     map.set(target, cloneTarget)
   }
   
   if(typeof target === 'function') {
       const Fn = (...args) => {
            target.call(this, ...args)
       }
       Fn.__proto__ = target.__proto__
       return Fn
   }

   if(target instanceof Date) {
       return new Date(target)
   }


   for(let key in target) {
       cloneTarget[key] =  typeof target === 'object' ? deepClone(target[key], map) : target[key]
   }
   return cloneTarget
}


const a = {
    b: {
        c: 1
    },
    d: 2,
    e: [1,2,3],
    time: Date.now(),
    fuc: function say() {
        console.log(this.d);
    }
}

const cloneA = deepClone(a)
cloneA.b.c = 999

console.log(a, cloneA);






function deepClone(target, map = new Map()) {
   if(typeof target !== 'object') return target
   
   const cloneTarget = Array.isArray(target)? [] : {} 
   
   if(!map.has(target)) {
       map.set(target, cloneTarget) 
   } else {
       return map.get(target)
   }
    
   if(target instanceof Date) {
       return new Date(target)
   }

   if(target instanceof Function) {
       const fn = function() {
           return target.call(this)
       }
       fn.__proto__ = target.__proto__
       return fn
   }

   for(let key in target) {
       cloneTarget[key] = typeof target === 'object' ? deepClone(target[key], map) : target[key]
   }
    
   return cloneTarget
}