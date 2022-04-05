function format(num) {
    if(num.length <= 3) return num // 小于等于3的可以爬了
    const str = num.toString()
    const l = str.length
    let res = ''
    for(let i = l - 1; i >= 0; i--) {
       if((l - i - 1) % 3 == 0 && i !== l - 1) {
           res = ',' + res
       }
       res = str.charAt(i) + res
    }
    return res
}

console.log(format(10000000000));


const number = 10000000000;
console.log(number.toLocaleString()); // Displays "3,500" 






function format(number) {
    let str = number.toString()
    const l = str.length
    if(l <= 3) return str
    let res = ''
    for(let i = l - 1; i >= 0; i--) {
       if((l - i - 1) % 3 === 0 && i !== l - 1) {
           res = ',' + res     
       }
       res = str[i] + res
    }
    return res
}


console.log(format(3500));