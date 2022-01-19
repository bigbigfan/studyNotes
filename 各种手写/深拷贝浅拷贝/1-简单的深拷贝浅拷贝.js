// 简单的浅拷贝
// function clone (target) {
//   let cloneTarget = {}
//   for (let key in target ) {
//      cloneTarget[key] = target[key]
//   }
//   return cloneTarget
// }

// const a = {
//   b: 1,
//   c: 2,
//   d:  {
//     e: 3
//   }
// }

// const _a = clone(a)

// _a.d.e =  4

// console.log(a, _a); // { b: 1, c: 2, d: { e: 4 } } { b: 1, c: 2, d: { e: 4 } }

// // 简单的深拷贝
function deepClone(target) {
  if (typeof target == "object") {
    let cloneTarget = Array.isArray(target)? [] : {};
    for (let key in target) {
      cloneTarget[key] = deepClone(target[key]);//核心，递归
    }
    return cloneTarget
  } 
    return target;
}

// const a = {
//   b: 1,
//   c: 2,
//   d: {
//     e: 3,
//   },
//   f: {
//     g: 4
//   }
// };

// b = deepClone(a);
// console.log(b);

const a = [1, 2, [3,4]]


const b = deepClone(a)
b[2][0] = 1
console.log(b , a); // [ 1, 2, [ 1, 4 ] ] [ 1, 2, [ 3, 4 ] ]