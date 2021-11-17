// Promise.resolve().then(() => {  // p1
//     console.log('p1')
//     setTimeout(() => { // p1-s
//         console.log('t1')
//         Promise.resolve().then(() => {
//             console.log('p4')
//         })
//     }, 0)
// })

// setTimeout(() => { // s1
//     console.log('t2')
//     Promise.resolve().then(() => { // s1-p1
//         console.log('p2')
//         setTimeout(() => { 
//             console.log('t3')
//         }, 0)
//     })
//     Promise.resolve().then(() => { // s1-p2
//         console.log('p5')
//     })
// }, 0)

//  p1 t2 p2 p5 t1 p4 t3

// 微任务队列 [p1]

// 宏任务队列 [s1]

// 清空微任务 [] -> 宏任务队列追加  [s1, p1-s]

// 拿出宏任务s1

// 微任务队列 [p2, p5]

// 宏任务队列 [p1-s, s1-p]

// 清空微任务队列 [] 

// 拿出宏任务p1-s ---- t1 

// 微任务队列 [p4]

// 清空微任务队列 []

// 拿出宏任务s1-p ---- t3




 
//  async function async1() {
//     console.log(1); 
//     const result = await async2(); 
//     console.log(3);  // p-await
//   } 
//   async function async2() { 
//     console.log(2); 
//   } 
//   Promise.resolve().then(() => {  // p1
//     console.log(4); 
//   }); 
//   setTimeout(() => {  // s1
//     console.log(5); 
//   }); 
//   async1(); 
//   console.log(6);


//   1 ,  2 ,  6 , 4 , 3 ， 5

//   微任务队列[p1]

//   宏任务队列 [s1]

//   微任务追加 [p1 , p-await]

// 清空微任务队列 []
// 拿出宏任务 s1







//   setTimeout(() => { // s1
//     console.log('setTimeout - 1')
//     setTimeout(() => { // s1-1
//       console.log('setTimeout - 1 - 1')
//     })
//     new Promise(resolve => { // p1-resolve
//       console.log('setTimeout - 1 - resolve')
//       resolve() 
//     }).then(() => { // p1-then
//       console.log('setTimeout - 1 - then')
//       new Promise(resolve => resolve()).then(() => { // p1-then-then
//           console.log('setTimeout - 1 - then - then')
//       })
//     })
//   })

//   setTimeout(() => { // s2
//     console.log('setTimeout - 2')
//     setTimeout(() => { // s2-1
//       console.log('setTimeout - 2 - 1')
//     })
//     new Promise(resolve => resolve()).then(() => { // p2-then
//       console.log('setTimeout - 2 - then')
//       new Promise(resolve => resolve()).then(() => { // p2-then-then
//           console.log('setTimeout - 2 - then - then')
//       })
//     })
//   })

 //  setTimeout - 1 , setTimeout - 1 - resolve,  setTimeout - 1 - then, setTimeout - 1 - then - then, setTimeout - 2, setTimeout - 2 - then, setTimeout - 2 - then - then,setTimeout - 1 - 1, setTimeout - 2 - 1

 // macro    

 // micro   

 //

















  
// setTimeout - 1 , 
// setTimeout - 1 - resolve, 
// setTimeout - 1 - then, 
// setTimeout - 1 - then - then, 
// setTimeout - 2, 
// setTimeout - 2 - then, 
// setTimeout - 2 - then - then,
// setTimeout - 1 - 1 , 
// setTimeout - 2 - 1
// 宏任务队列 s1 s2

// 拿出一个宏任务s1  -----  setTimeout - 1

// 宏任务队列 [s2 , s1-1]

// 微任务队列 [p1-then]

// 清空微任务队列 []  ->  新增微任务队列 [p1-then-then]

// 清空微任务队列[]

// 拿出宏任务 s2 ---- setTimeout - 2

// 宏任务队列 [s1-1, s2-1]

// 微任务队列 [p2-then]

// 清空微任务队列 [] -> 更新微任务队列[p2-then-then]

// 清空微任务队列 []

// 拿出宏任务 s1-1 ---- setTimeout - 1 - 1 
// 拿出宏任务 s2-1  ---- setTimeout - 2 - 1


// console.log(1)

// setTimeout(() => { // s1
//     console.log(2)
//     new Promise(resolve => {
//         console.log(4)
//         resolve()
//     }).then(() => { //s1-p1
//         console.log(5)
//     })
// })

// new Promise(resolve => { 
//     console.log(7)
//     resolve()
// }).then(() => { // p1
//     console.log(8)
// })

// setTimeout(() => {  // s2
//     console.log(9)
//     new Promise(resolve => {
//         console.log(11)
//         resolve()
//     }).then(() => { // s2-p1
//         console.log(12)
//     })
// })

// 1, 7, 8, 2, 4, 5, 9, 11, 12

// task :  

// microtask :  


// console.log(1)

// setTimeout(() => { // s1
//     console.log(2)
//     new Promise(resolve => { 
//         console.log(4)
//         resolve()
//     }).then(() => { // s1-p
//         console.log(5)
//     })
//     process.nextTick(() => { // s1-t
//         console.log(3)
//     })
// })

// new Promise(resolve => { 
//     console.log(7)
//     resolve()
// }).then(() => { // p
//     console.log(8)
// })

// process.nextTick(() => { // t
//     console.log(6)
// })

// 1 7 6 8 2 4  3  5

// task: 

// microtask: 


// console.log(1)

// setTimeout(() => {  // s1
//     console.log(2)
//     new Promise(resolve => {
//         console.log(4)
//         resolve()
//     }).then(() => { // s1-p
//         console.log(5)
//     })
//     process.nextTick(() => { // s1-t
//         console.log(3)
//     })
// })

// new Promise(resolve => {
//     console.log(7)
//     resolve()
// }).then(() => { // p1
//     console.log(8)
// })

// process.nextTick(() => { // t1
//     console.log(6)
// })

// setTimeout(() => { // s2
//     console.log(9)
//     process.nextTick(() => { // s2-t 
//         console.log(10)
//     })
//     new Promise(resolve => {
//         console.log(11)
//         resolve()
//     }).then(() => {  // s2-p
//         console.log(12)
//     })
// })
// 1 , 7,6, 8, 2, 4, 3 ,5, 9, 11, 10 , 12 

// task: 

// microtask:  

// s2

// setTimeout(() => {
// 	console.log(2)
// }, 2)

// setTimeout(() => {
// 	console.log(1)
// }, 1)

// setTimeout(() => {
// 	console.log(0)
// }, 0)

// setTimeout(() => {
// 	console.log(0)
// }, 0)

// setImmediate(() => {
//      console.log('immediate');   
// })

// var arr = [1,2,3]
// Array.prototype.a = 123
    
// for (let index in arr) {
//   let res = arr[index]
//   console.log(res)
// }
// 1 2 3 123

// for(let index in arr) {
//     if(arr.hasOwnProperty(index)){
//         let res = arr[index]
//   		console.log(res)
//     }
// }

// console.log(1);
// setTimeout(()=>{
//  console.log(2); // st1
// });

// new Promise((resolve)=>{ // p1
//  console.log(4)
//  resolve()
// }).then(()=>{ // p1-then1
// setTimeout(()=>{ // p1-then1-st1
//      console.log(5);
//   })
// }).then(()=>{  // p1-then2
//  console.log(6)
// })

// console.log(7);

// setTimeout(() => { // st2
//  console.log(5)
// new Promise(resolve => { // st2-p1
//     console.log(6)
//    setTimeout(() => { // st2-p1-st1
//       console.log(7)
//     })
//     resolve()
//   }).then(() => { // st2-p1-then
//     console.log(8)
//   })
// }, 500);

// new Promise(resolve => { // p2
//  console.log(9)
//  resolve()
// }).then(() => { // p2-then
//  console.log(10)
// setTimeout(() => { // p2-then-st1
//     console.log(11)
//   }, 0)
// })

// console.log(12)
// 1 4 7 9 12 10 6 2 5 11 5 6 8 7
// macro     st2-p1-st1
// micro       st2-p1-then
//st2(500)


// setTimeout(() => {
//     console.log('1')
// },0);

// new Promise((resolve) => {
//     console.log('2');
//     resolve()
// }).then(() => {
//     console.log('3');
// });

// console.log('4')

console.log('script start')

async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end') 
}

async1()

setTimeout(function() {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function() {
    console.log('promise1')
  })
  .then(function() {
    console.log('promise2')
  })

console.log('script end')


// 'script start'
// 'async2 end' 
// 'Promise' 
// 'script end' 
// 'async1 end' 
// 'promise1'
// 'promise2'
// 'setTimeout'

//  macro   st

//  micro    p-then1
