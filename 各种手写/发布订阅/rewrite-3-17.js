class Subscribe {
   constructor() {
      this.eventMap = {}
   } 

  //on 
    on (name, callback) {
        let map = this.eventMap
        if(!map.hasOwnProperty(name)) {
            map[name] = [callback]
        } else {
            map[name].push(callback)
        }
    }
    

  //emit
    emit (name) {
        let list = this.eventMap[name]
        list && list.forEach(cb => cb())
    }

  //off
   off(name, callback) {
       let list = this.eventMap[name]
       list.forEach((item, index) => {
           if(item === callback) {
               list.splice(index, 1)
           }
       })
   } 
   // once
   once(name, callback) {
        const Fn = () => {
           callback()
           this.off(name, Fn)
       }
       this.on(name, Fn)
   }
} 


const person = new Subscribe()

function makeMoney() {
   console.log('赚钱');
}


person.on('money', makeMoney)
// person.once('money', makeMoney)
person.off('money', makeMoney)



person.emit('money')
// person.emit('money')
// person.emit('money')
// person.emit('money')
// person.emit('money')
// person.emit('money')



