// ================手写call 和 apply================
Function.prototype.myCall = function (context = global, ...args) {
  // 判断执行上下文是否是函数
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  const key = Symbol()
  context[key] = this;
  const result = context[key](...args);
  delete context[key];
  return result;
};

Function.prototype.myApply = function (context = global, args = []) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  const key = Symbol()// 声明一个独一无二的属性以免覆盖原有函数，也防止后续删除了本身就存在的同名fn函数
  context[key] = this;
  const reslut =  context[key](...args);
  delete  context[key] 
  return reslut;
};

// ============= test ==============
const obj = {
  a: 1,
  fn: function () {
     console.log('Im fn ,already existed');
  }
};

function Log(name = "", profession = "") {
  return `${name} - ${profession} - ${this.a}`;
}

// console.log(Log.myCall(obj, 'wzf', 'front'));
// console.log(Log.myApply(obj, ["wzf", "front"]));

// ================手写bind================

Function.prototype.myBind = function (context = global, ...args) {
  if (typeof this !== "function") {
    throw new Error(
      "Function.prototype.bind - what is trying to be bound is not callable"
    );
  }

  let fn = this; // 创建一个函数副本
  const Fn = function () {
    //  bind后的函数副本执行的时候也可以传入参数
    // 根据调用方式 传入不同绑定值
    const binArgs =  [...args,...arguments]
    return fn.apply(this instanceof Fn ? this : context, binArgs);
  };
  Fn.prototype = Object.create(fn.prototype); // 维护原型
  return Fn;
};

// console.log(Log.bind(obj, ['wzf', 'front'])());
// console.log(Log.myBind(obj, ['wzf', 'front'])('312'));

let value = 2;

let foo = {
  value: 1,
};

function bar(name, age) {
  this.habbit = "shopping";
  console.log(this.value);
  console.log(name);
  console.log(age);
}

bar.prototype.friend = "kevin"; // 原型上加东西了 bind之后也要保证可以访问得到 所以手写里加入了维护原型

let bindFoo = bar.myBind(foo, "disy"); // 作为构造函数调用

let bindObj = new bindFoo(12)

console.log(bindObj.friend); // 维护了原型，这样构造函数生成的实例可以访问原型上的属性



// bindFoo.prototype.friend = '3'









// bind 的性质是这样的 bind之后的函数如果作为了一个构造函数 被new调用 那么this是保留的 如果是普通的函数调用那么就用bind的对象的上下文
