
// ================手写call 和 apply================
Function.prototype.myCall = function(context = global, ...args) {
  // 判断执行上下文是否是函数
  if(typeof this !== 'function') {
    throw new TypeError("Error");
  }

  context.fn = this
  const result = context.fn(...args)
  delete context.fn
  return result
}


Function.prototype.myApply = function(context, ...args) {
  if(typeof this !== 'function') {
    throw new TypeError("Error");
  }
  context.fn = this
  const applyArgs = [...args].flat()
  const reslut = context.fn(...applyArgs)
  return reslut
}
//  ================ call apply 复合版本================
Function.prototype.callOrApply= function(context, ...args) {
  const newArgs = [...args].flat() 
  context.fn = this
  const reslut = context.fn(...newArgs)
  delete context.fn
  return reslut
}

// ============= test ==============
const obj = {
  a:1 
}

function Log(name = '', profession = '') {
  return  `${name} - ${profession} - ${this.a}`
}



// console.log(Log.myCall(obj, 'wzf', 'front'));
// console.log(Log.myApply(obj, ['wzf', 'front']));



// ================手写bind================

Function.prototype.myBind = function (context = global, ...args) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }  

   let fn = this  // 创建一个函数副本
  const Fn = function () { //  bind后的函数副本执行的时候也可以传入参数
    // 根据调用方式 传入不同绑定值
    return fn.apply( 
      this instanceof Fn ? this : context, [...args, ...arguments]
    )
   }
   Fn.prototype = Object.create(fn.prototype) // 维护原型
   return Fn
}

// console.log(Log.bind(obj, ['wzf', 'front'])());
// console.log(Log.myBind(obj, ['wzf', 'front'])('312'));

let value = 2

let foo = {
  value: 1
}

function bar (name, age) {
  this.habbit = 'shopping'
  console.log(this.value);
  console.log(name);
  console.log(age);
}


bar.prototype.friend = 'kevin' // 原型上加东西了 bind之后也要保证可以访问得到 所以手写里加入了维护原型

let bindFoo = bar.myBind(foo, 'disy')  

var bindObj = new bindFoo('18') // bind后的函数可以作为一个构造函数调用 尽管在全局都声明了value但是 this.value -> undefined  this此时丢失了   

bindFoo.prototype.friend = '3'
console.log(bar.prototype.friend); // 原型上的属性friend被找到了。说明this绑定的对象是bar构造函数





// bind 的性质是这样的 bind之后的函数如果作为了一个构造函数 被new调用 那么this是保留的 如果是普通的函数调用那么就用bind的对象的上下文









