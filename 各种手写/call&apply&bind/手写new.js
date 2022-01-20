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

function aNew(ctor, ...args) {
    const constructor = ctor

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

