let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(1000)
  }, 1000)
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2000)
  }, 1000)
})

Promise.all([p1, p2]).then(data => {
  console.log(data)
}, error => {
  console.log('error', error)
})


