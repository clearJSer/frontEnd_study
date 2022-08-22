/**
 * 实现类的private
 */

const nameSymbol = Symbol('name')
const ageSymbol = Symbol('age')

class Person {
  constructor() {
    this[nameSymbol] = 'aaaa'
    this[ageSymbol] = 12
    this.test = 123

    this.p = 'ppp'
  }

  get p() {
    return 123
  }
  set p(val) {
    console.log('set', val)
  }
  say() {
    console.log(this[nameSymbol], this[ageSymbol])
  }
}


// class Child extends Person {
//   constructor() {
//     super()
//   }
// }

const p = new Person()
console.log(p.name, p.test, p.p)
