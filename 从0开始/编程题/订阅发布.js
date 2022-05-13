class Subscribe {
    constructor() {
        this.eventMap = {}
    }

    on(name, callback) {
         if(!this.eventMap.hasOwnProperty(name)) {
             this.eventMap[name] = [callback]
         } else {
             this.eventMap[name].push(callback)
         }
    }
  
    emit(name, ...args) {
        this.eventMap.hasOwnProperty(name) && this.eventMap[name].forEach(cb => {
              cb(...args)
        })
    }
   

    off(name, callback) {
        this.eventMap[name].forEach((cb, index) => {
             if(cb === callback) {
                 this.eventMap[name].splice(index, 1)
             }
        })
    }

    once(name, callback) {
       const Fn = () => {
           callback()
           this.off(name, Fn)
       }
       this.on(name, Fn)
    }
}

function work1(a) {
    console.log(a);
}

function work2(a, b) {
    console.log(a);
    console.log(b);
}

const wzf = new Subscribe()

wzf.on('event', work1)
wzf.on('event', work2)

wzf.emit('event', 1, 2)











class Subscribe {

  constructor() {
      this.map = {}
  }
   
  on(name, callback) {
     if(this.map.hasOwnProperty(name)) {
         this.map[name].push(callback)
     } else {
         this.map[name] = [callback]
     }
  }
   
  emit(name) {
     this.map.hasOwnProperty(name) && this.map[name].forEach(cb => {
         cb()
     })
  }
  
  off(name, callback) {
      this.map.hasOwnProperty(name) && this.map[name].forEach((cb, index) => {
          if(cb === callback) {
              this.map[name].splice(index, 1)
          }
      })
  }
   
  once(name, callback) {
     function fn () {
        callback()
        wzf.off(name, fn)
     }  
     wzf.on(name, fn) 
  }


}

const wzf = new Subscribe()
function work() {
    console.log('work hard');
}


wzf.on('work', work)

wzf.emit('work')
wzf.emit('work')
wzf.emit('work')