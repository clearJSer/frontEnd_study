// 阿里一面
// function test() {
//   // new Promise((resolve, reject) => {
//   //   resolve()
//   // }).then(value => {

//   // })

//   setTimeout(() => {
//     test()
//   }, 0)
// }

// test()

function test() {
  setTimeout(() => {
    test()
  }, 0)
}
test()


function test1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}
function test2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

async function entry() {
  console.log(1)
  await test1()
  console.log(2)
  await test2()
  console.log(3)
}

entry()