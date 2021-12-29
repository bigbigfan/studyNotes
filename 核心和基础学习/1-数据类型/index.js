// JavaScript 是一种弱类型或者说动态语言。这意味着你不用提前声明变量的类型，在程序运行过程中，类型会被自动确定。这也意味着你可以使用同一个变量保存不同类型的数据：


// console.log(typeof(undefined));
// console.log(typeof(null));
// console.log(typeof(true));
// console.log(typeof(1));
// console.log(typeof('wzf'));
// console.log(typeof(null));
// console.log(typeof({name: 'wzf'}));
// console.log(typeof(() => console.log(1)));


// let arr = new Array()
// console.log(arr);
// console.log(typeof(arr));


//--------------Object.prototype.toString.call()

// const number = 1
// const string = '1'
// const nul = null
// const unde = undefined
// const func = () => console.log('func')
// const arr =  [1,2,3]
// const date = new Date()
// const err = new Error()
// const reg = /a/g
// const obj = {a:1}
// const boolean = false


// console.log(Object.prototype.toString.call('1'));

// function checkType() {
//     for(let i = 0; i< arguments.length;i++) {
//         console.log(Object.prototype.toString.call(arguments[i]));
//     }
// }

// checkType(number,string,nul,unde,func,arr,date,err,reg,obj,boolean)


// --------------------- 判断函数


// let class2type = {}

// // 生成class2type映射
// "Boolean Number String Function Array Date RegExp Object Error Null Undefined".split(" ").map((item, index) => {
//     class2type[`[object ${item}]`] = item.toLowerCase()
// })


// function type(obj) {
//     return typeof obj === "object" || typeof obj === 'function' ?
//     class2type[Object.prototype.toString.call(obj)] || "object" : typeof obj
// }

// // 可以直接利用type函数封装一个判断
// function isString(arg) {
//     return type(arg) === 'string'  
// }

// console.log(isString(1));

// function Dog(name, sex) {
//     this.name = name
//     this.sex = sex
// }
// function Dog(name, sex) {
//     this.name = name
//     this.sex = sex
// }

// Dog.prototype.toString = function dogToString() {
//     var ret = "Dog " + this.name + " is " + this.sex ;
//     return ret;
// }

// var theDog = new Dog('lkj', 'female')

// console.log(theDog.toString());



// ---------aaaaaa

// async function async1() {
//     console.log('async1');
//     await async2()
//     console.log('commit 触发修改mutations');
// }

// async function async2() {
//   Promise.resolve().then(() => {
//       console.log('接口数据返回'); //p-then
//   })
// }



// async1()
// // .then(() => {
// //     console.log('init');
// // })

// console.log('init');


//  async1  
//  [p-then, 'commit']
//  init
// []  ->  p-then 
// async1 p-then 接口数据返回 commit 触发修改mutations


//  -------bbbbb


async function async1() {
    console.log('async1');
    await async2()
   //commit是同步的，但是在这作为一个微任务
   console.log('commit 触发修改mutations');
}

async function async2() {
  Promise.resolve().then(() => {
      console.log('接口数据返回'); //p-then
  })
}



new Promise(resolve => {
    async1()
    resolve()
})
// .then(() => {
//     console.log('init');
// })






// console.log('init'); //1

// setTimeout(() => {
//     console.log('init');
// }, 0); // 2

// Promise.resolve().then(() => {
//     console.log('init');
// }) //solve-1
// setTimeout(() => {
//       console.log('init');
// }, 0); // solve-2