// Number.EPSILON = (function () {
//   //解决兼容性问题（IE10不兼容）- Number.EPSILON 机器精度
//   return Number.EPSILON ? Number.EPSILON : Math.pow(2, -52);
// })();

// //上面是一个自调用函数，当JS文件刚加载到内存中，就会去判断并返回一个结果，相比if(!Number.EPSILON){
// // Number.EPSILON=Math.pow(2,-52);
// //}这种代码更节约性能，也更美观。

// function numbersequal(a, b) {
//   return Math.abs(a - b) < Number.EPSILON;
// }

// //接下来再判断
// var a = 0.1 + 0.2,
//   b = 0.3;
// console.log(numbersequal(a, b)); //这里就为true了

//  console.log(['1','2','3'].map(parseInt));

 console.log(parseInt('101', 2));