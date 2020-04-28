const fibonacciMemoization = function (n) {
  const memo = [0, 1];
  function fibonacci(n) {
    if (memo[n] != null) {
      return memo[n];
    }
    return (memo[n] = fibonacci(n - 2, memo) + fibonacci(n - 1, memo));
  }
  return fibonacci(n);
};
console.log(fibonacciMemoization(100));
