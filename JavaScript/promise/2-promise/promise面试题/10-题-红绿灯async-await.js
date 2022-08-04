function deepCopy(obj) {
  return JSON.stringify(JSON.parse(obj))
}

function easyCopy(obj) {
  return obj
}

function red() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('red')
      resolve()
    }, 1000)
  })

}

function yellow() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('yellow')
      resolve()
    }, 2000)
  })
}

function green() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('green')
      resolve()
    }, 3000)
  })
}

async function light() {
  await red()
  await yellow()
  await green()
  light()
}
// light()

function callRed(cb) {
  setTimeout(() => {
    console.log('red')
    cb()
  }, 1000)
}
function callGreen(cb) {
  setTimeout(() => {
    console.log('green')
    cb()
  }, 2000)
}
function callYellow(cb) {
  setTimeout(() => {
    console.log('yellow')
    cb()
  }, 3000)
}

function callBackLight() {
  callRed(callGreen(callYellow))
}

// callBackLight()
