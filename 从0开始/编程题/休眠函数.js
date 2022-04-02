const sleep = (time) => new Promise(resolve => {
   setTimeout(() => {
    resolve()
   }, time);
})

async function run() {
    console.log('start');
    const x = await sleep(3000)
    console.log('end');
}
run()



const sleep2 = (delay) => {
     const pre = new Date().getTime()
     while(true) {
      const now = new Date().getTime()  
      if( now - pre >= delay) {
        break
      }
     }
}

console.log(11111);
sleep2(3000)
console.log(22222);


