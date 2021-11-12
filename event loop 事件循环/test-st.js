new Promise (resolve => {
    console.log('p1');
    resolve()
 }).then(() => {
     console.log('p1-then1');
 }).then(() => {
    console.log('p1-then2');
})

setTimeout(() => {
    console.log('st');
})

new Promise (resolve => {
    console.log('p2');
    resolve()
 }).then(() => {
     console.log('p2-then1');
 })


