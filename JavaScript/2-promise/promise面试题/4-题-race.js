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

Promise.race = function (values) {
  return new Promise((resolve, reject) => {
    values.forEach(element => {
      Promise.resolve(element).then(
        value => resolve(value),
        reason => reject(reason)
      )
    });
  })
}

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10)
  }, 1000)
})
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20)
  }, 200)
})
Promise.race([1, p1, p2]).then(data => {
  console.log(data)
})