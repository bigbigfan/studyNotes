// p1 p2 都是Promise的实例，但是p2的resolve方法将p1作为参数
// 即一个异步操作的结果是返回另一个异步操作

// 这里p2设置的是1秒返回p1，但是由于p1设置的是3秒返回fail，那么在
// p1返回error之前p2的状态都取决于p1也就是pending
// 并且此时.then之后的语句都针对p1
// const p1 = new Promise(function (resolve, reject) {
//     setTimeout(() => reject(new Error('fail')), 3000)
//   })
  
//   const p2 = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(p1), 1000)
//   })
  
//   p2
//     .then(result => console.log(result))
//     .catch(error => console.log(error))
//   // Error: fail



// 调用resolve或reject并不会终结Promise的参数函数的执行

//  new Promise((resolve, reject) => {
//      resolve(1)
//      console.log(2);
//  }).then(r => {
//      console.log(r);
//  })



// Promise.prototype.then()
// Promise实例具有then方法，即then方法是定义在原型对象Promise.prototype上的
// 他的作用是为Promise实例添加状态改变时的回调函数
//前文说then方法的第一个参数是resolved的回调函数,第二个是rejected的回调,他们都是可选的
//then方法返回的是一个新的Promise实例（不是原来的那个Promise）因此可以采用链式写法,即then后面再接另一个then方法。这样也可以解决回调地狱的问题.




// Promise.prototype.catch()
//Promise.prototype.catch()方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数


const promise = new Promise((resolve, reject) => {
    // throw new Error('test');
    resolve('promise')
  });
  promise
  .then(
    // Promise.resolve('bar') 
    res => {
      console.log('hahhaha'); // 即使我没有处理res 后面的then也接受不到'promise'
    }
  ) // 值穿透问题，then期待的参数是函数 非函数会发生穿透
  .then(res => {
      console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

 

