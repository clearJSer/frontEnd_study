// 红绿灯重复亮

const red = () => {
  console.log('red')
}

const yellow = () => {
  console.log('yellow')
}

const green = () => {
  console.log('green')
}

const light = (timer, cb) => {
  return new Promise(resolve => {
    setTimeout(() => {
      cb()
      resolve()
    }, timer)
  })
}

function start() {
  Promise.resolve().then(() => {
    light(2000, red)
  }).then(() => {
    light(1000, green)
  }).then(() => {
    light(2000, yellow)
  }).then(() => {
    start()
  })
}

light()