// 手写Promise包含以下知识点 👇：

// Promise
// Class 类
// 改变this指向 (call、apply和bind)
// 事件循环 Event Loop
// 等

//首先创建一个myPromise 类

class myPromise {}

let promise = new Promise(() => {})

// 上面就是创建一个myPromise 类然后传入参数 不然这个实例用处不大 而这个参数是一个函数 并且传入这个参数的时候这个参数的时候这个函数参数会自动执行 executor

// 因此 我们需要在类的构造函数constructor 里添加一个参数这里用func做形参并且执行以下这个参数

// class myPromise {
//     constructor(func) {
//         func()
//     }
// }

// 二 实现resolve 和 reject

// 需要为这个函数参数传入它自己的函数 也就是resolve() 和 reject()
class myPromise {
    constructor(func) {
        func(resolve, reject)
    }
}

// 这里需要知道哪里调用resolve 和 reject 这两个参数 需要定义这两个参数
// 因此需要创造出这两个对象

// resolve 和 reject  也是以函数的形式来执行的 我们在原生promise 里也是在resolve 和  reject后面加括号来执行的 因此我们可以用类方法的形式来创建这两个参数

class myPromise {
    constructor (func) {
        func(resolve, reject)
    }
    resolve() {}
    reject() {}
}

