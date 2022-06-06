// AO  执行对象  times 不会被销毁
function after(times, callback) {
    return function() {
        if(--times == 0) {
            callback()
        }
    }
}

let fn = after(3, function() {
    console.log('really')
})

fn()
fn()
// fn()