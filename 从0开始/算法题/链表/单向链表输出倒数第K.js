function getKthFromEnd(head, k) {
   let count = 0
   let cur = head
   while(cur) {
      cur = cur.next
      count++
   }
   cur = head
   for(let i = 0; i < n - k; i++) {
       cur = cur.next
   }
   return cur
}


function getKthFromEnd(head, k) {
  let s = head, f = head
   
  for(let i = 0; i < k; i++) {
      f = f.next
  }
  
  while(f) {
    s = s.next
    f = f.next
  }
  return s 
}