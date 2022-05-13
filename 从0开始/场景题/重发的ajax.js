// 实现一个重发的请求， 并且在10s内超时直接报错
// 模拟请求
const fetch = function(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('请求失败');
            return reject(url)
        }, 4 * 1000);
    })
}

//  控制一个计数器，然后定时器和catch的计数公用，只要计数器超过max就不重发了
function reSendAJAX (url, max = 3) {
    let counter = 0 //计数器
    
    // 调度逻辑
    function retry(resolve, reject, error = new Error('default error')) {
        let controller = new AbortController()
        let signal = controller.signal;
       if(counter >= max) {
            return reject(error)
       }
      
       fetch(url, signal)
       .then(res => {
           resolve(res)
       })
       .catch(err => {
           counter++
           console.log('重发第' + counter + '次');
           retry(err, resolve, reject)
       })
    }
     
    const timer = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('10s到了，abort之前的请求');
            return reject(controller.abort())
        }, 10 * 1000)
    })
    
    const p = () => new Promise((resolve, reject) => {
        retry(resolve, reject)
    })

    // 运行
    return Promise.race([p(), timer()])

}

reSendAJAX('http://www.baidu.com').catch(err => console.log(err))

