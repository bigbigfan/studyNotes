  function axios(url, data) {
      return new Promise((resolve, reject) => {
          reject(url)
      })
  }
  
  function againRequest(err) {
      const MAX = 5 // 最大5次  
      let counter = 0 //计数器
    
      if(counter >= MAX) {
          return Promise.reject(err)
      }
     // 计数
      counter++
     
      const delayRetry = Promise.resolve().then(() => {
        requestPost(url, data)
    })
  }


function requestPost(url, data) {
    axios(url, data)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
      againRequest(err)
    })
}
  
requestPost('api/getData', {a: 12})
