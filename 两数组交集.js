
// hash表
let intersecte1 = function (nums1, nums2) {
  //保持短数组在前
  if (nums1.length > nums2.length) {
    intersecte1(nums2, nums1)
  }
  //遍历短数组，记录每项出现次数，设置对应的nums1[i] -> count  Map数据结构参照
  let map = new Map()
  for (let i = 0; i < nums1.length; i++) {
    let count = (map.get(nums1[i]) || 0) + 1
    map.set(nums1[i], count)
  }
  //遍历长数组，比对出现次数，遇重项压入res 更新Map中count对应次数（减法）
  let res = []
  for (let i = 0; i < nums2.length; i++) {
    let count = map.get(nums2[i]) || 0
    if (count) {
      res.push(nums2[i])
      map.set(nums2[i], count - 1)
    }
  }
  return res
}

// console.log(intersecte1([2, 3], [2, 3, 1])) // [2, 3]
// console.log(intersecte1([4, 5, 6], [4, 5])) // [4, 5]

// 双指针 + 排序
let intersecte2 = function (nums1, nums2) {
  // 升序排列
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  //声明指针和保存栈
  let i = 0, j = 0, res = []
  //遍历数组 相等时压入保存栈指针同时后跳，不等时小项指针后跳
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      res.push(nums1[i])
      i++
      j++
    } else nums1[i] < nums2[j] ? i++ : j++
  }
  return res
}

// console.log(intersecte2([2, 3], [2, 3, 1])) // [2, 3]
// console.log(intersecte2([4, 5, 6], [4, 5])) // [4, 5]