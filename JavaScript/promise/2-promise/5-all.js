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
const isPromise = (value) => {
  if (typeof value === 'object' && value !== null || typeof value === 'function') {
    if (typeof value.then === 'function') {
      return true;
    } else {
      return false;
    }

  }
}
Promise.all = function (values) {
  return new Promise((resolve, reject) => {
    let arr = [];
    let index = 0;

    function processData(key, value) {
      arr[key] = value;
      if (++index === values.length) {
        resolve(arr)
      }
    }

    for (let i = 0; i < values.length; i++) {
      let current = values[i];
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
  console.log(data)
})
