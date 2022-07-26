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

// Promise.resolve = function (value) {
//   return new Promise((resolve, reject) => {
//     if (isPromise(value)) {
//       value.then(data => {
//         resolve(data)
//       }, reason => {
//         reject(reason)
//       })
//     } else {
//       resolve(value)
//     }
//   })
// }

Promise.resolve = function (value) {
  return new Promise((resolve, reject) => {
    resolve(value)
  })
}

let p1 = new Promise((resolve, reject) => {
  resolve(10)
})
Promise.resolve(p1).then(data => {
  console.log(222, data)
}, error => { console.log('error', error) })


console.log(111, Promise.resolve(p1))