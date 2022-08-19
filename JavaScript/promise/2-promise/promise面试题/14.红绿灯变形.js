// 题目// 实现这个Queue，start()后等1秒输出1，再等2秒输出2，再等3秒输出3.
class Queue {
  constructor() {
    this.arr = []
  }

  task(time, cb) {
    this.arr.push([time, cb])
    return this;
  }
  defer(time, cb) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        cb()
        resolve()
      }, time)
    })
  }
  async start() {
    for (let i = 0; i < this.arr.length; i++) {
      const [time, cb] = this.arr[i]
      await this.defer(time, cb)
    }
  }
}
// 实现这个Queue，start()后等1秒输出1，再等2秒输出2，再等3秒输出3.
new Queue()
  .task(1000, () => console.log(1))
  .task(2000, () => console.log(2))
  .task(3000, () => console.log(3))
  .start()






// function Foo() {
//   getName = function () {
//     console.log(1);
//   };
//   return this;
// }
// Foo.getName = function () {
//   console.log(2);
// };
// Foo.prototype.getName = function () {
//   console.log(3);
// };
// var getName = function () {
//   console.log(4);
// };
// function getName() {
//   console.log(5);
// }

// //请写出以下输出结果：
// Foo.getName(); // 2
// getName(); // 5
// Foo().getName(); // 5
// getName(); // 5
// new Foo.getName(); // 2
// new Foo().getName(); // 1
// new new Foo().getName(); //1

