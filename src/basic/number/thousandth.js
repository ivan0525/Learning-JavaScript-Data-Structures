export function thousandth (num) {
  num = Number(num)
  if (!num) {
    return ''
  }
  return String(num).replace(/(\d+?)(?=(\d{3})+$)/g, '$&,')
}
