class MyPromise {
   constructor (executor) {
       this.status = 'pending'
       this.value = undefined
       this.reason = undefined
        
       this.fulfilledFnList = []
       this.rejectedFnList = []
       
       const resolve = value => {
           setTimeout(() => {
            if(this.status !== 'pending') return 
            this.status = 'fulfilled'
            this.value = value
               while(this.fulfilledFnList.length) {
                   const cb = this.fulfilledFnList.shift()
                   cb(value)
               }
           })
       }
    
       const reject = reason => {
           setTimeout(() => {
            if(this.status !== 'pending') return 
            this.status = 'rejected'
            this.reason = reason
               while(this.rejectedFnList.length) {
                   const cb = this.rejectedFnList.shift()
                   cb(reason)
               }
           })
       }
    
       executor(resolve, reject)
   }
  
     // 链式调用-thenable接口
     then(resolveFn, rejectFn) {
        // 处理值穿透问题 忽略非函数参数
         typeof resolveFn !== 'function' ? resolveFn = value => value : null
         typeof rejectFn !== 'function' ? rejectFn = reason => {
              throw new Error(reason instanceof Error? reason : reason.message)
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
               // 当前状态pending 直接把then装进队列
               this.fulfilledFnList.push(fulfilledFn)
               this.rejectedFnList.push(rejectedFn)
              break  // fulfilled/rejected 直接执行then回调
              case 'fulfilled':
               fulfilledFn(this.value)  // 是上一个then回调的结果
               break
    
              case 'rejected':
               rejectedFn(this.reason) 
               break
            }
        })
       }
    // catch 方法
   catch(rejectFn) {
       return this.then(null, rejectFn)
   }
    
    // finally 方法
    finally(callback) {
        return this.then(
            value => MyPromise.resolve(callback().then(() => value) ),
            reason => MyPromise.resolve(callback().then(() => {throw reason}))
        )
    }

    // 静态方法resolve 
    static resolve (value) {
        if(value instanceof MyPromise) return value // 如果参数是Promise实例 直接return该实例
        return new MyPromise(resolve => resolve(value)) //否则就包裹一层
    }
    // 静态的reject方法  直接包一层就拒绝
    static reject (reason) {
        return new MyPromise((resolve, reject)  => reject(reason))
    }

}


new MyPromise((resolve, reject) => {
    reject(1)
})
.then(res => {
    console.log(res);
    return 123
})
.then(res => {
    console.log(res);
})
.catch(err => console.log(err.message))
.finally(console.log('finally'))


class MyPromise {
    constructor(executor) {
       this.status = 'pending'
       this.value = undefined
       this.reason = undefined
       
       this.resolveFnList = []
       this.rejectedFnList = []

       const resolve = value => {
           setTimeout(() => {
              if(this.status !== 'pending') return 
              this.status = 'fulfilled'
              this.value = value
              
             while(this.resolveFnList.length) {
                 const cb = this.resolveFnList.shift()
                 cb()
             }
           }, 0);
       }
       const reject = reason => {
           setTimeout(() => {
              if(this.status !== 'pending') return 
              this.status = 'rejected'
              this.reason = reason
              
             while(this.rejectedFnList.length) {
                 const cb = this.rejectedFnList.shift()
                 cb()
             }
           }, 0);
       }
       
       executor(resolve, reject)
    }

     then(resolveFn, rejectFn) {
        typeof resolveFn !== 'function' ? resolveFn = value => value : null
        typeof rejectFn !== 'function' ?  rejectFn = reason => { throw new Error(reason)} : null


        return new MyPromise((resolve, reject) => {

            const fulfilledFn = value => {
                try {
                    const res = resolveFn(value)
                    return res instanceof MyPromise ? res.then(resolve, reject) : resolve(res) 
                } catch (error) {
                    reject(error)
                }
            }
            const rejectedFn = reason => {
                try {
                    const res = rejectFn(reason)
                    return res instanceof MyPromise ? res.then(resolve, reject) : resolve(res) 
                } catch (error) {
                    reject(error)
                }
            }
           

            switch (this.status) {
               case 'pending': 
                   this.resolveFnList.push(fulfilledFn)
                   this.rejectedFnList.push(rejectedFn)
                   break
               case 'fulfilled':
                   fulfilledFn(this.value)
                   break
               case 'rejected':
                   rejectedFn(this.value)
                   break
            }
        })
     }

     catch(resolveFn) {
        return this.then(null, resolveFn)
     }

     finally(callback) {
        return this.then(
            value => new MyPromise(resolve => resolve(callback())).then(() => value)
            , reason => new MyPromise((resolve, reject) => reject(callback())).then(() => { throw reason })
        )
     }
} 