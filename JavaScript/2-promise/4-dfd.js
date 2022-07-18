let Promise = require('./Promise')

let fs = require('fs')

// function read(url) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(url, 'utf8', function (error, data) {
//       if (error) reject(error)
//       resolve(data)
//     })
//   })
// }

function read(url) {
  let dfd = Promise.defer();
  fs.readFile(url, 'utf8', function (error, data) {
    if (error) dfd.reject(error)
    dfd.resolve(data)
  })
  return dfd.promise
}

read('./name.txt').then(data => {
  console.log(data)
})