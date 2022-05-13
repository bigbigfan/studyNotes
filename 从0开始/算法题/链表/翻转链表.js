

function reverseList (head) {
    let pre = null   // 前驱节点
    let cur = head   // 后驱节点
       
    while(cur) { // 当前节点存在就继续
       let temp = cur.next  // 后继节点
       cur.next = pre
       pre = cur
       cur = temp
    }
     
    return pre  //改造完的节点 
 
 }