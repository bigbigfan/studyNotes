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


const add = (...args) => {
    let sum = args.reduce((tol, cur) => tol += cur)
    // 科里化处理该函数
    const newSum = (...newArgs) => {
        sum = newArgs.reduce((tol, cur) => tol += cur, sum)
        return newSum 
    }
    newSum.toString = function() {
        return sum
    }
    // 抛出该函数
    return newSum
}

console.log(+add(1)(2)(3));

// toString() 方法返回一个表示当前函数源代码的字符串。  默认情况

function add(...args) {
   let sum = args.reduce((tol, cur) => tol += cur)
   
   const newSum = (...newArgs) => {
       sum = newArgs.reduce((tol, cur) => tol += cur , sum)
       return newSum
   }

   newSum.toString = function() {
       return sum
   }

   return newSum

}


console.log(+add(1)(2)(3));