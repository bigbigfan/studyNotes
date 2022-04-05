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
  
    emit(name) {
        this.eventMap.hasOwnProperty(name) && this.eventMap[name].forEach(cb => {
              cb()
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

function work() {
    console.log('work');
}

const wzf = new Subscribe()
wzf.once('work', work)

// wzf.off('work', work)

wzf.emit('work')
wzf.emit('work')
wzf.emit('work')
wzf.emit('work')
