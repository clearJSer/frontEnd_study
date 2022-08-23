function Foo() {
  getName = function () {
    console.log(1);
  };
  return this;
}
Foo.getName = function () {
  console.log(2);
};
Foo.prototype.getName = function () {
  console.log(3);
};
var getName = function () {
  console.log(4);
};
function getName() {
  console.log(5);
}

//请写出以下输出结果：
Foo.getName(); // 2 2
getName(); // 5 4
Foo().getName(); // 5 1
getName(); // 5 1
new Foo.getName(); // 2 2
new Foo().getName(); // 1 3
new new Foo().getName(); //1 3