

let Promise = require('./Promise')
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(100)
  }, 1000)

})
promise.then(data => {
  console.log('成功', data)
}, error => {
  console.log('error123123x', error)
})
promise.then(data => {
  console.log('成功', data)
}, error => {
  console.log('error123123x', error)
})
promise.then(data => {
  console.log('成功', data)
}, error => {
  console.log('error123123x', error)
})