const request = url => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url + '已完成')
    }, 1000)
  })
}

let urls = ['bytedance.com', 'tencent.com', 'alibaba.com', 'microsoft.com', 'apple.com', 'hulu.com', 'amazon.com'] // 请求地址
let max = 3 //最大并发量
async function limitRequest(urls, max) {
  let pool = [];

  for (let i = 0; i < urls.length; i++) {
    let url = urls[i]
    let task = request(url)

    task.then(value => {
      pool.splice(pool.indexOf(task), 1)
      console.log(`${url} 结束，当前并发数：${pool.length}`);
    })

    pool.push(task)

    if (max === pool.length) {
      await Promise.race(pool)
    }
  }
}
limitRequest(urls, 3)
