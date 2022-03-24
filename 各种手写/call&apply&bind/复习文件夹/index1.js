 function myInstanceof(left, right) {
    const prototype = right.prototype
    let PLeft = left.__proto__
    while(true) {
       if(PLeft === null) {
           return false
       } else if(PLeft = prototype) {
           return true
       }
       PLeft = PLeft.__proto__
    }
}

// console.log(myInstanceof(1, Number));



function myObject(obj) {
     function Fn () {}
     Fn.prototype = obj
     return new Fn() 
}

// const w = new myObject({name: 'wzf', say: function() {console.log(this.name)}}) 

// console.log(w, w.name);
// w.say()


function myNew(fn, ...args) {
    const instance = Object.create(fn.prototype)
    const temp = fn.call(instance, ...args)
    return temp !== null && (typeof temp === 'object' || typeof temp === 'function') ? temp : instance
}

// function Person (height) {
//     this.name = 'wzf'
//     this.height = height
// }
// Person.prototype.say = function () {
//     console.log(this.name);
// }

// const p = new Person(178)
// console.log(p, p.name, p.height);
// p.say()

 Function.prototype.myCall = function (context, ...args) {
     const fn = this
     const key = Symbol()
     context[key] = fn
     const result = context[key](...args)
     delete context[key]
     return result
}

Function.prototype.myApply = function (context, args) {
    const fn = this
    const key = Symbol()
    context[key] = fn
    const result = context[key](...args)
    delete context[key]
    return result
}


Function.prototype.myBind = function (context, ...args) {
    const fn = this
    function Fn () {
        const bindArgs = [...args, ...arguments]
        return fn.call(fn instanceof Fn ? this : context, bindArgs)
    }
    Fn.prototype = Object.create(fn.prototype)
    return Fn
}


const wzf = {
    name: 'wzf'
}

const txj = {
    name: 'txj',
    say: function (height) {
       return this.name + height
    }
}

console.log(txj.say.myCall(wzf, 180));
console.log(txj.say.myApply(wzf, [180]));
const boundFn = txj.say.myBind(wzf,)
console.log(boundFn(180));



function Parent() {
    this.name = 'wzf'
}
Parent.prototype.say = function (height) {
    return this.name + height
}

function Child() {
    Parent.call(this)
    this.child = 'wzf child'
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

const c = new Child()
console.log(c, c.say(180));


