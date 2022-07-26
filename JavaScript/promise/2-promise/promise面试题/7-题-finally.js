Promise.prototype.finally = function (cb) {
  return this.then(value => {
    Promise.resolve(cb()).then(() => value)
  }, reason => {
    Promise.resolve(cb()).then(reason => { throw reason })
  })
}