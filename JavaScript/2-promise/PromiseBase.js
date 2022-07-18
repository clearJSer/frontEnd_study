/**
 * @description: 自己实现一个Promise
 * @author: lakiliu
 */
const PENDING = 'PENDING'
const RESOLVED = 'RESOLVED'
const REJECTED = 'REJECTED'
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

    // 同步情况
    if (this.status === RESOLVED) {
      onFulfilled(this.value)
    }

    if (this.status === REJECTED) {
      onRejected(this.reason)
    }

    // 异步情况
    if (this.status === PENDING) {
      this.onRejectedCallbacks.push(() => {
        // to do
        onRejected(this.reason)
      })
      this.onResolveCallbacks.push(() => {
        onFulfilled(this.value)
      })
    }
  }
}

module.exports = Promise