function isPromise(value) {
  if (typeof value === 'object' && value !== null || typeof value === 'function') {
    if (typeof value.then === 'function') {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}



Promise.all = function (values) {
  console.log(values)
  return new Promise((resolve, reject) => {
    let arr = [];
    let index = 0;
    function processData(index, value) {
      arr[index] = value;
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

let p1 = new Promise((resolve, reject) => {
  resolve(10)
})
Promise.all([1, 2, p1, 4]).then(data => {
  console.log(data)
})