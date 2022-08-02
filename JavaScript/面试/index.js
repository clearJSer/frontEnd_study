// 监听数据变动 打印原来的值 和 新输入的值
let obj = {
  a: 1,
  b: '123',
  c: []
}

function proxyData(obj) {

  for (let i in obj) {
    let oldVal = obj[i]
    Object.defineProperty(obj, i, {
      get: function () {
        return oldVal;
      },
      set: (newVal) => {
        console.log('old', oldVal, 'new', newVal)
        oldVal = newVal;
      }
    })
  }
}

proxyData(obj)

obj.a = 2
obj.a = 3
