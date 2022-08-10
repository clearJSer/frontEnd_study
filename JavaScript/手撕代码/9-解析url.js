let url = "https://m.baidu.com/video/page?pd=video_page&nid=11612035902463331683&sign=17051720440437411898&word=%E5%88%98%E5%BE%B7%E5%8D%8E&oword=%E5%88%98%E5%BE%B7%E5%8D%8E&atn=index&frsrcid=4295&ext=%7B%22jsy%22%3A1%7D&top=%7B%22sfhs%22%3A1%2C%22_hold%22%3A2%7D&sl=4&fr0=A&fr1=A&lid=12278046998186179058&referlid=12278046998186179058&ms=1&frsrcid=4295&frorder=4&_t=1616819846585"


let urlArr = url.split('?')
const query = urlArr[1]
const queryArr = query.split("&")

// console.log(queryArr)
let res = {}
for (let i of queryArr) {
  const key = i.split('=')[0]
  const value = i.split('=')[1]
  res[key] = value
}

console.log(res)