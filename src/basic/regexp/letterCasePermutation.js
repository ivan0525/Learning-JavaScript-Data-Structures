function letterCasePermutation(S) {
  const res = []
  const backtrack = (str, i) => {
    if (i === S.length) {
      return res.push(str)
    }
    const cur = S[i]
    // 对于字母
    if ((cur >= 'A' && cur <= 'Z') || (cur >= 'a' && cur <= 'z')) {
      const low = str + cur.toLowerCase(),
        upper = str + cur.toUpperCase()
      backtrack(low, i + 1)
      backtrack(upper, i + 1)
    } else {
      // 对于数字
      backtrack(str + cur, i + 1)
    }
  }
  backtrack('', 0)
  return res
}

console.log(letterCasePermutation('a1b2'))