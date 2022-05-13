function debounce(fn, delay) {
     let timer 
     return (...args) => {
       clearTimeout(timer)
       timer = setTimeout(() => {
           fn(...argumentsargs)
        }, delay);
     }

}

// 时间戳
function throttle(fn, delay) {
    let pre = Date.now()
    
    return (...args) => {
        let now = Date.now()
        if(now - pre >= delay) {
           fn(...args)
           pre = now
        }
    }
}

// 定时器
function throttle2(fn, delay) {
    let timer
    return (...args) => {
        if(!timer) {
            timer = setTimeout(() => {
                timer = null // cleartimeout并不会消除timer的计数 需要手动改变指向
                fn(...args)
            }, delay);
        }
    }
}


// 结合版本





// 防抖 

function debounce(fn, delay) {
    let timer 
   
    return (...args) => {
       clearTimeout(timer)
       timer = setTimeout(() => {
           fn(...args)
       }, delay);
    }
}




// 节流

function throttle(fn, delay) {
   let timer
   let isFirst = true
   return (...args) => {
      if(isFirst) {
          fn(...args)
          isFirst = false
      }

      if(!timer) {
          timer = setTimeout(() => {
              fn(...args)
              timer = null
          }, delay);
      }
   }
}



function throttle2(fn, delay) {
    let pre = Date.now()
    
    return (...args) => {
       const now = Date.now()
       if(now - pre >= delay) {
          fn(...args)
          pre = now
       }
    } 
}














function debounce(fn, delay) {
    let timer = null
    
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
         fn(...args)
      }, delay)
    }
  
}

