// new 
function Person(name) {
  this.name = name
}

let p1 = new Person('ns')
// 原本的new 其实就是让构造函数执行，然后把this返回回来


// 使用手写的new，即create
var person = create(Person)

// 记住口诀， 就4步， 1拿构造函数 2创造空对象 3 执行 4 返回
function create() {
  // 1
  let Con = [].shift.call(arguments)
  // 2
  let obj = Object.create(Con.prototype)
  // 3
  let res = Con.apply(obj, arguments)
  // 4

  // 这里是求出原构造函数的返回值， 一个函数如果有返回值，那就算new 也是要原函数的返回值
  if (res instanceof Object) {
    return res
  }
  // 否则返回obj
  return obj
}

//call
Function.prototype.call = function (context) {
  context = context ? context : window;
  context.fn = this;

  let args = [...arguments].slice(1);
  let result = context.fn(...args);

  delete context.fn
  return result;
}

//apply
Function.prototype.apply = function (context, arr) {
  context = context ? context : window;
  context.fn = this;

  let result;
  if (!arr) {
    result = context.fn();
  } else {
    result = context.fn(...arr);
  }

  delete context.fn
  return result;
}

// bind https://muyiy.cn/blog/3/3.4.html#%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0
//  第一版
Funtion.prototype.bind2 = function (context) {
  context = context ? context : window
  let fn = this
  return function () {
    return fn.apply(context)
  }
}

// 第二步 对参数处理
Funtion.prototype.bind2 = function (context) {
  context = context ? context : window
  let firstParam = Array.prototype.slice.call(arguments, 1)
  let fn = this
  return function (...args) {
    return fn.apply(context, [...firstParam, ...args])
  }
}

// 第三步
Funtion.prototype.bind2 = function (context) {
  context = context ? context : window
  let firstParam = Array.prototype.slice.call(arguments, 1)
  let fn = this

  let fbind = function (...args) {
    let self = context
    if (this instanceof fbind) {
      self = this
    }
    return fn.apply(self, [...firstParam, ...args])
  }
  fbind.prototype = Object.create(fn.prototype)
  return fbind
}