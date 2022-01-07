// 基本上，ES6 的class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。
// class Point {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
//     }
  
//     toString() {
//       return '(' + this.x + ', ' + this.y + ')';
//     }

//   }
  
// class 的实例化必须通过new关键字
//    const x = new Point(1, 2)
//    console.log(x.toString());


// 类的内部可以使用get 和 set 关键字 对某个属性设置存值函数和取值函数 拦截该属性的存取行为
     
// class MyClass {
//     constructor() {
//         //...
//     }

//     get prop() {
//         return 'getter'
//     }

//     set prop(value) {
//         console.log('setter:' + value);
//     }
// }

// let inst = new MyClass()

// inst.prop = 123 // setter:123

// console.log(inst.prop); // getter

// 上面代码中，prop属性有对应的存值函数和取值函数，因此赋值和读取行为都被自定义了。
// 存值函数和取值函数是设置在属性的 Descriptor 对象上的。

// class CustomHTMLElement {
//   constructor (element) {
//       thie.element = element
//   }
//   get html() {
//       return this.element.innerHTML
//   }
//   set html(value) {
//       this.element.innerHTML = value
//   }
// }

// var descriptor = Object.getOwnPropertyDescriptor(
//     CustomHTMLElement.prototype, "html"
// )

// console.log('get' in descriptor); // true
// console.log('set' in descriptor); // true

//* getter 与 setter 必须同级出现 *

// class Father1 {
//     constructor() {
//         // 或者都放在子类中 
//     }

//     get a() {
//         return this._a
//     }

//     set a (a) {
//         this._a = a
//     }
// }

// class Child1 extends Father1 {
//     constructor() {
//         super()
//     }
// }

// let test1 = new Child1()
// test1.a = 2
// console.log(test1.a);

//===========静态方法 static
// class 通过static关键字定义静态方法 不能在类的实例上调用静态方法 而应该通过类本身调用， 这些通常是实用程序方法，例如创建或克隆对象的功能。
// 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。

// class Foo {
//     static classMethod() {
//       return 'hello';
//     }
//   }
  
//   Foo.classMethod() // 'hello'
  
// //   var foo = new Foo();
// //   foo.classMethod()
//   // TypeError: foo.classMethod is not a function
//   console.log(Foo.classMethod()); // 通过类本身直接调用 // hello


//   ** 注意，如果静态方法包含this关键字，这个this指的是类，而不是实例。**

// class Foo {
//     static bar() {
//       this.baz();
//     }
//     static baz() {
//       console.log('hello');
//     }
//     baz() {
//       console.log('world');
//     }
//   }
  
//   Foo.bar() // hello
//   上面代码中，静态方法bar调用了this.baz，这里的this指的是Foo类，而不是Foo的实例，等同于调用Foo.baz。另外，从这个例子还可以看出，静态方法可以与非静态方法重名。

