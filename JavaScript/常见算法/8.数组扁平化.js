//  数组扁平化

const arr = [1, 2, 3, [4, 5], [6, [7, 8]], [9, 10]]

/**
 *  for 循环 递归
 */
function flatten(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flatten(arr[i]))
    } else {
      res = res.concat(arr[i])
    }
  }
  return res;
}


/**
 * 方法2 reduce
 */

function flatten2(arr) {
  return arr.reduce((res, next) => {
    return res.concat(Array.isArray(next) ? flatten(next) : next)
  }, [])
}

/**
 *  指定展开层级深度
 */
function flatten3(arr, depth = 1) {
  if (depth > 0) {
    return arr.reduce((init, cur) => {
      return init.concat(Array.isArray(cur) ? flatten3(cur, depth - 1) : cur)
    }, [])
  } else {
    return arr.slice()
  }
}
console.log(flatten2(arr))
console.log(flatten3(arr))