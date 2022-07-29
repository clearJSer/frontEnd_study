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
function isPromise(obj) {
  if (typeof obj === 'object' && obj !== null || typeof obj === 'function') {
    if (typeof obj.then === 'function') {
      return true;
    } else {
      return false;
    }
  }
}

Promise.all = function (values) {
  return new Promise((resolve, reject) => {
    let res = [];
    let index = 0;
    function processData(key, value) {
      res[key] = value;
      if (++index === values.length) {
        resolve(res)
      }
    }
    for (let i = 0; i < values.length; i++) {
      let current = values[i]
      if (isPromise(current)) {
        current.then(data => {
          processData(i, data)
        }, reject)
      } else {
        processData(i, current)
      }
    }
  })
}

Promise.all([1, 2, 3, read('./name.txt'), 5, 6, 7]).then(data => {
  console.log(111, data)
}, error => {
  console.log(222, error)
})
