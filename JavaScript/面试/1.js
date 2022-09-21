

// 2. implement a schedule class which can run N task in parallel automatically
class Scheduler {
  constructor(num) {
    this.max = num;
    this.pool = [];
  }
  add(asyncTaskFn) {
    if (this.pool.length < this.max) {
      asyncTaskFn().then(() => {
        let p = this.pool.shift()
        this.add(p)
      })
    } else {
      this.pool.push(asyncTaskFn)
    }
    // for (let i = 0; i < this.pool.length; i++) {
    //   let item = this.pool[i]
    //   let res = await item()
    //   res.then(() => {
    //     this.pool.splice(i, 1)
    //   })
    // }
  }
}

const timeout = time => new Promise(resolve => {
  setTimeout(resolve, time);
})

const scheduler = new Scheduler(2);

const addTask = (time, order) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)))
}

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');

