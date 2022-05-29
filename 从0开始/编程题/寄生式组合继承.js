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


// 原型链继承就是把父构造函数的实例作为子构造函数的原型对象，调用构造函数生成实例



function Parent() {
    this.name = 'parent'
}

Parent.prototype.say = function() {
    console.log(this.name);
}


function Children() {
     Parent.call(this)     
}

Children.prototype = Object.create(Parent.prototype)
Children.prototype.constructor = Children
