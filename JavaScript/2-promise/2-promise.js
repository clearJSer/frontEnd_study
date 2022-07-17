
let fs = require('fs')

// fs.readFile('./name.txt', 'utf8', function (err, data) {
//   fs.readFile(data, 'utf8', function (error, data) {
//     console.log(222, data)
//   })
// })

function read(url) {
  return new Promise((resolve, reject) => {
    fs.readFile(url, 'utf8', function (error, data) {
      if (error) reject(error)
      resolve(data)
    })
  })
}

read('name.txt').then(data => {
  return read(data)
}, error => {
  console.log(error)
}).then(data => {
  console.log(data)
}, error => {
  console.log(error)
  return new Promise(() => { })
}).then(data => {
  console.log('success', data)
}, error => {
  console.log('error', error)
})