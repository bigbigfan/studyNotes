function Parent () {
	this.type = 'parent';
}

Parent.prototype.say = function () {
	console.log('parent say hello');
}
 

// 盗用构造继承
// 缺点：继承不了原型链上的方法

// {
// 	function Child() {
// 		Parent.call(this);
// 	}
// 	const c = new Child();
// 	console.log({c, 'c.type': c.type, 'c.say': c.say});
// }


// 组合继承 (构造 + 原型链)
// 缺点: 父类构造函数会执行两次

	function Child() {
		Parent.call(this);
	}
	Child.prototype = new Parent(); // 父类构造函数要执行两次

    const c = new Child();
	c.say()



// function Parent() {
//    this.name = 'parent'
//    this.play = [1,2,3,4]
// }

// function Child() {
//     Parent.call(this)
//     this.type = 'child'
// }

// Child.prototype = Object.create(Parent.prototype)
// Child.prototype.constructor = Child


// const child = new Child()
// console.log(child);



function myExtends (child, parent) {
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child
}

function Parent() {
    this.name = 'wzf'
}

Parent.prototype.say = function () {
    console.log('parent', this.name);
}

function Child(height) {
    Parent.call(this, height)
    this.type = 'child!'
    this.height = height
}

myExtends(Child, Parent)


const ch = new Child('180')
console.log(ch);
ch.say()




