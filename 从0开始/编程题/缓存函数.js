let memoize = function (func, content) {
    let cache = Object.create(null)
    content = content || this
    return (...key) => {
      if (!cache[key]) {
        cache[key] = func.apply(content, key)
      }
      return cache[key]
    }
}
// 利用闭包，函数内部开辟一个结果集cache 如果该函数的结果存在直接从cache拿，如果没有就添加然后返回cache[key]
function mermory (fn, context) {
  const cache = Object.create()  
  context = context || this
  return (...key) => {
     if(!cache[key]) {
       cache[key] = fn.call(context, ...key)
     } 
     return cache[key]
  }
}


