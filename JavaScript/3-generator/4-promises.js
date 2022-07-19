let fs = require('fs')


function promise(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, function (error, data) {
        if (error) {
          reject(error)
        } else {
          resolve(data)
        }
      })
    })
  }
}

function promises(fs) {
  for (let i in fs) {
    if (typeof fs[i] === 'function') {
      fs[i] = promise(fs[i])
    }
  }
}
promises(fs)
fs.readFile('./name.txt', 'utf8').then(data => {
  console.log(1111, data)
})
// let readFile = promises(fs.readFile);