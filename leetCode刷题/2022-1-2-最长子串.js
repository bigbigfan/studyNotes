// const maxLengthStr = (s) => {
//     let i = 0, //左右两个指针  
//         j = 0,
//         curLength = 0 // 当前存储的最大长度
//     const l = s.length
//     const set = new Set() // hash
//     for(j; j < l; ++j) { // 右侧指针一直向右扩大滑动窗口的显示区域
//       if(!set.has(s[j])) { // 当前元素如果不在set中就加入set 更新当前长度 然后开启下一轮循环
//           set.add(s[j])
//           curLength = Math.max(set.size, curLength) 
//       } else { // 如果hash存在该项目 按照左侧指针删hash中的值 然后左侧指针右移
//          while(set.has(s[j])) {
//             set.delete(s[i]) // 如果右指针存在删除左指针
//             ++i // 左指针再右移动
//          }
//          set.add(s[j]) // 右侧指针对应项目加入set
//       }
//     }
//     return curLength
// }

//  console.log(maxLengthStr('bbbccabcdabcde'));

//  