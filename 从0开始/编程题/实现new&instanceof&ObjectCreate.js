function myNew (ctor, ...args) {
    const instance = Object.create(ctor.prototype)
    // const instance = new Object()
    // instance.__proto__ = ctor.prototype
    const temp = ctor.call(instance, ...args)
    return temp !== null && ( typeof tmep === 'object' || typeof temp === 'function') ? temp : instance
}


function Person(gender = 'female') {
    this.name = 'wzf'
    this.gender = gender
}
Person.prototype.say = function() {
   console.log(this.name + this.gender);
}

const p = myNew(Person, 'male')
console.log(p);
p.say()


function myInstanceof (left, right) {
   const prototype = right.prototype
   let leftP = left.__proto__
    
   while(true) {
     if(leftP === prototype) return true
     if (leftP === null) return false
     leftP = leftP.__proto__        
   }
}
console.log(myInstanceof('1', Number));





Object.prototype.myCreate = function (obj) {
     function F () {}
     F.prototype = obj
     return new F()
}

const x = Object.myCreate({haha: '123'})
console.log(x, x.__proto__);









function myNew(ctor, ...args) {
    const obj = Object.create(ctor.prototype)
    const temp = ctor.call(obj, ...args)
    
    return temp != null && (typeof temp === 'object' && typeof temp === 'function') ? temp : obj

}


Object.prototype.myCreate = function(obj) {
     const Fn = function() {}
     Fn.prototype = obj
     return new Fn() 
}




Function.prototype.myBind = function(context, ...args) {
      const fn = this     
      const Fn = function() {
          const bindArgs = [...arguments, ...args]
          return fn.call(this instanceof Fn ? this : context)
      } 
      Fn.prototype = Object.create(fn.prototype)     
      return Fn
}


function MyInctanceOf (left, right) {
     const prototype = right.prototype
     let proto = left.__proto__
     while(true) {
        if(proto == null) return false
        else if(proto == prototype) return true  
        proto = proto.__proto__         
     }   
}
const a = 1

console.log(MyInctanceOf(1, String));



const arr = [1, [2, [3, 4,[5]]]]

const myFlat = function(arr) {
     return arr.reduce((tol, cur) => {
          return tol.concat(Array.isArray(cur) ? myFlat(cur) : cur)
     }, [])
}

Function.prototype.myReduce = function(fn, init) {
       const arr = this      
       init = init || arr[0] 
       let tol = init 

       for(let i = init? 1 : 0 ; i < arr.length; i++) {
            tol = fn(tol, arr[i], i, arr)
       }
       return tol
}


console.log(myFlat(arr));



const debounce = function(fn, delay) {
     let timer = null
     return (...args) => {
         clearTimeout(timer)
         timer = setTimeout(() => {
               fn(...args)
         }, delay)
     }
}

const throttle = function(fn, delay) {
      let timer = null
      return (...args) => {
          if(!timer) {
              timer = setTimeout(() => {
                   timer = null
                   fn(...args)
              }, delay)
          }
      }
}