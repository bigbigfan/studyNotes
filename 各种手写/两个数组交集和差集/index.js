const a = [3]
const b = [1, 2 ,3] 
let intersection = a.filter(v => b.includes(v))
// let difference = a.concat(b).filter(v => !intersection.includes(v)) // a 并 b - a 交 b
let difference = a.concat(b).filter(v => !b.includes(v) || !a.includes(v)) // a 并 b - a 交 b
console.log(intersection);