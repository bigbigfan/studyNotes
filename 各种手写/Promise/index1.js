    // Promise/A+ 规范的三种状态
    const PENDING = 'pending'
    const FULFILLED = 'fulfilled'
    const REJECTED = 'rejected'
    
    class MyPromise {
       // 构造方法接受一个回调
       constructor(executor) {
           this._status = PENDING // Promise 状态默认设置成pending
           this._value = undefined // 储存then回调return的值
           this._resolveQueue = [] // 成功队列，resolve触发
           this._rejectQueue = [] // 失败队列，reject触发
         // 由于resolve/reject 是在executor内部被调用，因此需要使用箭头函数固定this指向，否则找不到this._resolveQueue  
           let _resolve = (val) => {
              const run = () => {
                if(this._status !== PENDING) return // 对应规范中的"状态只能由pending到fulfilled或rejected
              this._status = FULFILLED // 变更状态
              this._value = val //储存当前value
              // 这里之所以用一个队列储存回调，是为了实现规范要求的then方法可以被同一个Promise调用多次
              // 如果使用一个变量而非队列来储存回调，那么及时多次p1.then()也只会执行一次回调
               
                while(this._resolveQueue.length) {
                    const callback = this._resolveQueue.shift() // 队列是先进先出的和排队打饭一样
                    callback(val)
                }
              }
              setTimeout(run)
           }
           //实现reject
           let _reject = (val) => {
              const run = () => {
                if(this._status !== PENDING) return // // 对应规范中的"状态只能由pending到fulfilled或
               this._status = REJECTED // 变更状态
               this._value = val //储存当前value
               while(this._rejectQueue.length) {
                   const callback = this._rejectQueue.shift() 
                   callback(val)
               }
              }
              setTimeout(run)
            }  
           //  new Promise()时立即执行executor 并传入resolve和reject
            executor(_resolve, _reject)    
        }
       
        // then方法，接受一个成功的回调和一个失败的回调
        then(resolveFn, rejectFn) {
            // then的参数不是function 则我们需要忽略它 让链式调用继续往下执行
            typeof resolveFn !== 'function' ? resolveFn = value => value : null
            typeof rejectFn !== 'function' ? rejectFn = reason => {
                throw new Error(reason instanceof Error? reason.message: reason)
            } : null
    
    
    
            // return 一个新的promise
            return new MyPromise((resolve, reject) => {
             // 把resolveFn 重新包装一下，再push进resolve执行队列，这是为了能够获取回调的返回值进行分类讨论
                const fulfilledFn = value => {
                   try {
                //   执行第一个（当前的）Promise的成功回调，并获取返回值
                   let x = resolveFn(value)
                //  分类讨论返回值，如果是Promise那么等待Promise状态变更 否则直接resolve
                // 这里resolve 之后，就能被下一个.then()的回调获取到返回值，从而实现链式调用
                // console.log('re',resolve);
                   x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
                  } catch(error) {
                     reject(error)
                  }
                }
             
               // reject    
              const rejectedFn = error => {
                  try {
                      let x = rejectFn(error)
                      x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
                  } catch(error) {
                      reject(error)
                  }
                }
    
                // 分类讨论
                switch(this._status) {
                //  当状态为pending时 把then回调push进rsolve/reject执行队列等待执行
                case PENDING: 
                this._resolveQueue.push(fulfilledFn)
                this._rejectQueue.push(rejectedFn)
                break
                // 当状态已经变为resolve/reject时候直接then回调
                case FULFILLED: 
                fulfilledFn(this._value)
                break
                case REJECTED:
                rejectedFn(this._value)
                break
              }
            }) 
        }
    
         // catch方法
        catch(rejectFn) {
           return this.then(undefined, rejectFn)
        }
    
        // finally
        finally(callback) {
            return this.then(
                value => MyPromise.resolve(callback()).then(() => value),// MyPromise.resolve执行回调,并在then中return结果传递给后面的Promise
                reason => MyPromise.resolve(callback()).then(() => { throw reason })
            )
        }
    
        //静态的resolve方法
      // static resolve(value) {
      //   if(value instanceof MyPromise) return value //根据规范, 如果参数是Promise实例, 直接return这个实例
      //   return new MyPromise(resolve => resolve(value))
      // }
      //  //静态的reject方法
      // static reject(reason) {
      //   return new MyPromise((resolve, reject) => reject(reason))
      // }
    
    
    
    }
    
    
    const p1 = new MyPromise((resolve, reject) => {
        resolve(1)  // 同步executor测试 
    })
    
    // ================== 测试 =======================
    p1
    .then(res => {
        console.log(res, 'then1');
        return 2 // 链式调用测试
    })
    .then()
    .then(res => {
        console.log(res, 'then3');  // 值穿透测试
        return new MyPromise((resolve, reject) => {
            resolve(3) // 返回Promise测试
        })
    })
    .then(res => {
        console.log(res);
        throw new Error('reject测试')
    })
    .catch(err => console.log(err))
    .finally(() => {
      console.log('finally')
      return 'finally !!!!!'
    })
    .then(res => console.log('last then', res))
    
    
    
    
    // ================== Promise.prototype.catch() =======================
    
    // catch方法返回一个Promise 并处理拒绝的情况 它的行为与调用.then相同
    // catch方法其实就是执行了then的第二个回调
    // catch(rejectFn) {
    //   return this.then(undefined, rejectFn)
    // }
    
    
    // ================== Promise.prototype.finally() =======================
    
    // finally返回一个Promise 在Promise结束时，无论结果是fulfilled或者是rejected 都会执行指定的回调函数。在finally之后还可以继续then 并且会将值原封不动的传递给后面的then
    