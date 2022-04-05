function step (n) {
  const arr = [1,1]
  for(let i = 2; i <= n;i++) { // 这里一定是 <=
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
}

console.log(step(4));



function step(n) {
  const arr = [1,1]
  
  for(let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
}

console.log(step(4));