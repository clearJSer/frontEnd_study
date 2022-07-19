/**
 *  1. 如果放的是普通值，会包装成pormise
 * 2. 如果放的是promise 会等待promise 执行完后在继续执行
 */
// 作业 尝试实现promise的 resolve  race catch  try 方法。
console.log(111, Promise.resolve(1).then(data => {
  return data
}))