// 手动添加迭代器 - 最简单版本
let obj = {a:1, b:2, c:3}

obj[Symbol.iterator] = function() {
    const _this = this
    const keys = Object.keys(obj)
    let index = 0
    return {
        next() {
            return {
                value: _this[keys[index++]],
                done: index > keys.length 
            }
        }
    }

}


for (let i of obj) {
    console.log(i);
}

const newObj = {a: 5, b: 6, c: 7}





// 另解
for (let [key, value] of Object.entries(obj)) {
    console.log(key, value);
}






class MyPromise {
   
    constructor(executor) {
        this.status = 'pending'
        this.value = undefined
        this.reason = undefined
     
        this.fulfilledList = []
        this.rejectList = []
    
         
        const resolve = value => setTimeout(() => {
            if(this.status !== 'pending') return 
            this.status = 'fulfilled'
            this.value = value
            
            while(this.fulfilledList.length) {
                const cb = this.fulfilledList.shift()
                cb(value)
            }
       });
        const reject = reason => setTimeout(() => {
            if(this.status !== 'pending') return 
            this.status = 'rejected'
            this.reason = reason
            
            while(this.rejectList.length) {
                const cb = this.rejectList.shift()
                cb(reason)
            }
       });

      
        executor(resolve, reject)
    }


    then(resolveFn, rejectFn) {
        // 值穿透 
        typeof resolveFn !== 'function' ? resolveFn = value => value  : null
        typeof rejectFn !== 'function' ? rejectFn = reason => {throw new Error(reason) } : null

     return new MyPromise((resolve, reject) => {
        const fulfilledFn = value => {
            try {
               const res = resolveFn(value)         
               res instanceof MyPromise?  res.then(resolve, reject): resolve(res)
            } catch (error) {
               reject(error)
            }
        }
       
        const rejectedFn = value => {
            try {
               const res = rejectFn(value)         
               res instanceof MyPromise? res.then(resolve, reject): resolve(res)
            } catch (error) {
               reject(error)
            }
        }
        

        switch(this.status) {
          case 'pending': 
           this.fulfilledList.push(fulfilledFn)
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

    static resolve (value) {
        if(value instanceof MyPromise) return value
        return new MyPromise(resolve => resolve(value))
    }

    static reject (reason) {
       return new MyPromise((resolve, reject) => reject(reason))
    }
     
    finally(callback) {
       return this.then(
         value => MyPromise.resolve(callback()).then(() => value), 
         reason  => MyPromise.reject(callback()).then(() => {throw reason})
       )
    }

    static all (promise) {
       return new MyPromise((resolve, reject) => {
          const l = promise.length
          const resResult = []
          let counter = 0
          
          promise.forEach((item, index) => {
              MyPromise.resolve(item).then(res => {
                 resResult[index] = res 
                 counter++
                 if(l === counter) {
                     resolve(resResult)
                 }
              })
              .catch(err => reject(err))
          })
       })
    }

    static race (promises) {
        return new MyPromise((resolve, reject) => {
            promises.forEach(item => {
               MyPromise.resolve(item).then(res => {
                   resolve(res)
               })
               .catch(err => {
                   reject(err)
               })
            })
        })
    }

    static allSettled(promises) {
        return new MyPromise((resolve, reject) => {
            const l = promises.length
            const resResult = []
            let counter = 0
            promises.forEach((item, index) => {
               MyPromise.resolve(item).then(value => {
                   resResult[index] = {
                    status: 'fulfilled',
                    value
                  }
               })
               .catch(reason => {
                resResult[index] = {
                    status: 'rejected',
                    reason
                  }
               })
               .finally(() => {
                 counter++
                 if(counter === l) resolve(resResult)    
               }) 
            })
        })
    }

}


new MyPromise((resolve, reject) => {
    reject(1)
})
// MyPromise.reject(1)
.then(res => {
    console.log(res, 'then1');
    return 2
})
.then(res => {
     console.log(res, 'then2');
})
.catch(err => {
    console.log(err);
})
.finally(() => {
    console.log('finally');
})



const p = (value, time) => new MyPromise(resolve => {
   setTimeout(() => {
       resolve(value)
   }, time);
})

const rej = () => new MyPromise((resolve, reject) => reject(4))

// MyPromise.allSettled([p(2,2000), p(1, 1000), p(3, 3000), rej]).then(res => {
//     console.log(res);
// })



