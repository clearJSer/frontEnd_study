//参数固定柯里化
const curry = function (fn, ...a) {
  // 实参数量大于等于形参数量吗？
  return a.length >= fn.length ?
    // 如果大于返回执行结果
    fn(...a) :
    // 反之继续柯里化，递归，并将上一次的参数以及下次的参数继续传递下去
    (...b) => curry(fn, ...a, ...b);
};
const add1 = (a, b, c) => a + b + c;
// 将add加工成柯里化函数
const addCurry = curry(add1);
console.log(addCurry(1, 2, 3));// 6
console.log(addCurry(1)(2)(3));// 6
console.log(addCurry(1, 2)(3));// 6
console.log(addCurry(1)(2, 3));// 6


//参数不固定柯里化
const add = function () {
  let args = [].slice.call(arguments)
  const inner = function () {
    args.push(...arguments)
    return inner
  }
  inner.toString = function () {
    return args.reduce((init, cur) => init + cur)
  }
  return inner
}


let res = add(1, 4)(2, 3)(5)
console.log(res.toString())