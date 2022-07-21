# Promise

## 1.判断是不是promise都公共方法

``` js
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
```
## 2.Promise.all

```js
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
```
## 3. Promise.allSettled

```js
Promise.allSettled = function (values) {
  return new Promise((resolve, reject) => {
    let index = 0;
    let arr = [];
    function processData() {
      if (++index === values.length) {
        resolve(arr)
      }
    }
    values = Array.isArray(values) ? values : [];
    if (values.length === 0) resolve([])
    for (let i = 0; i < values.length; i++) {
      let current = values[i]
      if (isPromise(current)) {
        current.then(data => {
          arr[i] = { status: 'fulfilled', value: data }
          processData()
        }, error => {
          arr[i] = { status: 'rejected', value: error }
          processData()
        })
      } else {
        arr[i] = { status: 'fulfilled', value: current }
        processData()
      }
    }

  })
}
```
## 4. Promise.race
```js
Promise.race = function (values) {
  return new Promise((resolve, reject) => {
    values.forEach(element => {
      Promise.resolve(element).then(
        value => resolve(value),
        reason => reject(reason)
      )
    });
  })
}
```

### 5. Promise.resolve
```js
Promise.resolve = function(value) {
  return new Promise((resolve, reject) => {
    return resolve(value)
  })
}
```

### 6. Promise.reject
```js
Promise.resolve = function(value) {
  return new Promise((resolve, reject) => {
    return reject(value)
  })
}
```
### 7. Promise.prototype.finally
```js
Promise.prototype.finally = function (cb) {
  return this.then(value => {
    Promise.resolve(cb()).then(() => value)
  }, reason => {
    Promise.resolve(cb()).then(reason => { throw reason })
  })
}
```
### 7. Promise.prototype.catch
```js
Promise.prototype.catch = function (cb) {
  return this.then(undefined, cb)
}
```

## 8. 每个1s输出1 2 3 4 
```js
//  第一种写法
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(1)
    resolve(2)
  }, 1000)
}).then(data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(data)
      resolve(++data)
    }, 1000)
  })
}).then(data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(data)
      resolve(++data)
    }, 1000)
  })
}).then(data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(data)
      resolve(++data)
    }, 1000)
  })
})


// 递归写法
const step = function (n) {
  if (n === 4) return;
  Promise.resolve(1).then(() => {
    return new Promise((r) => {
      setTimeout(() => {
        r(n + 1)
      }, 1000)
    }).then(value => {
      console.log(value)
      step(value)
    })
  })
}
step(0)


// reduce 写法
let arr = [1, 2, 3, 4]
arr.reduce((acc, current) => {
  return acc.then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(current)
        resolve()
      }, 1000)
    })
  })
}, Promise.resolve())
```

## 9. 红绿灯重复亮
