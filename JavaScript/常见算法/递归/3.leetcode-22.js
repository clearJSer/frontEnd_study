//输入：n = 3
//输出：["((()))", "(()())", "(())()", "()(())", "()()()"]

var generateParenthesis = function (n) {
  function generate(left, right, max, str) {
    // 终结者
    if (left === n && right === n) {
      console.log(str)
      return
    }
    //当前层处理逻辑
    if (left < n) {
      generate(left + 1, right, max, str + '(')
    }
    if (left > right) {
      generate(left, right + 1, max, str + ')')
    }
    // 进入下一层

    // 清除 
  }
  generate(0, 0, 2 * n, '')
};

generateParenthesis(3)