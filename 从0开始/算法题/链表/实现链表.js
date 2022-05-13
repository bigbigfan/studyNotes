class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.size = 0
        this.head = null
    }

    append(element) {
    //   实例化新节点
       const node = new Node(element)
    //   找末尾节点
       let cur
       if(this.head == null) {
           this.head = node
       } else {
           cur = this.head
           while(cur.next) {
              cur = cur.next
           }
           cur.next = node // 连接节点
       } 
       this.size++ 
    }
    
    appendAt(position, element) {

    }
    
    remove(position) {

    }

    indexOf(element) {

    }

}

// const head = new Node(0)

const list1 = new LinkedList()
list1.append(1)
list1.append(2)
list1.append(4)
list1.append(4)
list1.append(4)

const list2 = new LinkedList()
list2.append(1)
list2.append(2)
list2.append(4)
// console.log(list1,list2);

var mergeTwoLists = function(l1, l2) {
    let head = new Node()  
    let main = head
    
    while(l1 && l2) {
         if(l1.element < l2.element) {
            main.next = l1
            l1 = l1.next
         }  else {
            main.next = l2
            l2 = l2.next
         }  
         main = main.next
    }
    
    main.next = l1 ? l1 : l2
    return head.next
};

const res =  mergeTwoLists(list1.head, list2.head)
console.log(res);