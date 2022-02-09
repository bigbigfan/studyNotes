// function deepClone(target) {
//   if (typeof target == "object") {
//     let cloneTarget = Array.isArray(target)? [] : {};
//     for (let key in target) {
//       cloneTarget[key] = deepClone(target[key]);//核心，递归
//     }
//     return cloneTarget
//   } 
//     return target;
// }

// // 循环引用问题

// const target = {
//   value1: 1,
//   value2: 2,
//   value3: {
//     value: 3
//   }
// }

// target.target = target

// const cloneItem = deepClone(target)
// console.log(cloneItem);

// 解决循环引用问题，我们可以额外开辟一个存储空间，来存储当前对象和拷贝对象的对应关系，当需要拷贝当前对象时，先去存储空间中找，有没有拷贝过这个对象，如果有的话直接返回，如果没有的话继续拷贝，这样就巧妙化解的循环引用的问题

// function deepClone(target, map = new Map()) {
//   if (typeof target == "object") {
//     let cloneTarget = Array.isArray(target)? [] : {};
//     if(map.has(target)) { // 监测是否拷贝过该对象有就返回
//       return map.get(target)
//     }
//     map.set(target, cloneTarget) // 没有拷贝过就进行记录，说明这一次要拷贝它
//     for (let key in target) {
//       cloneTarget[key] = deepClone(target[key], map);//核心，递归
//     }
//     return cloneTarget
//   } else {
//     return target;
//   }
// }

// const target = {
//   value1: 1,
//   value2: 2,
//   value3: {
//     value: 3
//   }
// }

// target.target = target

// const cloneItem = deepClone(target)
// console.log(cloneItem); 

