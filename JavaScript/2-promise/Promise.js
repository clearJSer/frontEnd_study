/**
 * @description: 自己实现一个Promise
 * @author: lakiliu
 */
const PENDING = 'PENDING'
const RESOLVED = 'RESOLVED'
const REJECTED = 'REJECTED'

const resolvePromise = (promise2, x, resolve, reject) => {
  if (promise2 === x) {
    reject(new TypeError('[TypeError: Chaining cycle detected for promise #<Promise>]'))
  }

  // 判断数据类型 typeof  constructor  instanceof toString
  if ((typeof x === 'object' && x !== null) || typeof x == 'function') {
    let called;
    try {
      let then = x.then;
      if (typeof then === 'function') {
        then.call(x, y => {
          if (called) {
            return
          }
          called = true
          // y 有可能还是递归 指导获取一个普通值
          resolvePromise(promise2, y, resolve, reject)
        }, r => {
          if (called) {
            return
          }
          called = true
          reject(r)
        }) // 能保证不用再次取值then
      } else {
        resolve(x)
      }
    } catch (error) {
      if (called) {
        return
      }
      called = true;
      reject(error)
    }
  } else {
    resolve(x);
  }
}
class Promise {
  constructor(executor) {

    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onResolveCallbacks = [];
    this.onRejectedCallbacks = [];

    let resolve = (value) => {
      if (this.status === PENDING) {
        this.value = value;
        this.status = RESOLVED;
        this.onResolveCallbacks.forEach(fn => fn())
      }
    }
    let reject = (reason) => {
      if (this.status === PENDING) {
        this.reason = reason;
        this.status = REJECTED
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {

    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val;
    onRejected = typeof onRejected === 'function' ? onRejected : error => { throw error };
    let promise2 = new Promise((resolve, reject) => {
      // 同步情况
      if (this.status === RESOLVED) {

        setTimeout(() => {
          try {
            // x 可能是普通值， 也可能是promise
            let x = onFulfilled(this.value)
            // 判断x的值 推倒promise2点状态
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0)

      }

      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0)
      }

      // 异步情况
      if (this.status === PENDING) {
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }

          }, 0)

        })
        this.onResolveCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })
      }
    })


    return promise2;
  }
}
Promise.defer = Promise.deferred = function () {
  let dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  })
  return dfd;
}
module.exports = Promise