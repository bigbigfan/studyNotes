Function.prototype.myCall = function(context, ...args) {
     const fn = this  
     const key = Symbol()
     context[key] = fn
     const result = context[key](...args)
     delete context[key]
     return result
}

Function.prototype.myApply = function(context, args) {
    const fn = this  
    const key = Symbol()
    context[key] = fn
    const result = context[key](...args)
    delete context[key]
    return result
}

Function.prototype.myBind = function(context, ...args) {
    const fn = this
    function Fn() {
        const bindArgs = [...args, ...arguments]
        return fn.call(this instanceof Fn ? this : context, ...bindArgs)
    }
    Fn.prototype = Object.create(fn.prototype)
    return Fn
}

const wzf = {
    name: 'wzf',
    say: function(height = 0, age = 0, gender = 'female') {
        console.log(`${this.name} + ${height} + ${age} + ${gender}`);
    }
}

const txj = {
    name: 'txj'
}


wzf.say.myCall(txj, 180, 25)
wzf.say.myApply(txj, [180, 25])
const bindSay = wzf.say.myBind(txj, 199, 250)
bindSay('male')








Function.prototype.myBind = function(context, ...args) {
      const fn = this
      const Fn = function() {
         const bindArgs = [...args, arguments]
         return fn.call(this instanceof Fn ? this : context, ...bindArgs)
      }
      Fn.prototype = Object.create(fn.prototype)
      return Fn
}


const wzf = {
    name: 'wzf',
    say: function(height = 0, age = 0, gender = 'female') {
        return `${this.name} + ${height} + ${age} + ${gender}`;
    }
}

const txj = {
    name: 'txj'
}
  
const boundSay = wzf.say.myBind(txj, 180, 25)
console.log(boundSay());






