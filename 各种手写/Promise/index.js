// （1） 
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


// （2）
// 调用resolve或reject并不会终结Promise的参数函数的执行
//  new Promise((resolve, reject) => {
//      resolve(1)
//      console.log(2);
//  }).then(r => {
//      console.log(r);
//  })


// （3）
// Promise.prototype.then()
// Promise实例具有then方法，即then方法是定义在原型对象Promise.prototype上的
// 他的作用是为Promise实例添加状态改变时的回调函数
//前文说then方法的第一个参数是resolved的回调函数,第二个是rejected的回调,他们都是可选的
//then方法返回的是一个新的Promise实例（不是原来的那个Promise）因此可以采用链式写法,即then后面再接另一个then方法。这样也可以解决回调地狱的问题.



// （4）
// Promise.prototype.catch()
//Promise.prototype.catch()方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数


// const promise = new Promise((resolve, reject) => {
//     // throw new Error('test');
//     resolve('promise')
//   });

  // promise
  // .then(
  //   // Promise.resolve('bar') 
  //   res => {
  //     console.log('hahhaha'); // 即使我这个函数没有处理res 后面的then也接受不到'promise' 
  //   }
  // ) // 值穿透问题，then期待的参数是函数 非函数会发生穿透
  // .then(res => {
  //     console.log(res);
  // })
  // .catch((error) => {
  //   console.log(error);
  // });

// const promise = new Promise((resolve, reject) => {
//     //  resolve('ok')  // 如果promise的状态已经resolved了，那么后续抛出错误也是没有意义的,这也是promise的基本性质
//      throw new Error('test')
//     //  reject(new Error('test'))
// })

// promise
// .then(res => {
//    console.log(res);
// }).catch(err => {
//    console.log(err);
// })


//（4）
// 通常不要去定义reject函数（then的第二个函数）而是用catch去捕获错误，ctach具有冒泡性质，任何一个then抛出错误都会被最后的catch捕获（个人认为一个then写满两个函数读起来跟地狱没区别）


// const someAsyncThing = function() {
//   return new Promise((resolve, reject) => {
//     // 下面一行会报错，因为x没有声明
//     resolve(x + 2);
//   });
// };

// someAsyncThing().then(() => {
//   console.log('everything is great');
// });
// setTimeout(() => { console.log(123) }, 2000); // 如果没有catch报错，在2s之后还是会输出123，而不是停止脚本运行
// 即promise内部的错误不会影响到外部的代码



// （5） promise内部的错误没有被catch，因为错误抛出是在下一轮事件循环，then的内容在上一轮微任务就已经结束了，错误会冒泡到外层成为未捕获的错误
// const promise = new Promise(function (resolve, reject) {
//   resolve('ok');
//   setTimeout(function () { throw new Error('test') }, 0)
// });
// promise.then(function (value) { console.log(value) });

//
// const someAsyncThing = () => {
//   return new Promise((resolve, reject) => {
//     // 下面一行会报错，因为x没有声明
//     resolve(x + 2);
//   });
// };

// someAsyncThing().then(() => {
//   return someOtherAsyncThing();
// }).catch((error) => {
//   console.log('oh no', error);
//   // 下面一行会报错，因为 y 没有声明
//   y + 2;
// }).then(() => {
//   console.log('carry on');
// });


//------------------------------------ api ----------------------------------------
//(1)
// Promise.prototype.finally()

//finally 的实现方法 明确finally实际是一个特殊的then 实现方法如下
// Promise.prototype.myFinally = function (callback) {
//   let P = this.constructor;
//   return this.then(
//     value  => P.resolve(callback()).then(() => value),
//     reason => P.resolve(callback()).then(() => { throw reason })
//   );
// };


// const p = new Promise((resolve, reject) => {
//   resolve('promise')
// })

// p.then(res => {
//   console.log(res);
//   throw new Error('oh error')
// })
// .catch((err) => {
//   console.log(err);
// })
// .myFinally(() => {
//   console.log('finally');
// })


//(2)
// Promise.all()
// 生成一个Promise对象的数组
// const promises = [100, 3, 50, 7, 11, 13].map((id) => {
//   const item = new Promise((resolve, reject)=> {
//      setTimeout(() => resolve(id +'s'),  id * 100)
//   })
//   return item
// })


// Promise.all(promises).then((posts) => {
//   console.log(posts);
// }).catch((err) => {
//   console.log(err);
// });



const promise1 = new Promise((resolve, reject) => {
   resolve('promise1')
})
.then(res => res)
.catch(e => e)

const promise2 = new Promise((resolve, reject) => {
   throw new Error('promise2')
})
.then(res => res)
.catch(e => e)


Promise.all([promise1, promise2])
.then(res => console.log(res))
.catch(e => console.log('err!!!',e))







