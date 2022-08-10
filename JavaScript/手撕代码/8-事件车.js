class EventEmit {
  constructor(max) {
    this.max = max;
    this.events = {}
  }
  on(type, cb) {
    if (!this.events[type]) {
      this.events[type] = []
    }

    if (this.events[type] >= this.max) {
      return this
    }

    this.events[type].push(cb)
  }

  emit(type, ...args) {
    if (!this.events[type]) {
      console.log(type + '事件未注册')
      return this
    }
    const cbs = this.events[type]

    cbs.forEach(element => {
      element.apply(this, args)
    });
    return this;
  }

  off(type, cb) {
    if (!this.events[type]) {
      console.log(type + '事件未注册')
      return this
    }
    if (!cb) {
      this.events[type] = null
    } else {
      this.events[type] = this.events[type].filter(item => item !== cb)
    }
    return this
  }

  once(type, cb) {
    const fun = (...args) => {
      cb.apply(this, args)
      this.off(type)
    }
    this.on(type, fun)
    return this;
  }
}

const add = (a, b) => {
  console.log(a + b)
}

const add2 = (a, b) => {
  console.log(a * a + b * b)
}

const log = (...args) => {
  console.log(...args)
}
const eventObj = new EventEmit(3)
eventObj.once('add', add).emit('add', 1, 2)