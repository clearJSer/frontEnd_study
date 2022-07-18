/**
 * @description:  手写promise 第二遍
 * @author: lakiliu
 */

const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'
class Promise {
  constructor(executor) {

    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;

    this.onFulfilledCallbackArr = [];
    this.onRejectedCallbackArr = [];

    let resolve = (value) => {
      if (this.status === PENDING) {
        this.value = value;
        this.status = FULFILLED;
        // 是否要加参数
        this.onFulfilledCallbackArr.forEach(fn => fn())
      }
    }
    let reject = (reason) => {
      if (this.status === PENDING) {
        this.reason = reason;
        this.status = REJECTED;
        this.onRejectedCallbackArr.forEach(fn => fn())
      }
    }
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === PENDING) {
      this.onFulfilledCallbackArr.push(() => {
        onFulfilled(this.value)
      })
      this.onRejectedCallbackArr.push(() => {
        onRejected(this.reason)
      })
    }

    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    }
    if (this.status === REJECTED) {
      onRejected(this.reason)
    }
  }
}

module.exports = Promise