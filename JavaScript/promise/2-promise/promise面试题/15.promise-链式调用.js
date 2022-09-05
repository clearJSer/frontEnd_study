//new Task().sleep(3).log(1).sleep(1).sleep(2).log(2)
// 希望学
class Task {
  constructor() {
    this.arr = [];
    setTimeout(() => {
      this.start()
    }, 0)
  }

  sleep(time) {
    let p = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, time * 1000)
      })
    }
    this.arr.push(p)
    return this;
  }

  log(num) {
    let p2 = () => {
      return new Promise((resolve, reject) => {
        console.log(num);
        resolve()
      })
    }
    this.arr.push(p2)
    return this;
  }

  async start() {
    for (let i = 0; i < this.arr.length; i++) {
      await this.arr[i]()
    }
  }
}

new Task().sleep(3).log(1).sleep(1).sleep(2).log(2)