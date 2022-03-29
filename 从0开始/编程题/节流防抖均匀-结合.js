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