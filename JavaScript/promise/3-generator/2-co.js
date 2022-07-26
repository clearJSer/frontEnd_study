/**
 * @description: CO 库
 * @author: lakiliu
 */

let fs = require('fs').promises

function* read() {
  let content = yield fs.readFile('./name.txt', 'utf8');
  let age = yield fs.readFile(content, 'utf8');
  return age;
}
// co 库实现
function co(it) {
  return new Promise((resolve, reject) => {
    function next(data) {
      let { value, done } = it.next(data);
      if (!done) {
        Promise.resolve(value).then(data => {
          next(data)
        }, reject)
      } else {
        resolve(data)
      }
    }

    next()
  })
}

co(read()).then(data => {
  console.log(111, data)
})