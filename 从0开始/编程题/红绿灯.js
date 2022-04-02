function light(color, delay) {
  return new Promise(resolve => {
      setTimeout(() => {
          console.log('当前颜色', color, new Date().getTime() - sTime);
          resolve()
      }, delay);
  })
}


async function circle() {
   await light('red', 1000)
   await light('yellow', 3000)
   await light('green', 2000)
   circle()
}

let sTime = new Date().getTime()
circle()
