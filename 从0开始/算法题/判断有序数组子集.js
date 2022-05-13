//简单但是复杂度是O(n*m) 
function isChildren1(a, b) {
   const res = a.every(i => b.includes(i))
   return res
}


//  如果是有序，快慢指针。 j每次都要在b中增，a只有匹配到合适的才会增，且a到顶了说明都匹配完了
//  时间复杂度是O(m)
function isChildren(a, b) {
    if(a.length == 0) return true
    let i = 0, j = 0
    while(j < b.length) {
        if(a[i] == b[j]) {
            i++
            if(i == a.length) {  // a是比b短的 a的指针一旦都匹配完毕就可以提前return true
                return true
            }
        }
        j++
    }
    return false // 如果快指针跑完了说明慢指针还没指到a的末尾，a有不是b内的元素，也就不是子集
}


const nums1 = [1,3,5,6]
const nums2 = [1,2,3,4,5]
console.log(isChildren(nums1, nums2));






