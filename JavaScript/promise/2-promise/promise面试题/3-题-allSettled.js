/**
与 Promise.all 不同的是，当 promise 被 reject 之后，我们不会直接 reject ，而是记录下该 reject 的值和对应的状态 'rejected' ;

同样地，当 promise 对象被 resolve 时我们也不仅仅局限于记录值，同时也会记录状态 'fulfilled' 。

当所有的 promise 对象都已执行(解决或拒绝)，我们统一 resolve 所有的 promise 执行结果数组

all 和 allSettled区别：
 * {Promise.allSettled() 与 Promise.all() 各自的适用场景
Promise.allSettled() 更适合：

彼此不依赖，其中任何一个被 reject ，对其它都没有影响
期望知道每个 promise 的执行结果
Promise.all() 更适合：

彼此相互依赖，其中任何一个被 reject ，其它都失去了实际价值} value 
 * 
 */

function isPromise(value) {
  if (typeof value === 'object' && value !== null || typeof value === 'function') {
    if (typeof value.then === 'function') {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

Promise.allSettled = function (values) {
  return new Promise((resolve, reject) => {
    let index = 0;
    let arr = [];
    function processData() {
      if (++index === values.length) {
        resolve(arr)
      }
    }
    values = Array.isArray(values) ? values : [];
    if (values.length === 0) resolve([])
    for (let i = 0; i < values.length; i++) {
      let current = values[i]
      if (isPromise(current)) {
        current.then(data => {
          arr[i] = { status: 'fulfilled', value: data }
          processData()
        }, error => {
          arr[i] = { status: 'rejected', value: error }
          processData()
        })
      } else {
        arr[i] = { status: 'fulfilled', value: current }
        processData()
      }
    }

  })
}

let p1 = new Promise((resolve, reject) => {
  resolve(10)
})
let p2 = new Promise((resolve, reject) => {
  reject(10)
})
Promise.allSettled([1, p2, p1, 3]).then(data => {
  console.log(data)
})