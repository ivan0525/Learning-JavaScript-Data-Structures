// 买卖股票的最佳时机
// 使用贪心算法
function maxProfit(arr) {
  let res = 0;
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i] - arr[i - 1];
    if (temp > 0) {
      res+=temp;
    }
  }
  return res;
}

console.log(maxProfit([7,6,4,3,1]))