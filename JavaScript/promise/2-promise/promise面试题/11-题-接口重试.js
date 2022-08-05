// 接口重试5次 1s以内
const getData = () => {
  return new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 100)
    console.log('random', random)
    setTimeout(() => {
      if (random < 10) {
        resolve()
      } else {
        reject()
      }
    }, 1000)
  })
}

const callPromise = (promiseFn, times, delay) => {
  return new Promise((resolve, reject) => {
    const reTry = () => {
      console.log(`还有${--times}次尝试机会`)
      promiseFn.then(resolve, error => {
        if (times === 1) {
          reject('5次都失败了')
        } else {
          times;
          setTimeout(reTry, delay)
        }
      })

    }

    reTry()
  })
}


callPromise(getData(), 5, 1000).then(value => {
  console.log(value)
}, error => console.log(error))