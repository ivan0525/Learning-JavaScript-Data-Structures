const user = {
  name: 'xxx',
  age: 12,
  get fullInfo() {
    return `${this.name}-${this.age}`
  }
}

// const description = Object.getOwnPropertyDescriptor(user, 'name');

// console.log(JSON.stringify(description, function(a,b) {
//   console.log(this)
//   return b
// }, 2));

// Object.defineProperty(user, 'name', {
//   configurable: false
// })
// user.name = 23
// delete user.name
// console.log(user)

// const descriptions = Object.getOwnPropertyDescriptors(user);
// console.log(descriptions)

console.log(user.fullInfo)
try {
  user.fullInfo = 123
} catch(err) {
  console.log(err)
}

let s1 = 'horse'
let s2 = 'ros'
/**
 * if (s1[i] === s2[j]) {
 *  跳过
 *  i,j向前移动
 * } else {
 *  插入||删除||替换
 * }
 * 
 */
function minDistance(s1, s2) {
  const map = new Map();
  // dp(i, j) 表示返回s1[0..i]和s2[0..j]的最小编辑距离
  function dp(i, j) {
    if (i === -1) {
      return j+1;
    }
    if (j === -1) {
      return i+1;
    }
    if (s1[i] === s2[j]) { // dp(i, j) === dp(i-1, j-1)
      return dp(i - 1, j - 1);
    } else {
      return Math.min(
        dp(i, j - 1) + 1, // 插入：在s1[i]插入一个和s2[j]一样的字符，这时s2[j]就匹配了，然后j前进，继续比对s[i]，操作数+1
         dp(i - 1, j) + 1, // 删除：删除s1[i]，i前进，继续与s[j]比对，操作数+1
          dp(i - 1, j - 1) + 1 // 替换：将s1[i]替换为s2[j]一样的字符，i和j都前进后继续比对，操作数+1
          )
    }
  }
  return dp(s1.length - 1, s2.length - 1)
}

console.log(minDistance(s1, s2));