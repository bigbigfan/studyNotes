new Promise(resolve => {
    console.log('resolve');
    resolve()
}).then(() => {
    console.log('promise-then');
})

process.nextTick(() => {
    console.log('nextTick1');
    process.nextTick(() => {
        console.log('nextTick2');
    })
})
