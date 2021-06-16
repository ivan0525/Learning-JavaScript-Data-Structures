const R = require('ramda')

const fn = R.cond([
  [R.equals(0), R.always('water freezes at 0°C')],
  [R.equals(100), R.always('water boils at 100°C')],
  [R.T, (temp) => `nothing special happends at ${temp}°C`]
])

console.log(fn(0), fn(20), fn(100))