// 利用通配符配合querySelectorAll('*') 获取所有nodeName

const all = [...document.querySelectorAll('*')].map(i => i.nodeName)

// 利用Set去重

const type = new Set(all)