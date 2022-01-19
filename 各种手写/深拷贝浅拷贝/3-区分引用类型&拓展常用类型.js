// 主程序
function deepClone(target, map = new Map()) {
  if (!isObject(target)) {
    return target;
  } else {
    let cloneTarget = Array.isArray(target) ? [] : {};
    if (map.has(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget);
    for (let key in target) {
      cloneTarget[key] = deepClone(target[key], map);
    }
    return cloneTarget;
  }
}

// 判断引用类型  排除function 和 null

function isObject(value) {
  const type = typeof value;
  return value !== null && (type === "object" || type === "function");
}
function getType(value) {
  return Object.prototype.toString.call(value)
}


// const x = {
//   a: 1,
//   b: {
//     name: 'wzf'
//   }
// }

// const res = deepClone(x)
// res.b.name = 'txj'

// console.log(res, x);

const y = null;

const res = deepClone(y);

console.log(res, y);
