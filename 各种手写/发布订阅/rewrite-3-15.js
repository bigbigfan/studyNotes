class Subscribe {
    constructor() {
        this.eventMap = {}
    }

    // on
    on(name, callback) {
        const map = this.eventMap
        if(!map.hasOwnProperty(name)) {
            map[name] = [callback]
        } else {
            map[name].push(callback)
        }
    }

    // emit

    emit (name, ...args) {
       const list = this.eventMap[name]
       list && list.forEach(async (cb) => {
            await cb(...args)
        })
    }

    // cancel 
    cancel(name, callback) {
        const list = this.eventMap[name]
        list.forEach((i, index) => {
            if(i === callback) {
                list.splice(index, 1)
            }
        })
    }

    // once - 定义一个新的闭包函数onceFn他的功能是执行一次我的callback然后注销掉该回调，

    once(name, callback) {
        // const _this = this
        const onceFn =  () => {
            callback()
           this.cancel(name, onceFn)
        }

        this.on(name, onceFn)
    }
}

const wzf = new Subscribe()

function workDay() {
    console.log('努力工作');
}
function makeMoney() {
    return new Promise(resolve => {
        setTimeout(() => resolve('赚100万'), 500)
    })
    .then(res => {
        console.log(res);
    })
}
function makeMoney2() {
    console.log('赚200万');
}

wzf.on('work', workDay)
wzf.on('money', makeMoney)
wzf.once('money', makeMoney2)
// wzf.cancel('money', makeMoney)


wzf.emit('work')
wzf.emit('money')
wzf.emit('money')
wzf.emit('money')
wzf.emit('money')
wzf.emit('money')
wzf.emit('money')
