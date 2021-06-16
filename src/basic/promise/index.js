// async function sleep(delay) {
//   await new Promise((resolve) => setTimeout(resolve, delay));
//   return Promise.resolve();
// }

// async function foo() {
//   const t0 = Date.now();
//   await sleep(3000);
//   console.log(Date.now() - t0);
// }

// foo()

var array = [1, 2, 1, 1, '1'];

function unique(array) {
    var res = array.filter(function(item, index, array){
        return array.indexOf(item) === index;
    })
    return res;
}

console.log(unique(array));
function objectFac() {
  const obj = {};
  const constructor = Array.prototype.shift.call(arguments);
  obj.__proto__ = constructor.prototype;
  const res = constructor.apply(obj, arguments);
  return Object.prototype.toString.call(res) === '[object Object]' ? res : obj;
}
function person(name, age) {
this.name = name;
this.age = age;
}
console.log(objectFac(person, 'hah', 12));

// 最长连续升序列
var lengthOfLIS = function(nums) {
  if(!nums.length) return 0
    let res = 1
    let start = 0
    for (let i = 1, len = nums.length; i < len; i++){
        if (nums[i] < nums[i - 1]) {
            res = Math.max(res,i-start)
            start = i
        }
    }
    return res
};

// 最长非连续升序列
var lengthOfLIS = function(nums) {
  const dp = Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
    }
  }
  let res = 0;
  for (let i = 0; i < dp.length; i++) {
    res = Math.max(res, dp[i]);
  }
  return res;
};

function sum(a, b) {
  if (a == 0) return b
  if (b == 0) return a
  let newA = a ^ b
  let newB = (a & b) << 1
  return sum(newA, newB)
}

function mul(a,b) {
  if (a=== '0' || b === '0') {
    return '0';
  }
  const aLen = a.length;
  const bLen = b.length;
  const res = Array(aLen+bLen).fill(0);
  console.log(res);
  for (let i = aLen - 1; i >= 0; i--) {
    const aLow = +a[i];
    for (let j = bLen - 1; j >= 0; j--) {
      const bLow = +b[j];
      const unit = res[i+j+1] + aLow*bLow;
      res[i+j+1] = unit%10;
      res[i+j] += Math.floor(unit/10);
    }
  }
  return res.join('').replace(/^0*/g, '');
}

console.log(mul('12', '4'));