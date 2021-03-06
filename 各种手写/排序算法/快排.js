// 大的放左边小的放右边然后递归执行
// function quick(arr) {
//   const l = arr.length;
//   if (l <= 1) return arr;
//   const halfIndex = l / 2 || 0;
//   const halfItem = arr.splice(halfIndex, 1)[0];
//   const leftArr = [];
//   const rightArr = [];
//   arr.forEach((i) => {
//     i > halfItem ? rightArr.push(i) : leftArr.push(i);
//   });
//   return [...quick(leftArr), halfItem, ...quick(rightArr)];
// }

// console.log(quick([1,3,2,4,6]))
// 上边这个快排只是让读者找找感觉，我们不能这样写快排，如果每次都开两个数组，会消耗很多内存空间，数据量大时可能造成内存溢出，我们要避免开新的内存空间，即原地完成排序

//  子程序的交换规则
//  以最后一位未基准数，再设定一个初始位置pos = -1， 然后从数组第一位开始循环 每当当前项比基准小就把 pos++ 然后取arr[pos] 和当前遍历项互换

// function quick(arr, left = 0, right = arr.length - 1) {
//   if (left < right) {
//     let pos = left - 1; // 初始位置是被置换的位置，是left - 1位
//     for (let i = left; i <= right; i++) {
//       let povit = arr[right]; //取末位作基准
//       if (arr[i] <= povit) {
//         //  pos自增后置换当前项 和 pos指向项
//         pos++;
//         [arr[pos], arr[i]] = [arr[i], arr[pos]];
//       }
//     }
//     //  一趟走完之后 以pos位置分割左小右大的数组
//     quick(arr, left, pos - 1); // pos - 1 是左侧数组最后一位的index
//     quick(arr, pos + 1, right);
//   }
//   return arr;
// }
// const arr = [1, 3, 2, 4, 6, 7, 7, 8, 9,0,77,54,32,65];

// console.time('quick sort')
// console.log(quick(arr));
// console.timeEnd('quick sort')

// 三路快排  --- 1

//  分区函数
const partition = function (arr, L, R) {
  // 基准值为数组的零号元素
  let p = arr[L];
  // 左区间的初始值: L
  let lt = L;
  // 右区间的初始值: R+1
  let gt = R + 1;
  for (let i = L + 1; i < gt; ) {
    if (arr[i] === p) {
      // 当前i指向的元素等于p
      i++;
    } else if (arr[i] > p) {
      // 当前i指向的元素大于p，将gt-1处的元素与当前索引处的元素交换位置，gt--
      // [arr[gt - 1], arr[i]] = [arr[i], arr[gt - 1]];
      swap(arr, gt - 1, i);
      gt--;
    } else {
      // 当前i指向的元素小于p，将lt+1处的元素与当前索引处的元素交换位置，lt+1，i+1
      // [arr[lt + 1], arr[i]] = [arr[i], arr[lt + 1]];
      swap(arr, lt + 1, i);
      lt++;
      i++;
    }
  }

  // i走向gt处，除了基准值外的元素，其余的空间已经分区完毕，交换基准值与lt处的元素，lt-1，最终得到我们需要的三个区间
  // [arr[L], arr[lt]] = [arr[lt], arr[L]];
  swap(arr, L, lt);
  lt--;
  // console.log(`三路快排后的数组: ${arr}`);
  return { lt: lt, gt: gt };
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

// const dataArr = [3, 2, 1, 4];
// console.log(partition(dataArr, 0, dataArr.length - 1));

//  主函数
const threeWayFastRow = function (arr, L, R) {
  // 当前数组的起始位置大于等于数组的末尾位置时退出递归
  if (L >= R) {
    return false;
  }
  let obj = partition(arr, L, R);
  // 递归执行: 将没有大于p,和小于p区间的元素在进行三路快排
  threeWayFastRow(arr, L, obj.lt);
  threeWayFastRow(arr, obj.gt, R);
};

console.time("三路快排");
const dataArr = [3, 1, , 4, 5, 2, 2, 3];
threeWayFastRow(dataArr, 0, dataArr.length - 1);
// console.log(`三路快排完成: ${dataArr}`);
console.timeEnd("三路快排");

//  三路快排 --- 2
// function quickSort(array) {
//   // change code below this line
//   let arr = array
//   myQuickSort(arr, 0, arr.length - 1)

//   // 主程序递归逻辑
//   function myQuickSort(a, l, r) {
//     if (l >= r) return
//     let k = Math.floor(Math.random()*(r-l) + l) //随机找一某一项作为基准
//     swap(a, l, k) // 找到之后和第一项交换
//     let [m1, m2] = partition3(a, l, r)
//     myQuickSort(a, l, m1 - 1)
//     myQuickSort(a, m2 + 1, r)
//   }
//   // 交换函数
//   function swap(a, i, j) {
//     let tmp = a[i]
//     a[i] = a[j]
//     a[j] = tmp
//   }
//   // 分区函数-3路
//   function partition3(a, l, r){
//     let x = a[l] // 当前索引元素
//     let lt = l
//     let gt = r
//     let i = lt
//     while(i <= gt){
//       if(a[i] < x){
//         swap(a, i, lt)
//         lt ++
//       } else if(a[i] > x){
//         swap(a, i, gt)
//         i --
//         gt --
//       }
//       i ++
//     }
//     return [lt, gt]
//   }
//   // change code above this line
//   return arr
// }
// console.log(quickSort([1, 4, 2, 8, 345]))

const Arr = [3, 1, 4, 5, 2, 2, 3];
const quickSort1 = (arr) => {
  const l = arr.length;
  if (l <= 1) return arr;
  const left = [];
  const right = [];
  const half = l / 2 || 0;
  const halfItem = arr.splice(half, 1)[0];
  arr.map((i) => {
    i < halfItem ? left.push(i) : right.push(i);
  });
  return [...quickSort1(left), halfItem, ...quickSort1(right)];
};
console.time("start");
console.log(quickSort1([3,2,1,4,5,6,2,3,45]));
console.timeEnd("start");




const quick313 = function(arr) {
  const l = arr.length
  if(l <= 1) return arr  //  长度小于1是递归的终点
  const left = []
  const right = []
  const half = l / 2 || 0
  const halfItem = arr.splice(half, 1)[0] // 这里，容易忘切，出一个数
  arr.map(i => {
    i < halfItem? left.push(i) : right.push(i)
  })
  return [...quick313(left), halfItem, ...quick313(right)]
}

console.log(quick313([3,2,1,4,5,6,2,3,45]));








const quick = function (arr) {
   const l = arr.length
   if(l < 1) return arr
   const left = []
   const right = []
   const half = l / 2 || 0
   const halfItem = arr.splice(half, 1)[0]
   arr.forEach(i => {
     i < halfItem ? left.push(i) : right.push(i)
   })
    
   return [...quick(left), halfItem, ...quick(right)]
}

console.log(quick([3,2,4,1,5]));


const babel = function (arr) {
  const l = arr.length
  for(let i = 0; i < l; i++) {
    let flag = false
    for(let j = 0; j < l - i -1; j++) {
       if(arr[j] > arr[j + 1]) {
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
          flag = true
       }
    }
    if(!flag) return arr
  } 
  return arr
}

console.log(babel([3,2,4,1,5]));





Array.prototype.myReduce =  function(fn, init) {
      const arr = this
      const l = arr.length
      let tol = init || arr[0]
      for(let i = init ? 0 : 1; i < l; i++) {
        tol = fn(tol, arr[i], i , arr)
      }
      return tol
} 

console.log([1,2,3,4].myReduce( (tol, cur) => { return tol += cur} ,0));











function debounce(fn, delay = 0) {
   let timer = null
   return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
          fn(...args)
      }, delay)
   }
}

function throttle(fn, delay = 0) {
  let previous = Date.now()
  return (...args) => {
      const now = Date.now()
    if( now - previous >= delay) {
        fn(...args)
        previous = now 
    } 
  }
}

function throttle2(fn, delay = 0) {
  let timer 
  return (...args) => {
    if(!timer) {
      timer = setTimeout(() => {
       fn(...args)
       timer = null
      }, delay)
   }
  }
}

function throttle1(fn, delay) {
  let timer, isFirst = true
  return (...args) => {
    if(isFirst) {
      fn(...args)
      isFirst = false
    }
     if(!timer) {
       timer = setTimeout(() => {
        timer = null
        fn(...args)
       }, delay);
     }
  }
}


function shot() {
  console.log('shot');
}

const dShot = throttle1(shot, 1000)

while(true) {  
  dShot()
}






function Person() {
    this.name = 'wzf'
}


function Child() {
      Person.call(this, arguments)
}

