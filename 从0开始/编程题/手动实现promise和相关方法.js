class MyPromise {
     constructor(executor) {
          this.status = 'pending'
          this.value = undefined
          this.reason = undefined

          this.resolveList = []
          this.rejectList = []

          const resolve = value => {
            setTimeout(() => {
                if(this.status !== 'pending') return
                this.status = 'fulfilled'
                this.value = value
                while(this.resolveList.length) {
                    const cb = this.resolveList.shift()
                    cb(value)
                }  
            }, 0);
          }
          const reject = reason => {
            setTimeout(() => {
                if(this.status !== 'pending') return
                this.status = 'fulfilled'
                this.reason = reason
                while(this.rejectList.length) {
                    const cb = this.rejectList.shift()
                    cb(reason)
                }  
            }, 0);
          }
    
        executor(resolve, reject)
     }
     
    then(resolveFn, rejectFn) {
        typeof resolveFn !== 'function' ? resolveFn = value => value : null
        typeof rejectFn !== 'function' ? rejectFn = reason => {
            throw new Error(reason)
        } : null

        return new MyPromise((resolve, reject) => {
             const fulfilledFn = value => {
                try {
                    let res = resolveFn(value)
                    // 这里的理解是对于该层的then如果返回的还是promise类型需要立即追加任务队列，后续的then要等待其结束，如果不是就继续执行后续的.then
                     res instanceof MyPromise ? res.then(resolve, reject) : resolve(res) 
                } catch (error) {
                    reject(error)
                } 
             }      
           
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
                 this.resolveList.push(fulfilledFn)
                 this.rejectList.push(rejectedFn)
                 break
                 case 'fulfilled':
                 fulfilledFn(this.value)
                 break
                 case 'rejected':
                 rejectedFn(this.reason)
                 break        
             }
        })
    } 


    catch(rejectFn) {
        return this.then(null, rejectFn)
    }

    static resolve(value) {
       if(value instanceof MyPromise) return value  // 是实例就return
    //    不是就包一层
       return new MyPromise(resolve => resolve(value))
    }

    static reject(reason) {
        return new MyPromise((resolve, reject) => reject(reason))
    }

    finally(callback) {
       return this.then(
           value => MyPromise.resolve(callback()).then(() => value),
           reason => MyPromise.reject(callback()).then(() => { throw reason})
       ) 
    }

    static all(promises) {
        return new MyPromise((resolve, reject) => {
             const l = promises.length
             let counter = 0
             let resResult = []
            
             promises.forEach((item, index) => {
                 MyPromise.resolve(item).then(res => {
                     resResult[index] = res
                     counter++
                     if(counter === l) {
                         return resolve(resResult)
                     }
                 }, err => reject(err)) 
             })
        })
    }

    static race(promises) {
       return new MyPromise((resolve, reject) => {
           promises.forEach((item) => {
               MyPromise.resolve(item).then(res => resolve(res), err => reject(err))
           })
       })
    }

} 


new MyPromise((resolve, reject) => {
   resolve(1)
})
.then(res => {
    console.log(res, 'then1');
    return 2
})
.then(res => {
    console.log(res, 'then2');
})
.finally(() => {
    console.log('finally');
})
.catch(err => {
    console.log(err, 'err!!!');
})

// const p = (value, delay) => new MyPromise(resolve => {
//     setTimeout(() => {
//         resolve(value, delay)
//     }, delay);
// }) 

// MyPromise.race([p(1, 1000), p(2, 2000), p(3, 3000)]).then(res => {
//     console.log(res, 'result');
// })
// .catch(err => console.log(err, 'errrr'))