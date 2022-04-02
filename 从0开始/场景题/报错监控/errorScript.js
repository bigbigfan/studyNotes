const rj = () => new Promise((resolve, reject) => {
    reject('123')
   // resolve('先resolve')
   // throw '123'
})
.then(res => {
   // throw new Error('throw的错误')
})
rj()






// const asyncRj = async () => {
//     try {
//         console.log('async 做点啥');
//         const x = await rj()
//         console.log(x);
//     } catch (error) {
//         console.log(error);
//     }
// }

// asyncRj()
