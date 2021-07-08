/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0 || strs === null) {
    return '';
  }
  let minLength = Number.MAX_SAFE_INTEGER;
  for (let str of strs) {
    // 遍历字符串数组，确定最短字符串的长度
    minLength = Math.min(str.length, minLength);
  }
  // 二分法
  let low = 0, high = minLength;
  while (low < high) {
    let mid = Math.floor((high - low + 1) / 2) + low;
    if (isCommonPrefix(strs, mid)) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }
  return strs[0].substring(0, low);
};

var isCommonPrefix = function (strs, len) {
  let str0 = strs[0].substring(0, len);
  let count = strs.lenght;
  for (let i = 1; i < count; i++) {
    let str = strs[i];
    // if (str0.indexOf(str) !==0) {
    //     return false;
    // }
    for (let j = 0; j < len; j++) {
      if (str0.charAt(j) !== str.charAt(j)) {
        return false;
      }
    }
  }
  return true;
}

// longestCommonPrefix(["flower", "flow", "flight"])


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  // 最接近的
  let closestNum = nums[0] + nums[1] + nums[2];
  for (let a = 0; a < nums.length - 2; a++) {
    let b = a + 1, c = nums.length - 1;
    while (b < c) {
      let sum = nums[a] + nums[b] + nums[c];
      if (Math.abs(sum - target) < Math.abs(closestNum - target)) {
        closestNum = sum;
      }
      if (sum > target) {
        c--;
      } else if (sum < target) {
        b++;
      } else {
        // 如果等于target，则就是最接近的
        return target;
      }
    }
  }
  return closestNum;
};

threeSumClosest([0, 1, 2], 0)


/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length < 1) {
    return [];
  }
  let letterMap = new Map([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']]
  ]);

  let ans = [];
  var backtrack = function (digits, index, combination) {
    const len = digits.length;
    if (len === index) {
      ans.push(combination);
    } else {
      const digit = digits[index];
      const letters = letterMap.get(digit);
      for (let i = 0; i < letters.length; i++) {
        backtrack(digits, index + 1, combination + letters[i]);
      }
    }

  };

  backtrack(digits, 0, '');
  return ans;
};



letterCombinations('23')
