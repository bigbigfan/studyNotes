// const fs = require('fs');

// function someAsyncOperation(callback) {
//   // Assume this takes 95ms to complete
//   fs.readFile('/path/to/file', callback);
// }

// const timeoutScheduled = Date.now();

// setTimeout(() => {
//   const delay = Date.now() - timeoutScheduled;

//   console.log(`${delay}ms have passed since I was scheduled`);
// }, 100);


// // do someAsyncOperation which takes 95 ms to complete
// someAsyncOperation(() => {
//   const startCallback = Date.now();

//   // do something that will take 10ms...
//   while (Date.now() - startCallback < 10) {
//     // do nothing
//   }
// });


// console.log('start')
// setTimeout(() => { // st1
//   console.log('timer1')
//   Promise.resolve().then(function() { // st1-p
//     console.log('promise1')
//   })
// }, 0)
// setTimeout(() => { //st2
//   console.log('timer2')
//   Promise.resolve().then(function() { // st2-p
//     console.log('promise2')
//   })
// }, 0)
// Promise.resolve().then(function() {
//   console.log('promise3') // p
// })
// console.log('end')

// start end promise3 timer1 promise1 timer2 promise2

// macro:   st2

micro: 
Promise.resolve().then(() => {
    console.log(0);
    return Promise.resolve(4);
}).then((res) => {
    console.log(res)
})

Promise.resolve().then(() => {
    console.log(1);
}).then(() => {
    console.log(2);
}).then(() => {
    console.log(3);
}).then(() => {
    console.log(5);
}).then(() =>{
    console.log(6);
})





// 0 1 
// mac 
// mic  