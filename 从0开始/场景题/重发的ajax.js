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
    let result //用于timeout判断是否取到结果
    
    // 调度逻辑
    function retry(resolve, reject, error = new Error('default error')) {
       if(counter >= max) {
            return reject(error)
       }
      
       fetch(url)
       .then(res => {
           console.log(res, 'result');
           result = res // 成功则更新result
           resolve(result)
       })
       .catch(err => {
           counter++
           console.log('重发第' + counter + '次');
           retry(err, resolve, reject)
       })

      //    15s超时重发   这个时间一般比较长
      timer = setTimeout(() => {
        //  todo: 超时用axios的canceltoken取消掉请求
         if(!result && counter < max) { // 防止resolve后有定时器还在跑
            counter++
             retry(resolve, reject, error)
             console.log('超时重发' , '当前' + counter +'次');
         } 
      }, 15 * 1000);

    }
    // 运行
    return new Promise((resolve, reject) => {
        retry(resolve, reject)
    })

}

reSendAJAX('http://www.baidu.com')

