// 使用Promise实现每隔1秒输出1,2,3
//  第一种写法
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(1)
    resolve(2)
  }, 1000)
}).then(data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(data)
      resolve(++data)
    }, 1000)
  })
}).then(data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(data)
      resolve(++data)
    }, 1000)
  })
}).then(data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(data)
      resolve(++data)
    }, 1000)
  })
})


// 递归写法
const step = function (n) {
  if (n === 4) return;
  Promise.resolve(1).then(() => {
    return new Promise((r) => {
      setTimeout(() => {
        r(n + 1)
      }, 1000)
    }).then(value => {
      console.log(value)
      step(value)
    })
  })
}
step(0)


// reduce 写法
let arr = [1, 2, 3, 4]
arr.reduce((acc, current) => {
  return acc.then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(current)
        resolve()
      }, 1000)
    })
  })
}, Promise.resolve())