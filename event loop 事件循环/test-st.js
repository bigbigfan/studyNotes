// while函数会在计时长度没到time时间内卡在while内，一旦时间到了就会跳出循环打印'1s over'
//   function sleep(time) {
//     let startTime = new Date()
//     while (new Date() - startTime < time) {}
//     console.log('1s over')
//   }
//   setTimeout(() => {
//     console.log('setTimeout - 1')
//     setTimeout(() => {
//         console.log('setTimeout - 1 - 1')
//         sleep(1000)
//     })
//     new Promise(resolve => resolve()).then(() => {
//         console.log('setTimeout - 1 - then')
//         new Promise(resolve => resolve()).then(() => {
//             console.log('setTimeout - 1 - then - then')
//         })
//     })
//     sleep(1000)
//   })
  
//   setTimeout(() => {
//     console.log('setTimeout - 2')
//     setTimeout(() => {
//         console.log('setTimeout - 2 - 1')
//         sleep(1000)
//     })
//     new Promise(resolve => resolve()).then(() => {
//         console.log('setTimeout - 2 - then')
//         new Promise(resolve => resolve()).then(() => {
//             console.log('setTimeout - 2 - then - then')
//         })
//     })
//     sleep(1000)
//   })

  // 'setTimeout - 1' 'setTimeout - 1 - then' 'setTimeout - 1 - then - then'
  //  'setTimeout - 2' 'setTimeout - 2 - then' 'setTimeout - 2 - then - then'
  // 'setTimeout - 1 - 1'
  // 'setTimeout - 2 - 1'
  


//   setTimeout(() => {
//     console.log('timeout');
//   }, 0);
  
//   setImmediate(() => {
//     console.log('immediate');
//   });


// const fs = require('fs');

// fs.readFile(__filename, () => {
//   setTimeout(() => {
//     console.log('timeout');
//   }, 0);
//   setImmediate(() => {
//     console.log('immediate');
//   });
// });


  