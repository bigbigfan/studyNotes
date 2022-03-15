// let count = 1;
// let promiseFunction = () =>
//   new Promise(rs =>
//     window.setTimeout(() => {
//       rs(count++);
//     })
//   );


// let firstFn = firstPromise(promiseFunction);

function firstPromise(promiseFunction) {
   let p = null
   return function(...args) {
       return p ? 
       p 
       : (p = promiseFunction.apply(this, args).finally(() => (p = null)))  
   }
}

let count = 1;
let promiseFunction = () =>
  new Promise((rs) =>
    setTimeout(() => {
      rs(count++);
    }, 1000)
  );
let firstFn = firstPromise(promiseFunction);
firstFn().then(console.log); // 1
firstFn().then(console.log); // 1
firstFn().then(console.log); // 1
