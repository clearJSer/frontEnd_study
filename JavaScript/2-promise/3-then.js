let Promise = require('./Promise')

let promise = new Promise((resolve, reject) => {
  resolve(1000)
})

promise.then(data => {
  console.log(data)
})