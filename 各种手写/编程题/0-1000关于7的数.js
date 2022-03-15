// 个位是7的 i % 10 === 7
// 十位是7的 （i -（i % 10)）% 10 === 7
// 百位是7的

function includeSeven() {
  let counter = [];

  for (let i = 7; i < 1000; i++) {
    if (
      i % 10 === 7 ||  // 个位是7的数
      (i - (i % 100)) == 700  ||  
      ((i % 100) - ((i % 100) % 10 )) === 70
    //   ( 取后两位 - 后两位 % 10 ) === 70 说明十位是7
    ) {
        counter.push(i)
    }
  }

  return counter;
}

console.log(includeSeven());




