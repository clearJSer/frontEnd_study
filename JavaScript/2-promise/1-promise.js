

let Promise = require('./Promise')

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(200)
  }, 1000)
})

p.then(data => {
  console.log(data)
}, error => {
  console.log('error', error)
})

// let promise2 = p.then(() => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('hello')
//     }, 1000)
//   })
// })

// promise2.then(data => {
//   console.log('data'.data)
// }, error => {
//   console.log('error', error)
// })

//

// let promise = new Promise1((resolve, reject) => {
//   return new Promise((resolve, reject) => { })
// })
// promise.then(data => {
//   throw new Error('是失败')
// }, error => {
//   console.log('11111error', error)
//   return 99
// }).then(data => {
//   console.log('成功', data)
// }, error => {
//   console.log('222222error', error)
// })


