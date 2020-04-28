const bSqrt = function (x) {
  var num = x;
  while (Math.abs(num * num - x) >= 1e-6) {
    num = (num + x / num) / 2;
  }
  return num;
}

console.log(bSqrt(2))
// var findDuplicate = function (nums) {
//   let quick = nums[0]
//   let slow = nums[0]
//   do {
//     slow = nums[slow]
//     quick = nums[nums[quick]]
//   } while (slow !== quick)
//   console.log(quick, slow)
//   quick = nums[0]
//   while (quick !== slow) {
//     slow = nums[slow]
//     quick = nums[quick]
//   }
//   return quick
// }

// console.log(findDuplicate([1, 2, 3, 4, 5, 6, 5]))

const mySqrt = function (x) {
  let low = 0,
    high = x
  let mid = low + (high - low) / 2
  while (Math.abs(mid * mid - x) >= 1e-10) {
    mid = low + (high - low) / 2
    if (mid * mid < x) {
      low = mid
    } else if (mid * mid > x) {
      high = mid
    }

  }
  return +mid.toFixed(6)
}

console.log(mySqrt(2))
