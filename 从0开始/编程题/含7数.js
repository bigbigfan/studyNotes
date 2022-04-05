

function seven1(n) {
    const res = []  
    for(let i = 7; i < n ;i++) {
       let num = i
        while(num !== 0) {
           const leftNum = num % 10
           if(leftNum === 7) {
               res.push(i)
               break
           }         
           num = Math.floor(num / 10)
        }
    }
    return res
  }

  console.log(seven1(1000));

  function seven2(n) {
    const res = []  
    for(let i = 7; i < n ;i++) {
      circle(i)
      function circle(num) {
          if(num == 0) {
              return
          }
          const leftNum = num % 10
          if(leftNum == 7) { 
              res.push(i)
              return
          } 
         
          const after = Math.floor(num / 10)
          circle(after)
      }
    }
    return res
  }


console.log(seven2(1000));



