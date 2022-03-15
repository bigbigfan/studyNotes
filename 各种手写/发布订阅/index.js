class EventEmitter {
    constructor() {
      // 事件对象，存放订阅的名字和事件
      this.eventMap = {};
    }
    // 订阅事件的方法
    on(eventName,callback) {
      if (!this.eventMap[eventName]) {
        // 注意数据，一个名字可以订阅多个事件函数
        this.eventMap[eventName] = [callback];
      } else  {
        // 存在则push到指定数组的尾部保存
        this.eventMap[eventName].push(callback)
      }
    }
    // 触发事件的方法
    emit(eventName) {
      // 遍历执行所有订阅的事件
      this.eventMap[eventName] && this.eventMap[eventName].forEach(cb => cb());
    }
    // 取消对应事件
    cancel(eventName, callback) {
        const list = this.eventMap[eventName]
        list.forEach((i, index) => {
            if(i === callback) {
                list.splice(index, 1)
            }
        })
    } 
  }

  let em = new EventEmitter()

  function workDay() {
      console.log('每天工作');
  }
 
  function makeMoney() {
      console.log('赚100万');
  }
  function makeMoney2() {
      console.log('赚200万');
  }

  em.on("money", makeMoney) // 订阅1
  em.on("money", makeMoney2) // 订阅2
  em.on("work", workDay) // 订阅3
  em.cancel("money", makeMoney)

  em.emit('money')
  em.emit('work')







// function Observe() {
//     this.eventMap = {}
// }

// Observe.prototype.on = function (name, callback) {
//     if(!this.eventMap[name]) {
//         this.eventMap[name] = [callback]
//     } else {
//         this.eventMap[name].push(callback)
//     }
//     return () => this.cancel(name, callback)
// }

// Observe.prototype.emit = function (name, data) {
//     this.eventMap[name].forEach(async cb => {
//         await cb(data)
//     })
// }

// Observe.prototype.cancel = function (name, callback) {
//     const list = this.eventMap[name]
//     list.forEach((i, index) => {
//        if(i === callback) {
//            list.splice(index, 1)
//        }
//    })
// }

// let wzf = new Observe()

// wzf.on('work', workDay)
// wzf.on('money', makeMoney)
// wzf.on('money', makeMoney2)
// wzf.cancel('money', makeMoney)

// wzf.emit('work')
// wzf.emit('money')


