export function lookBehind (str) {
  const reg = /(?<=(\$|£))\d+/
  return str.match(reg)
}