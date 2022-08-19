// 求函数的阶乘
function factorial(n) {
  if (n <= 1) return 1
  return n * factorial(n - 1)
}

console.log(factorial(3))

/**
 * 1.不要人肉递归 （抵制）
 * 2. 找到最近最简的方法，讲其拆解成可重复解决的问题 （重复子问题）
 * 3. 数学归纳法思维  n=1 n=2 成立  n+1也成立
 */

/** 递归代码模板 */
function recursion(level, param1, param2, ...) {
  // 递归终结者
  if (level > MAX_LEVEL) {
    //process_data
    return
  }

  // 当前层的业务代码
  process(level, data...)

  // 下探到下一层
  recursion(level + 1, p1, p2)

  // 清扫当前层
}

