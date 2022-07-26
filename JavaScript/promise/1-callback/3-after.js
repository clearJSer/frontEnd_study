// AO  执行对象  times 不会被销毁
function after(times, callback) {
  console.log(111)
  return function () {
    console.log(222)
    if (--times == 0) {
      callback()
    }
  }
}

let fn = after(3, function () {
  console.log('really')
})

fn()
fn()
fn()