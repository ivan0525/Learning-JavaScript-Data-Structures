// 最长公共前缀
function longestCommonPrefix(arr) {
  if (arr.length < 1) {
    return "";
  }
  // 假定第一个元素为最长公共前缀
  let prefix = arr[0];
  // 遍历数组看元素是否都满足，不满足则截掉末位字符
  arr.forEach((item) => {
    while(item.indexOf(prefix) !== 0) {
      if (prefix.length === 0) {
        return "";
      }
      prefix = prefix.slice(0, prefix.length - 1)
    }
  });
  return prefix;
}

console.log(longestCommonPrefix(["flower","flow","flight", "fw"]))