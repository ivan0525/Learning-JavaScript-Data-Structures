const fibonacciMemoization = function (n) {
  const memo = [0, 1];
  function fibonacci(n) {
    if (memo[n] != null) {
      return memo[n];
    }
    return (memo[n] = fibonacci(n - 2) + fibonacci(n - 1));
  }
  return fibonacci(n);
};
console.log(fibonacciMemoization(5));

const fibonacciMemoization1 = function (n) {
  if (n <= 0) {
    return 0
  }
  const memo = [1, 1]
  if (n <= 2) {
    return memo[n - 1]
  }
  // 只需存储f(n-1)和f(n-2)的值
  for (let i = 3; i <= n; i++) {
    [memo[0], memo[1]] = [memo[1], memo[0] + memo[1]]
  }
  return memo[1]
}

// [3,2,1,0,4]
const jump = function (nums) {
  const len = nums.length
  let maxJumpLength = 0
  for (let i = 0; i < len; ++i) {
    if (i <= maxJumpLength) {
      maxJumpLength = Math.max(maxJumpLength, nums[i] + i)
      if (maxJumpLength >= len - 1) {
        return true
      }
    }
  }
  return false
}
// console.log(jump([1, 1]))

const canJump = function (nums) {
  // The "good" cell is a cell from which we may jump to the last cell of the nums array.

  // The last cell in nums array is for sure the "good" one since it is our goal to reach.
  let leftGoodPosition = nums.length - 1;

  // Go through all nums from right to left.
  for (let numberIndex = nums.length - 2; numberIndex >= 0; numberIndex -= 1) {
    // If we can reach the "good" cell from the current one then for sure the current
    // one is also "good". Since after all we'll be able to reach the end of the array
    // from it.
    const maxCurrentJumpLength = numberIndex + nums[numberIndex];
    if (maxCurrentJumpLength >= leftGoodPosition) {
      leftGoodPosition = numberIndex;
    }
  }

  // If the most left "good" position is the zero's one then we may say that it IS
  // possible jump to the end of the array from the first cell;
  return leftGoodPosition === 0;
}
console.log(canJump([1, 1]));
