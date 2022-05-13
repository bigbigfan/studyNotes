const b = [1,2,3,3,3,4]
const a = [3,3,4,5,6]
// 交集
const inter = a.filter(i => b.includes(i))
console.log(inter); // 3, 3,4

// 差异
const diff = a.concat(b).filter(i => !b.includes(i) || !a.includes(i))
console.log(diff); // 1,2,5,6

// 并集
const bing = inter.concat(diff).sort()
console.log(bing); // 1,2,3,4,5,6

