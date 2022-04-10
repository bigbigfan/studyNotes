function Foo() {
    this.a = function () {
        console.log(1);
    }
    
    Foo.a = function () {
        console.log(2);
    }
}
Foo.prototype.a = function () {
    console.log(3);
}

Foo.a = function() {
    console.log(4);
}


Foo.a()

const obj = new Foo()

obj.a()

Foo.a()