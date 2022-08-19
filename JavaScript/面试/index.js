
function mySqrt2(x) {
  if (isNaN(x)) {
    return NaN
  }
  if (x === 0 || x === 1) {
    return x
  }
  if (x < 0) {
    return new Error('负数没有平方根')
  }
  let min = 0, max = x, result = x / 2, proxyResult
  do {
    if (result * result * result > x) {
      max = result
    } else if (result * result * result < x) {// Math.pow(result,3)<x
      min = result
    } else {
      return max
    }
    proxyResult = result
    result = (min + max) / 2
  }
  while (Math.abs(result - proxyResult) >= Number.EPSILON)
  return result
}
console.log(mySqrt2(8))