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

// Promise.prototype.finally = function (cb) {
//   return this.then(cb, cb)
// }

Promise.prototype.catch = function (cb) {
  return this.then(undefined, cb)
}

let p1 = new Promise((resolve, reject) => {
  reject(10)
})
Promise.all([1, 2, p1, 4]).then(data => {
  console.log(data)
}).finally(() => {
  console.log('finally')
}).catch(error => {
  console.log('error', error)
  return Promise.reject(3333)
}).then(data => {
  console.log('data', data)
}, error => {
  console.log('error2', error)
})