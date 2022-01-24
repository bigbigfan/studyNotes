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
    let cloneTarget = Array.isArray(target) ? [] : {};
    for (let key in target) {
      cloneTarget[key] = deepClone(target[key]); //核心，递归
    }
    return cloneTarget;
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

// const a = [1, 2, [3, 4]];

// const b = deepClone(a);
// b[2][0] = 1;
// console.log(b, a); // [ 1, 2, [ 1, 4 ] ] [ 1, 2, [ 3, 4 ] ]

// 重写1
// function deepClone1(target, map = new Map()) {
//    if(!isObject(target)) return target

//     let cloneTarget = Array.isArray(target) ? [] : {};
//     if (map.has(target)) {
//       return map.get(target);
//     }
//     map.set(target, cloneTarget);

//     for (let key in target) {
//       cloneTarget[key] = deepClone1(target[key], map);
//     }
//     return cloneTarget;
// }

// function isObject(value) {
//    return value !== null && (typeof value === 'object' || typeof value === 'function')
// }

// // const c1 = {
// //   a: 1,
// //   b: {
// //     c: 'hah'
// //   }
// // }

// // const c2 = deepClone1(c1)
// // c2.b.c = 'aaaaaaa'
// // console.log(c2, c1);

// let x1 = 1

// let x2 = x1
// x2 = 3
// console.log(x2, x1);


// 重写2
// 制造类型表
const mapTag = "[object Map]"
const setTag = "[object Set]"



function deepClone2(target, map = new Map()) {
  if (!isObject(target) || typeof target[Symbol.iterator] !== 'function') return target;

  let cloneTarget; // 声明克隆后对象
  const Ctor = target.constructor;
  cloneTarget = new Ctor()
  
  if (map.has(target)) {
    return map.get(target);
  } else {
    map.set(target, cloneTarget);
  }
  
  if(getType(target) === mapTag) {
     target.forEarch((i, key) => {
         cloneTarget.set(key, deepClone2(i, map))
     })
  }

  for (let key in target) {
    cloneTarget[key] = deepClone2(target[key], map);
  }
  return cloneTarget;
}

// 判断引用类型
function isObject(value) {
  return (
    value !== null && (typeof value === "object" || typeof value === "function")
  );
}

// 获取类型
function getType(value) {
  return Object.prototype.toString.call(value)
}



const x1 = {
  a:1,
  b:2,
  c: {
    d: 999
  },
  d: new Map([[1, 2]])
}

const x2 = deepClone2(x1)
console.log(x2);
