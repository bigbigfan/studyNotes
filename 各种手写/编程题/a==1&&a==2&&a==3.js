// 小玩意 ==  操作符每次都会调用对象的valueOf 方法 在这一步做手脚
const a = {
  value: [1, 2, 3],
  valueOf: function () {
    return this.value.shift();
  },
};

console.log(a == 1 && a == 2 && a == 3);

const b = {
  value: 0,
  valueOf: function () {
    return (this.value += 1);
  },
};

console.log(b == 1 && b == 2 && b == 3);

// defineProperty

const c = {
  value: "",
  num: 0,
};

Object.defineProperty(c, "value", {
  get: function () {
    c.num += 1;
    return c.num;
  },
});

console.log(c.value === 1 && c.value == 2 && c.value == 3);






const x = {
  value: '',
  number: 0
}

Object.defineProperty(x, 'value',{
  get: function() {
     x.number++
     return x.num
  }
})

console.log(x.value === 1 && x.value == 2 && x.value == 3);