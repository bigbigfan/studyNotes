// for in  遍历数组的索引
// for of  遍历数组的元素值





// const arr2 = ['a', 'b', 'c']

// for (let i of arr2) {
//     console.log(i);
// } // a b c
// for (let i in arr2) {
//     console.log(i);
// } // 0 1 2


// for of 遍历普通对象会报错 因为缺少iterator迭代器    
// -> 为什么对象没有内置迭代器 是因为对象结构可能会很复杂，不知道从哪里遍历开始,所以没有迭代器, 如果需要遍历对象，要自定义迭代器

//------------------------------- for in ----------------------------------
// for in 适合遍历对象 也可以遍历数组 但是存在一些问题

// index 是字符串型数字 不可以直接数学运算

// var arr = [1, 2, 3]
// for (let index in arr) {
//     let res = index + 1
//     console.log(res);
// } // 01 11 21

// 遍历顺序有可能不是实际数组内部顺序
// 使用for in会遍历数组所有的可枚举属性包括原型 可以使用hasOwnProperty()筛选实例属性

const obj1 = {
    a: '1',
    b: [1,2,3],
    c: {
        d: '2'
    }
}

Object.prototype.e = 'pro_to'

for (let i in obj1 ) {
    console.log(i);
} // a b c e

// for (let i in obj1) {
//     if(obj1.hasOwnProperty(i)) {
//         console.log(i);
//     }
// }


// ----------------- for of --------------------

// for of 遍历是数组元素值 而for of 遍历数组内的元素 不包括原型和索引

// const arr2 = ['a','b','c']
// arr2.a = 123

// Array.prototype.b = 123

// for (let value of arr2) {
//     console.log(value);
// } // 'a', 'b', 'c'

// 同样轻松遍历字符串
// const string = 'string'

// for (let i of string) {
// console.log(i);
// }

// Map类型拥有迭代器 一样可以遍历

// const names = new Map()
// names.set(1, 'one')
// names.set(2, 'two')
// names.set(3, 'three')
// // 每次循环 迭代器都会返回一个数组[key, value] 再用const [number, name] 立即对这个数组进行解构
// for (let [number, name] of names) {
//     console.log(number, name);
// }

// 以相同的方式可以遍历Set项
// const colors = new Set(['white', 'blue', 'red', 'white'])
// // const colorsList = [...colors]
// const colorsList = Array.from(colors)
// console.log(colorsList);

// 用entires() 和 for of 遍历普通对象
// const obj = {
//     'a': 1,
//     'b': 2,
//     'c': 3
// }

// for (let [key, value] of Object.entries(obj)) {
//     console.log(key, value);
// }



