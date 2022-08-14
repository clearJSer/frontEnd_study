// 寄生组合式继承 终结版
function inheritPrototype(SubType, SuperType) {
  let prototype = Object.create(SuperType.prototype)
  prototype.constructor = SubType;
  SubType.prototype = prototype
}

function SuperType() {
  this.colors = ['red', 'green'] // 被实例共享了。
}
SuperType.prototype.getSuperValue = function () {
  return this.colors;
}
function SubType() {
  this.value = 1
}
inheritPrototype(SubType, SuperType)
SubType.prototype.getSubValue = function () {
  return this.value
}
