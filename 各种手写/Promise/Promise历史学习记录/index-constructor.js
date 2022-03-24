// 必须先弄懂构造函数

// -------------是什么，怎么用，为什么-------------

// ======== 什么是构造函数？：=======
// 在 JavaScript 中，用 new 关键字来调用的函数，称为构造函数。

// ======== 为什么要使用构造函数？：========

// 复用
// function Person(name, gender, hobby, age = 6) {
//     this.name = name
//     this.gender = gender
//     this.hobby = hobby
//     this.age = age
// }

// // 调用构造函数生成对象
// var p1 = new Person('wangzifan', '男', '摆烂', 7)
// var p2 = new Person('lpt', '男', '女', 8)
// var p3 = new Person('zyf', '男', '跑步', 10)
// var p4 = new Person('金卡戴珊', '女', 'wuxu')
 
// console.log(p1, p2, p3, p4);

//在使用对象字面量创建一系列同一类型的对象时，这些对象可能具有一些相似的特征(属性)和行为(方法)，此时会产生很多重复的代码，而使用构造函数就可以实现代码的复用。


//============== 构造函数的执行过程 =================
// 应当针对一个函数new调用的过程来判断这个函数是不是一个构造函数，对于new的执行可以仔细阅读红宝书
// 对于上面的构造函数 Person： 
//（1） 当以new关键字调用时，会创建一个新的内存空间，标记为Animal的实例#f1

//（2） 函数体内部的this指向该内存

// 每当创建一个实例的时候，就会创建一个新的内存空间，this指向对应的实例

//（3） 执行函数体内的代码

//（4） 默认返回this
// 由于函数体内部this指向新创建的内存空间，默认返回this 就相当于默认返回了该内存空间，也就是#f1，此时#f1的内存空间被变量p1所接受。也就是说p1这个变量，保存的内存地址就是#f1，同时被标记为Person的实例



// ============= 构造函数的返回值====================

// （1）默认返回this

// （2）手动添加一个基本数据类型的返回值，最终还是返回this
// function Person2() {
//     this.age = 28
//     return 50
// }
// 构造函数调用

// let p2 = new Person2()
// console.log(p2.age);  // => 28

// 普通函数调用
// let p2_pro = Person2()
// console.log(p2_pro);  //  => 50

//（3） 手动添加一个复杂数据类型（对象）的返回值，最终返回该对象

// function Person3() {
//     this.age = 28
//     return [1, 2, 3, 4, 5]
// }

// let p3 = new Person3()
// console.log(p3); // [1, 2, 3, 4, 5]

// function Person4() {
//     this.age = 35
//     return {
//         a: 1,
//         b: 2,
//         c: 3
//     }
// }

// let p4 = new Person4()
// console.log(p4); // { a: 1, b: 2, c: 3 }


// ===========================================================================


// function Fun(name) {
//     this.name = name
// }

// Fun.prototype = {
//      constructor: Fun,
//      say() {
//          console.log(this);
//      }
// }

// let a = new Fun('wangzifan')

// console.log(a);

// console.log(a);//Fun { name: 'wangzifan' }

// 上面代码总会实现如下内容

// 1， 创建一个构造函数 2，new 一个实例对象 3，实例对象拿到构造函数中的属性 4，实例对象a可以调用构造函数原型中的方法

// 对象的__proto__ === 其构造函数的prototype 即 a.__proto__ === Fun.prototype

// 我们知道了new 了之后，创建出来的对象的__proto__ 都被js默认设置指向到其构造函数的prototype


//  const x = val => {
//      console.log('hahahahahah', val);
//  }

//  typeof x === 'function'?  console.log('bushi') : null 

// console.log(x);



