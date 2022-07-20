/**
 * @description: 高阶函数
 * @author: lakiliu
 */
// 高阶函数， 如果一个的参数是一个函数，或者 返回了一个函数（返回的函数就是高阶函数）

function say(who) {
  console.log(who + '说：hello ')
}

Function.prototype.before = function (beforeFun) {
  return (...args) => { // 剩余运算符
    beforeFun()
    this(...args) // 展开运算符
  }
}
let newFu = say.before(function () {
  console.log('说话前')
})

newFu('我')

// 函数劫持 AOP

let oldPush = Array.prototype.push;

function pushNew(...args) {
  console.log('数据更新了');
  oldPush.call(this, ...args)
}
let arr = [1, 3, 4];
pushNew.call(arr, 4, 5, 6, 7)
console.log(arr);
//  基础补充 什么叫闭包？
/**
 * 作用域：函数定义的位置
 * 执行上下文：函数执行 产生执行上下文
 * 闭包： 这个函数不在当前作用域下执行，在外面执行并且可以访问作用域下的变量
 */