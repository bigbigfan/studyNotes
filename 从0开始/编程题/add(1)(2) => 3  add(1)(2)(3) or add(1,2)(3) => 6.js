// function add(...args) {
//   let sum = args.reduce((tol, cur) => tol + cur);// 累加参数和的函数
//     // 柯里化新函数 
//   function newSum(...sArgs) { // 收集新的参数
//     //利用闭包保存当前轮次的sum
//     sum = sArgs.reduce((tol, cur) => tol + cur, sum);
//     //返回柯里化函数为了让后面的()调用可以拿到这个函数体，类似递归
//     return newSum;
//   }
//   // 输出函数体会自动调用tostring 改写tostring 方法记录sum
//   newSum.toString = function () {
//     return sum;
//   };
//   return newSum; // 执行完毕输出的时候触发tostring
// }
// console.log(+add(1, 2)(2)(3));
// console.log(+add(1, 2)(2)(3)(4));
// console.log(+add(1, 2)(2)(3)(4)(12));


function add(...args) {
    let sum = args.reduce((tol, cur) => tol += cur)
    
    function newSum(...newArgs) {
        sum = newArgs.reduce((tol, cur) => tol += cur, sum)
        return newSum 
    }

    newSum.toString = function() {
        return sum
    }

    return newSum
}

console.log(add(1)(2)(3));
function add1 () {
    function fn () {
        console.log('wo fn');
    }
    
    fn.toString = function () {
        console.log('wo tostring');
        return 'tostring'
    }
    return fn
}

console.log(add1());

// toString() 方法返回一个表示当前函数源代码的字符串。  默认情况

