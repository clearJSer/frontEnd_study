class Parent {
  constructor(name) {
    this.name = name
  }
  sayName() {
    console.log(this.name)
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name)
    this.age = age
  }
  sayAge() {
    console.log(this.age)
  }
}

const c = new Child('tom', 12)

c.sayName()