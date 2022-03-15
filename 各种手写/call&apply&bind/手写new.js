// 先看new的功能
function Otaku (name, age) {
  this.name = name
  this.age = age
  this.habbit = 'Games'
}

Otaku.prototype.strength = 60 // 原型上加属性

Otaku.prototype.sayYourName = function () { // 原型上加方法
  console.log(`I am ${this.name}`);
}

// let person = new Otaku('Kevin', '18')

// console.log(person.name);
// console.log(person.habbit);
// console.log(person.strength)

// person.sayYourName()
// 上面可以看出实例person可以访问到构造函数的属性以及它原型的方法和属性

// 因为new是关键字 无法像bind函数一样直接覆盖 所以写一个函数 objectFactory 模拟new效果


// ==========================第一版手写=================================
function myNew(ctor, ...args) {
   // 定义构造函数
   let constructor = ctor
  // 创建一个空对象 其原型是构造函数的原型对象
  let obj = Object.create(constructor.prototype)
  // 执行构造函数
  constructor.call(obj, ...args)
  // 返回obj
  return obj
}


// 看原生的new效果： 当如果对于一个有返回值的构造函数 且返回值是对象  
function OtakuObject (name, age) {
  this.age = age
  this.habbit = 'Games'
  return {
    name,
    age,
    habbit: 'reading'
  }
}
OtakuObject.prototype.strength = 60
OtakuObject.prototype.sayYourName = function () { // 原型上加方法
  console.log(`I am ${this.name}`);
}
// const person = new OtakuObject('Kevin', '18') // 显然看到下面的结果，person实例只能访问到返回对象上的属性
// console.log(person.name);//  Kevin
// console.log(person.age);//  18
// console.log(person.habbit);//  reading
// console.log(person.strength);//  undefined
// person.sayYourName() // ERROR

// 看原生的new效果： 当如果对于一个有返回值的构造函数 且返回值只是基本类型  
function OtakuBase (name, age) {
  this.age = age
  this.habbit = 'Games'
  return 'wzf is handsome'
}
OtakuBase.prototype.strength = 60
OtakuBase.prototype.sayYourName = function () { // 原型上加方法
  console.log(`I am ${this.name}`);
}
// const person = new OtakuBase('Kevin', '18')  // 返回的基本类型被无视了，会访问实例上继承构造函数的属性
// console.log(person.name);//  undefined
// console.log(person.age);//  18
// console.log(person.habbit);//  Games
// console.log(person.strength);//  60
// person.sayYourName() // I am undefined
// ==========================第二版手写=================================

function myNewPro(ctor, ...args) {
  const constructor = ctor
  let obj = Object.create(constructor.prototype)//让实例对象可以访问构造函数原型 (constructor.prototype) 所在原型链上的属性
  const temp = constructor.call(obj, ...args)//改变this指向
   // 1,如果构造函数会返回一个对象那我们最后就返回这个对象，如果不是就返回新创建的obj  2, 由于null也是对象 原生new返回null其实也是不管的，需要兼容一下
  return typeof temp === 'object'? temp || obj : obj  
}


const person1 = myNewPro(OtakuObject, 'Kevin', '18')
console.log(person1.name);//  Kevin
console.log(person1.age);//  18
console.log(person1.habbit);//  reading
console.log(person1.strength);//  undefined

// const person2 = myNewPro(OtakuBase,'Kevin', '18')  // 返回的基本类型被无视了，会访问实例上继承构造函数的属性
// console.log(person2.name);//  undefined
// console.log(person2.age);//  18
// console.log(person2.habbit);//  Games
// console.log(person2.strength);//  60








// ==========================第三版手写=================================
//  还可以考虑下构造函数return function行为 也只需要一行代码 

function aNew(constructor, ...args) {
    const instance = Object.create(constructor.prototype)

    const temp = constructor.call(instance, ...args)
   
    return  temp !== null && (typeof temp == 'function' || typeof temp == 'object') ? temp : instance
}

function person(name, age) {
   this.name = name
   this.age = age
}
person.prototype.friend = 'txj'


const personWzf = aNew(person, 'wzf', 25)
// const personWzf = new person('wzf', 25)

console.log(personWzf, personWzf.friend);




//  ========= 手写写着玩

function myNew(Fn, ...args) {
   const instance = Object.create(Fn.prototype)
   const temp = Fn.call(instance, ...args)
   return temp !== null && (typeof temp === 'object' || typeof temp === 
   'function') ? temp : instance
}

function Person(name) {
  this.name = name
}

const p1 = new Person('wzf')
const p2 = myNew(Person, 'wzf')
console.log(p1, p2);




  
 Function.prototype.myCall = function (context, ...args) {
  if(typeof this !== 'function') {
    throw new TypeError('arguments must be function')
  }
  const key = Symbol()
  context[key] = this
  const result = context[key](...args)  
  delete context[key]
  return result
}

Function.prototype.myApply = function (context, args) {
  if(typeof this !== 'function') {
    throw new TypeError('arguments must be function')
  }
  const key = Symbol()
  context[key] = this
  const result = context[key](...args)  
  delete context[key]
  return result
}

Function.prototype.myBind = function (context, ...args) {
  if(typeof this !== 'function') {
    throw new TypeError('arguments must be function')
  }
  const fn = this // this指向当前的调用者
  function Fn() {
    const bindArgs = [...args, ...arguments]
    const reslut = fn.apply(this instanceof Fn? this : fn, bindArgs)
  }
  Fn.prototype = Object.create(fn.prototype)
  return Fn
}


const obj1 = {
  name: 'wzf'
}

const obj2 = {
  name: 'txj',
  say: function(age, height) {
     console.log(this.name + age + height);   
  }
}

const bindFn = obj2.say.myBind(obj1,26, 178)
bindFn()



Promise.prototype.promiseAll = function(promises) {
  return new Promise((resolve, reject) => {
    if(!Array.isArray(promises)) {
      throw new TypeError('arguments must be Array')
    } 
    const l = promises.length
    const resResults = []
    let counter = 0
    promises.forEach((item , index) => {
      Promise.resolve(item)
      .then(res => {
        resResults[index] = res
        counter++
        if(l === counter) {
          return resolve(resResults)
        }
      }, err => reject(err))
    })
  })
}

function p(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('我的' + time)
    }, time)
  })
}
const pp1 = p(100)  
const pp2 = p(200)
const pp3 = p(300)
const arr = [pp1, pp2, pp3]
Promise.prototype.promiseAll([...arr, Promise.reject('erroraaa')])
.then(res => console.log(res))
.catch(err => console.log(err))







Function.prototype.myCall = function(context, ...args) {
    const key = Symbol()
    context[key] = this
    const res = context[key](...args)
    delete context[key]
    return res
}
Function.prototype.myApply = function(context, args) {
    const key = Symbol()
    context[key] = this
    const res = context[key](...args)
    delete context[key]
    return res
}

const A = {
  name: 'wzf from A'
}

const B = {
  name: 'txj from B',
  sayName: function(arg1, arg2) {
    console.log(this.name + arg1 + arg2);
  }
}

B.sayName.myCall(A, 'must', 'fine')
B.sayName.myApply(A, ['must1', 'fine1'])



Function.prototype.myBind = function(context, ...args) {
  const fn = this
  function Fn() {
    const bindArgs = [...args, ...arguments]
    return fn.apply( this instanceof Fn ? this : context , bindArgs )
  }
  Fn.prototype = Object.create(fn.prototype)
  return Fn
}

const boundFn = B.sayName.myBind(A, 'aaa', 'bbb')
boundFn()



Promise.prototype.myAll = function(arr) {
  return new Promise((resolve, reject) => {
      const resResults = []
      let counter = 0
      arr.forEach((item, index) => {
        Promise.resolve(item).then(res => {
          resResults[index] = res
          counter++
          if(counter === arr.length) {
            return resolve(resResults)
          }
        }, err => reject(err))
      })

  })
}

const arr1 = [101, 201 , 301].map(i => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(i)
    } , i)
  })
})


Promise.prototype.myAll(arr1).then(res => console.log(res)).catch(err => console.log(err))
