// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 0);
// new Promise(function (resolve) {
//   console.log(3);
//   for (var i = 0; i < 100; i++) {
//     i === 99 && resolve();
//   }
//   console.log(4);
// }).then(function () {
//   console.log(5);
// });
// console.log(6);

// 1 3 4 6 2 5


// this 指向
var a = 1
var obj = {
  a: 2,
  hello1: () => {
    console.log(this.a)
  },
  hello2: function () {
    console.log(this.a)
  }
}
obj.hello1() // 1
obj.hello2() // 2

let hello3 = obj.hello1
let hello4 = obj.hello2
hello3() // 1
hello4() // 1