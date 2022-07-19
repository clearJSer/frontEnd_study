// function* read() {
//   let a = yield 'hello';
//   console.log(a)
//   let b = yield 'world';
//   console.log(b)
// }
// let it = read();
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

let obj = {
  0: 1, 1: 2,
  length: 2,
  *[Symbol.iterator]() {
    for (let i = 0; i < this.length; i++) {
      yield this[i]
    }
    // let index = 0;
    // return {
    //   next: () => {
    //     console.log('this', this)
    //     return { value: this[index], done: this.length === index++ }
    //   }
    // }
  }
}
// console.log('aa', [...obj])


// let arr = [1, 3, 4, 5, 7]
// // iterator
// for (let i of arr) {
//   console.log(i)
// }

let fs = require('fs').promises

function* read(name) {
  let content = yield fs.readFile('./name.txt', 'utf8');
  let age = yield fs.readFile(content, 'utf8');
  return age;
}

let it = read();
let { value, done } = it.next();
Promise.resolve(value).then(data => {
  let { value, done } = it.next(data);
  Promise.resolve(value).then(data => {
    let { value, done } = it.next(data);
    console.log(value)
  })
})