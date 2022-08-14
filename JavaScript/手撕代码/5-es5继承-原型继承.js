/**
 * 缺点：包含引用类型的原型属性会被所有实例共享。
 * 通过原型实现继承时，原型实际上会变成另一个类型的实例，原先的实例属性也就到了现在的原型属性了。
 */

function SuperType() {
  this.colors = ['red', 'green'] // 被实例共享了。
}
SuperType.prototype.getSuperValue = function () {
  return this.colors;
}
function SubType() {
  this.value = 1
}
SubType.prototype = new SuperType()
SubType.prototype.getSubValue = function () {
  return this.value
}


// 实例化1
const instance1 = new SubType()
instance1.colors.push('yellow')
console.log(instance1.getSubValue())
console.log(instance1.getSuperValue())

// 实例化2
const instance2 = new SubType()
console.log(instance2.getSuperValue())


// object(o)
function object(o) {
  function F() { }
  F.prototype = o;
  return new F()
}
//Object.create 实现
let person = {
  name: 'Nicholas',
  friends: ["tom", "bob"]
}
const f1 = Object.create(person)
f1.name = 'leo'
f1.friends.push('leo-1')

const f2 = Object.create(person)
f2.name = 'lucky'
f2.friends.push('lucky-1')
console.log(f2.name)
console.log(f1.name)
console.log(f1.friends)