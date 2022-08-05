
const getApi = (promiseFn, time) => {
  let timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('this api timed out')
    }, time)
  })

  return Promise.race([promiseFn, timeoutPromise])
}


// test Promise

let p = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('成功')
    }, 3000)
  })
}

getApi(p(), 2000).then(value => console.log(value), error => console.log(error))