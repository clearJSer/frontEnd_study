/**
 *  发布订阅模式： 两者没有关联
 *  观察者模式： 基于发布订阅，两者有关联 ，观察到变化了，然后to do sth
 *  // vue 监控数据，数据变了，然后更新视图
 */

// 观察者
class Observer {
  constructor(name) {
    this.name = name;
  }

  update(newState) {
    console.log(this.name, '观察到了,小宝宝的状态', newState)
  }
}

class Subject {
  constructor() {
    this.arr = []
    this.state = 'happy'
  }
  attach(obj) {
    this.arr.push(obj)
  }
  changeState(newS) {
    this.state = newS;
    this.arr.forEach(obj => obj.update(newS))
  }
}

const baby = new Subject('happy')
const father = new Observer('father')
const mother = new Observer('mother')

baby.attach(father)
baby.attach(mother)

baby.changeState('unhappy')
