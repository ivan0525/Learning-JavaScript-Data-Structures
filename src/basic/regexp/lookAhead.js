export function lookAhead (str) {
  // const reg = /\d+(?=€)/
  // const reg = /(?<![-\d])\d+/g
  // const reg =  /(?!\b)(?=(\d{3})+\b)/g
  const reg = /(?<quote>['"])(.*?)\k<quote>/g

  return str.match(reg)
}