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









const obj = {a: 1, b: 2, c: 3}

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

for(let i of obj) {
    console.log(i);
}

