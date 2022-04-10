const Parent = function (height) {
    this.name = 'parent'
    this.height = height
}
Parent.prototype.say = function() {
    console.log('say', this.name);
}

const Child = function(...args) {
    Parent.call(this, ...args)
}
Child.prototype = new Parent() // 原型链继承 + 盗用构造函数 => 构造函数执行了两次  
// Child.prototype = Object.create(Parent.prototype)   
Child.prototype.constructor = Child

const c = new Child('180')

console.log(c);
c.say()


