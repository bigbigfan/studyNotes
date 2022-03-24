


class MyPromise {
   constructor(executor) {
     this.status = 'pending'
     this.value = undefined
     this.reason = undefined

     this.resolveFnQueue = [] 
     this.rejectFnQueue = [] 
     
     let resolve = value => {
        setTimeout(() => {
            if(this.status !== 'pending') return 
            this.status = 'fulfilled'
            this.value = value
            while(this.resolveFnQueue.length) {
               const cb = this.resolveFnQueue.shift()
            cb(value)
            }
        }, 0);
     }
     let reject = reason => {
       setTimeout(() => {
        if(this.status !== 'pending') return 
        this.status = 'rejected'
        this.reason = reason
         while(this.rejectFnQueue.length) {
             const cb = this.rejectFnQueue.shift()
             cb(reason)
         }
       }, 0);
     }
  
     executor(resolve, reject)
   }
    // 链式调用-thenable接口
   then(resolveFn, rejectFn) {
    // 处理值穿透问题 忽略非函数参数
     typeof resolveFn !== 'function' ? resolveFn = value => value : null
     typeof rejectFn !== 'function' ? rejectFn = reason => {
       throw new Error(reason)
     } : null



    //  return 一个新的promise包装
    return new MyPromise((resolve, reject) => {
        // 制造闭包封装resolveFn依赖
        const fulfilledFn = value => {
            try {
                // 执行第一个promise的成功回调 获取返回值
               let res = resolveFn(value)
               res instanceof MyPromise ? res.then(resolve, reject) : resolve(res) 
            } catch (error) {
                reject(error)
            }
        }
       

         // 制造闭包封装rejectFn依赖 
        const rejectedFn = reason => {
            try {
               let res = rejectFn(reason)
                res instanceof MyPromise ? res.then(resolve, reject) : resolve(res)
            } catch (error) {
                reject(error)
            }
        }
      

        switch(this.status) {
          case 'pending':
           // 收集依赖  
           this.resolveFnQueue.push(fulfilledFn)
           this.rejectFnQueue.push(rejectedFn)
          break
          case 'fulFilled':
           fulfilledFn(this.value)
           break

          case 'rejected':
           rejectedFn(this.reason) 
           break
        }
    })
   }

   catch(rejectFn) {
    return this.then(undefined, rejectFn)
  }
}

const x = new MyPromise((resolve, reject) => {
    resolve(123)
})
.then(res => {
    console.log(res);
    return 1
})
.then(res => {
    console.log(res);
})
// .catch(err => console.log(err))


setTimeout(() => {
    console.log(x);
}, 1000);






  