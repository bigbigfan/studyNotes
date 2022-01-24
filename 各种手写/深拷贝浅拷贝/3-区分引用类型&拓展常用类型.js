
// tag分类
const mapTag = "[object Map]"
const setTag = "[object Set]"
// 主程序
function deepClone(target, map = new Map()) {
  // 不是引用类型直接返回
  if (!isObject(target)) return target;
  // 处理引用类型
  let type = getType(target) // 获取类型
  let cloneTarget // 声明克隆后对象
  if(!canTraverse[type]) {
    console.log('不能遍历');
    return // 不能遍历的直接返回 
  } else {
    // cloneTarget = Object.create(target.constructor.prototype) // 看似和下面一样实际会导致map的set方法属性丢失报错
    const Ctor = target.constructor;
    cloneTarget = new Ctor();
  }

  // 处理循环引用
  if (map.has(target)) {
    return map.get(target);
  }
  map.set(target, cloneTarget);

  if(type === mapTag) { // 拷贝Map类型
    target.forEach((i, key) => {
      cloneTarget.set(key, deepClone(i, map))
    })
  } 

  // 数组或者对象
  for (let key in target) {
    cloneTarget[key] = deepClone(target[key], map);
  }
  return cloneTarget;
}

// 判断引用类型  排除function 和 null

function isObject(value) {
  const type = typeof value;
  return value !== null && (type === "object" || type === "function");
}
function getType(value) {
  return Object.prototype.toString.call(value);
}

// 提供类型

const canTraverse = {
  "[object Map]": true,
  "[object Set]": true,
  "[object Array]": true,
  "[object Object]": true,
  "[object Arguments]": true,
};


// const myMap = new Map([[1, 'hahha']])
// console.log(myMap);
// const x = {
//   a: 1,
//   b: {
//     name: 'wzf'
//   },
//   c: myMap
// }


// const res = deepClone(x)



const x1 = {
  a:1,
  b:2,
  c: {
    d: 999
  }
}

const x2 = deepClone(x1)

console.log(x2);

