// 寄生组合式继承
/**
 * 利用原型链和借用构造函数的技术组合到一块
 * 原型链实习原型上属性和方法的继承
 * 构造函数实现实例属性的继承。能保证每个实例有自己的属性
 * @param {*} name 
 */
function Parent(name) {
  this.name = name
}
Parent.prototype.sayName = function () {
  console.log(this.name)
}

function Child(name, age) {
  // 属性继承
  Parent.call(this, name)
  this.age = age
}
// Children.prototype = new Parent(); 需要优化
Child.prototype = Object.create(Parent.prototype)
// 目的：为了让Children的实例（instance）的constructor查询出来的结果正确（是Children）
Child.prototype.constructor = Child

Child.prototype.sayAge = function () {
  console.log(this.age);
}

var instance = new Child("xhy", 18);
instance.sayAge() // 18
instance.name = 123123
instance.sayName() // xhy

const child2 = new Child('aaa', 20)
child2.sayName()
