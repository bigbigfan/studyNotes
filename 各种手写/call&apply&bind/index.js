
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
   
   let fn = this  // 创建一个函数副本
   return function Fn(...arguments) { //  bind后的函数副本执行的时候也可以传入参数
    // 根据调用方式 传入不同绑定值
    return fn.call( // 根据是否是实例判断 ? 不知为什么要判断
      this instanceof Fn ? this : context, ...args, ...arguments 
    )
   }
}

// console.log(Log.bind(obj, ['wzf', 'front'])());
// console.log(Log.myBind(obj, ['wzf', 'front'])('312'));





