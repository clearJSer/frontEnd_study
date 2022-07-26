let promise = new Promise((resolve, reject) => {
  reject(1000)
})

// finally 实现代码
/**
 *  特性： 无论成功还是失败 都执行。2. 把前面的成功或者失败都能传递到后面 3.如果是promise 可以等待promise执行完后返回。
 * @param {*} cb 
 * @returns 
 */
// Promise.prototype.finally = function (cb) {
//   return promise.then(data => {
//     return Promise.resolve(cb()).then(() => data)
//   }, error => {
//     return Promise.resolve(cb()).then(() => { throw error })
//   })
// }

Promise.prototype.finally = function (cb) {
  return promise.then(data => {
    return Promise.resolve(cb()).then(() => data)
  }, error => {
    return Promise.resolve(cb()).then(() => { throw error })
  })
}
promise.finally(() => {
  console.log('最终执行')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
}).then(data => {
  console.log(111, data)
}).catch(error => {
  console.error('error', error)
})