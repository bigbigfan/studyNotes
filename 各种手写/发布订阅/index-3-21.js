class Subscribe {
    constructor() {
        this.eventMap = {}
    }

    on(name, callback) {
      let map = this.eventMap
      if(!this.eventMap.hasOwnProperty(name)) {
          map[name] = [callback]
      } else {
          map[name].push(callback)
      }
    }

    emit(name, ...args) {
       let map = this.eventMap
       map[name].forEach(async cb => {
          await cb(...args)
       })
    }

    off(name, callback) { 
       let map = this.eventMap
       map[name].forEach((item, index) => {
           if(item === callback) {
               map[name].splice(index, 1)
           }
       })
    }
    
    once(name, callback) {
        const Fn = (...args) => {
           callback(...args)
           this.off(name, Fn)
        }
        this.on(name, Fn)
    }
}


function work (time) {
   setTimeout(() => {
    console.log('work', time);
   }, 100)
}

const wzf = new Subscribe()

wzf.on('work', work)
wzf.off('work', work)
wzf.emit('work', '8h')
wzf.emit('work', '8h')
wzf.emit('work', '8h')