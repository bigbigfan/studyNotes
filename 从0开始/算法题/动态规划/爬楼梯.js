function step (n) {
  const arr = [1,1]
  for(let i = 2; i <= n;i++) { // 这里一定是 <=
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
}

console.log(step(4));




// 节省空间
function step2(n) {
   
  if(n == 0 || n == 1) return 1
  let p = 1, q = 1, r = 1
  for(let i = 2; i <= n; i++) {
    p = q
    q = r
    r = p + q
  }     
  return r
}

console.log(fib(4));

// p 1   q 1   r 2   2
// p 1   q 2   r 3   3
// p 2   q 3   r 5   4





