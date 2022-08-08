// 寄生组合式继承
function Parent(name) {
  this.name = name
}
Parent.prototype.sayName = function () {
  console.log(this.name)
}

function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}
// Children.prototype = new Parent(); 优化
Child.prototype = Object.create(Parent.prototype)
// 目的：为了让Children的实例（instance）的constructor查询出来的结果正确（是Children）
Children.prototype.sayAge = function () {
  console.log(this.age);
}

var instance = new Children("xhy", 18);
instance.sayAge() // 18
instance.sayName() // xhy
Child.prototype.constructor = Child
Child.prototype.sayAge = function () {
  console.log(this.age)
}



const child = new Child('aaa', 20)

child.sayName()

// 原型继承
/**
 * 优点：通过原型继承多个引用类型的属性和方法

缺点：Sub原型变成了Super的实例，如果Super的实例某个属性是引用值，
该引用值就会被应用到所有Sub创建的实例中去，会有污染问题.
例如：共享this.name
 */
// function Parent() {
//   this.name = [1, 2, 3]
// }
// Parent.prototype.sayName = function () {
//   console.log(this.name)
// }

// function Child() {
// }

// Child.prototype = new Parent()

// const c1 = new Child()
// c1.sayName()