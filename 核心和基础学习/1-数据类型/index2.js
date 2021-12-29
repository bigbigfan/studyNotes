new Promise(resolve => {
    Promise.resolve().then(() => {
        console.log('1111');
    })
    resolve()
})
// .then(() => {
//    console.log('commit');
// })

setTimeout(() => {
    console.log('commit');
}, 0);