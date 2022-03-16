function myInstanceOf(left, right) {
   let prototype = right.prototype
   let leftP = left.__proto__
   while(true) {
       if(leftP === null) { // 原型链查找的终点是null
           return false
       } 
       if(leftP === prototype) { 
           return true
       }
       leftP = leftP.__proto__  //通过原型链逐层向上查找
   }
}

const arr = [1,2,3]
console.log(myInstanceOf(arr, Object));

class Parent{}

class Child extends Parent {}
const child = new Child()
console.log(myInstanceOf(child, Parent));