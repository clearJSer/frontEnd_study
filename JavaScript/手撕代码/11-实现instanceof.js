/**
 * instanceof 只能判断引用类型 如果是基本类型 就返回false
 * 原理：通过判断对象的原型中是否能找到类型的prototype
 */

function instance_of(left, right) {
  let __proto__ = left.__proto__;
  let prototype = right.prototype;
  while (true) {
    if (__proto__ == null) {
      return false
    }
    if (__proto__ == prototype) {
      return true
    }
    // 顺着原型链继续寻找
    __proto__ = __proto__.__proto__
  }
}