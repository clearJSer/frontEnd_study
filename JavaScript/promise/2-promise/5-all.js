/**
 * @description:Promise.all
 * @author: lakiliu
 * all 实现的功能
 * 1. 传入的数组 支持同步和异步，支持按顺序返回
 * 2. 所有的状态fulfilled, all 的状态才是fulfilled
 * 3. 如果之中有一个rejected,则第一个rejected的实例被返回。 直接触发rejected
 * 
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
