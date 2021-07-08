export function lookBehind (str) {
  const reg = /(?<=(\$|£))\d+/
  return str.match(reg)
}
console.log('master 234')
console.log('master12312')
