
var a, b
(function () {
 console.log(a);
 console.log(b);
var a = (b = 3); // 这里var的 a，b会提升导致之前的 a b 都是undefined
  console.log(a); // 赋值两次内部 a = 3 b = 3
 console.log(b); })()
console.log(a); // 全局变量未做修改 a 是 undefined
console.log(b);
// undefined undefined 3 3 undefined 3








// this
var a = 10
let obj = {
 a: 20,
 fn: () => { console.log(this.a) }
}

var aa = { a: 30 }
obj.fn.call(aa)