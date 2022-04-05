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


