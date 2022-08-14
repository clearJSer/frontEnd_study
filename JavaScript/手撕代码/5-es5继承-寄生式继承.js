/**
 * 缺点：逻辑都在构造函数中，无法复用
 * 父类上原型的方法无法取到
 */

function SuperType(name) {
  this.name = name // 被实例共享了。
}

// 缺点 这个方法子类实例取不到
SuperType.prototype.getSuperValue = function () {
  return this.name;
}
function SubType() {
  SuperType.call(this, "David")
  this.value = 1
}
SubType.prototype.getSubValue = function () {
  return this.value
}


// 实例化1
const instance1 = new SubType()
console.log(instance1.getSubValue())
console.log(instance1.getSuperValue())

