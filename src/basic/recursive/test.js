const coinList = [1,2,5];
const count = 10;

/**
 * 
 * 暴力
 * 
 * 
  function coinCount(coinList, count) {
    function dp(n) {
      if (n === 0) {
        return 0;
      }
      if (n < 0) {
        return -1;
      }
      let res = Number.MAX_SAFE_INTEGER;
      for (let i = 0; i < coinList.length; i++) {
        const sub = dp(n - coinList[i]);
        // 子问题无解
        if (sub < 0) {
          continue;
        }
        res = Math.min(res, 1 + sub);
      }
      return res;
    }
    return dp(count);
  }

console.log(coinCount(coinList, count));
 */


/*
function coinCount(coinList, count) {
  // 带备忘录的递归
  const memo = {0:0};
  function dp(n) {
    if (memo.hasOwnProperty(n)) {
      return memo[n];
    }
    if (n === 0) {
      return 0;
    }
    if (n < 0) {
      return -1;
    }
    let res = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < coinList.length; i++) {
      const sub = dp(n - coinList[i]);
      // 子问题无解
      if (sub < 0) {
        continue;
      }
      res = Math.min(res, 1 + sub);
    }
    res !== Number.MAX_SAFE_INTEGER ? memo[n] = res : memo[n] = -1;
    return memo[n];
  }
  return dp(count);
}

console.log(coinCount(coinList, count));
 */

function coinCount(coinList, count) {
  // 初始化db数组
  // 凑成count，最多需要count个硬币（全部为1元的）
  const dp = Array(count+1).fill(count+1);
  dp[0] = 0;
  // i = 0,无效
  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < coinList.length; j++) {
      if (i - coinList[j] < 0) {
        continue;
      }
      // Math.min当其中某个参数不能转换成number类型是，返回结果为NaN
      if(isNaN(dp[i])) {
        dp[i] = 1 + dp[i-coinList[j]];
      } else {
        dp[i] = Math.min(dp[i], 1 + dp[i-coinList[j]]);
      }
    }
  }
  return dp[count] === count + 1 ? -1 : dp[count];
}

console.log(coinCount(coinList, count));

// 0 1 2 3 4
// 1 4 3 4 2

// dp[3] = 3; ==> 1,3,4
// dp[4] = 2; ==> 1,2
// dp = [1, 2, 2, 3, 2] // 最长子序的长度
const arr = [10,9,2,5,3,7,101,18];
function maxIncrease(list) {
  // dp[i]代表以list[i]结尾的子序长度，而以list[i]结尾的字序必须包含list[i]这个元素，所以将db数组全部初始化为1，即：最小字序长度。
  const dp = Array(list.length).fill(1);
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < i; j++) {
      // 以list[i]结尾的子序
      if (list[i] > list[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  let res = 0;
  for (let i = 0; i < dp.length; i++) {
    res = Math.max(res, dp[i]);
  }
  return res;
}

// console.log(maxIncrease(arr));

// matrix[i][j]只能由matrix[i-1][j+1]、matrix[i-1][j]、matrix[i-1][j-1]
const matrix = [[2, 1, 3], [6, 5, 4], [7, 8, 9]];
/**
 * 
function dp(matrix, i, j) {
  if (i<0||j<0||i>=matrix.length||j>=matrix[0].length) {
    return Number.MAX_SAFE_INTEGER;
  }
  // 到了最顶层直接返回
  if (i === 0) {
    return matrix[i][j];
  }
  return matrix[i][j] + Math.min(dp(matrix, i-1, j-1), dp(matrix, i-1, j), dp(matrix, i-1, j+1));
}

function minFallingPath(matrix) {
  let res = Number.MAX_SAFE_INTEGER;
  let len = matrix.length;
  
  for (let i = 0; i < len; i++) {
    res = Math.min(res, dp(matrix, len-1, i));
  }
  return res;
}

console.log('minFallingPath==> ', minFallingPath(matrix));
 */

let memo;
function dp(matrix, i, j) {
  if (i<0||j<0||i>=matrix.length||j>=matrix[0].length) {
    return Number.MAX_SAFE_INTEGER;
  }
  // 到了最顶层直接返回
  if (i === 0) {
    return matrix[0][j];
  }
  if (memo[i][j] !== Number.MAX_SAFE_INTEGER) {
    return memo[i][j];
  }
  memo[i][j] = matrix[i][j] + Math.min(dp(matrix, i-1, j-1), dp(matrix, i-1, j), dp(matrix, i-1, j+1));
  return memo[i][j];
}

function minFallingPath(matrix) {
  let res = Number.MAX_SAFE_INTEGER;
  let len = matrix.length;
  memo = Array(len).fill(Array(len).fill(Number.MAX_SAFE_INTEGER));
  for (let i = 0; i < len; i++) {
    res = Math.min(res, dp(matrix, len-1, i));
  }
  return res;
}

console.log('minFallingPath==> ', minFallingPath(matrix));