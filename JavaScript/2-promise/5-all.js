/**
 * @description:Promise.all
 * @author: lakiliu
 */

let Promise1 = require('./Promise')
let fs = require('fs')

function read(url) {
  let dfd = Promise1.defer();
  fs.readFile(url, 'utf8', function (error, data) {
    if (error) dfd.reject(error)
    dfd.resolve(data)
  })
  return dfd.promise
}

Promise.all([1, 2, 3, read('./name.txt'), 5, 6, 7]).then(data => {
  console.log(data)
}) 