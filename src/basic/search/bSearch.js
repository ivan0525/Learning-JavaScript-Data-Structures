// 二分查找适合排序的数组
// 不适合链表，链表不支持随机访问
const bSearch = function (arr, value) {
  const { length } = arr
  let low = 0,
    high = length - 1
  while (low <= high) {
    // 当low和high比较大时，low+high可能会溢出
    let mid = Math.floor(low + (high - low) >> 1)
    if (arr[mid] === value) {
      console.log(mid)
      return mid
    } else if (arr[mid] < value) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
}
const arr = [8, 11, 19, 23, 27, 33, 45, 55, 67, 98]
console.log(bSearch(arr, 11))
