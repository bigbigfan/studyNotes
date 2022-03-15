

// // 手写Promise.all()
// function promiseAll(promises) {
//   return new Promise((resolve, reject) => {
//     if (!Array.isArray(promises)) {
//       throw new TypeError(`argument must be a array`);
//     }
//     let resolvedCounter = 0;
//     const promiseNum = promises.length;
//     let resolvedResult = []; // 最终返回的结果
//     for (let i = 0; i < promiseNum; i++) {
//       // 包裹一层Promise
//       Promise.resolve(promises[i]).then(value => {
//         resolvedCounter++; // 每次执行计数器自增
//         resolvedResult[i] = value; //赋值给对应的项
//         if (resolvedCounter == promiseNum) {
//           //判断最后一项停止
//           return resolve(resolvedResult);
//         }
//       }, error => reject(error));
//     }
//   });
// }


// 第二遍
function promiseAll1(promises) {
  return new Promise((resolve, reject) => {
    if(!Array.isArray(promises)) {
      throw new TypeError(`arguments is not Array`)
    }
    const l = promises.length
    let promiseCounter = 0
    let promisesRes = []
    for(let i = 0; i<l; i++) {
       Promise.resolve(promises[i]).then(value => {
        promiseCounter++
        promisesRes[i] = value
        if(promiseCounter == l) {
          return resolve(promisesRes)
        }
      }, error => reject(error))
    }
  })
}

// Promise.all 第三遍

function promiseAll3(promises) {
   return new Promise((resolve, reject) => {
     if(!Array.isArray(promises)) {
       throw new TypeError('arguments is not Array!')
     }
     const l = promises.length
     let counter = 0
     let resResults = []
     for(let i = 0; i < l; i++) {
       Promise.resolve(promises[i]).then(res => {
          resResults[i] = res 
          counter++
          if(counter === l) {
            return resolve(resResults)
          } // 触顶阻断
       }, err => reject(err))
     }
   })
}







function promiseAll4(promises) {
  
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
        throw new TypeError('arguments is not type of Array') 
    }
    
    const l = promises.length 
    let counter = 0 //计数器
    const resResults = []   // 收集器
    
    for(let i = 0; i < l; i++) {
      Promise.resolve(promises[i]).then(res => {
        
        resResults[i] = res
        counter++ 
        if(counter === l)  {
         return  resolve(resResults)
        }
      })
      .catch(err => reject(err))
    }
  })

}
// 就是要看所有promise的结果无论是否成功

function promiseAllSettled(arr) {
   return new Promise((resolve, reject) => {
      if(!Array.isArray(arr)) {
        throw new TypeError('argument is not an Array')
      }
      const l = arr.length
      let counter = 0
      const resResults = []
      
      for(let i = 0; i < l; i++) {
          Promise.resolve(arr[i]).then(value => {
            resResults[i] =  {
              status: 'fuilfilled',
              value
            } 
         })
         .catch(reason => {
           resResults[i] = {
              status: 'rejected',
              reason
           }
         })
         .finally(() => {
           counter++
           if( l ===  counter) {
            resolve(resResults)
           }
         })  
      }
   }) 
}




// promise.race
  
function promiseRace(arr) {
   if(!Array.isArray(arr)) {
     return new TypeError('argument must be an array')
   }
   return new Promise((resolve, reject) => {
     for (const p of arr) {
         Promise.resolve(p).then(res => {
            resolve(res)          
         })
         .catch(err => reject(err))
     }
   })
   
}



// promise.finally 
//1， finally 里的函数是不接受参数的
//2,  如果前一个promise结果是resolve 值会接着传递下去
//3， 接受的函数一定会执行 
// Promise.prototype.finally = function (onFinally) {
//   return this.then (
//     res => Promise.resolve(onFinally()).then(() => res),
//     err => Promise.resolve(onFinally()).then(() => { throw err })
//   ) 
// }


function aPromise(value) {
  return new Promise(resolve => setTimeout(() => {
    resolve(value)  
  }, value * 100))
}
function rej() {
  return new Promise((resolve, reject) => reject('haha reject!!!!!!'))
} 

const pArr = [aPromise(3), aPromise(2), aPromise(1),rej()]


Promise.prototype.catch = function (onError) {
  return this.then(null, onError)
}

promiseAll3(pArr)
.then(res => console.log(res))
.catch(err => console.log(err))























// 用map写的例子，不可行   这里的问题是return 不能跳出map循环

// function promiseAll2(promises) {
//   return new Promise((resolve, reject) => {
//     if(!Array.isArray(promises)) {
//       throw new TypeError(`arguments is not Array`)
//     }
//     // const l = promises.length
//     // let promiseCounter = 0
//     let promisesRes = []
//     // for(let i = 0; i<l; i++) {
//     //   return Promise.resolve().then(value => {
//     //     promiseCounter++
//     //     promisesRes[i] = value
//     //     if(promiseCounter == l) {
//     //       return resolve(promisesRes)
//     //     }
//     //   }, error => reject(error))
//     // }
//     promises.map((item, index) => {
//        Promise.resolve(item).then(value => {
//         promisesRes[index] = value
//       }, error => reject(error))
//     })
//     return resolve(promisesRes)
//   })

//   //这里的问题是return 不能跳出map循环
// }






// function New(ctor, ...args) {
//    const constructor = ctor

//    const obj = Object.create(constructor.prototype)

//    const temp =  constructor.call(obj, ...args)

//   return temp !== null && ( typeof temp === 'object' || typeof temp === 'function' ) ? temp : obj

// }


// function Person(job) {
//   this.job = job
//   this.name = 'wzf'
//   return {
//     a: 1
//   }
// }
// // const x = New(Person, 1)
// // console.log(x.job);

// const y = new Person()
// console.log(y);

