//将'a.b.c.d'转换成{a:{b:{c:{d:{}}}}}

const str = 'a.b.c.d'
const arr = str.split('.')
let resObj = {};

for (let i = arr.length - 1; i >= 0; i--) {
  let obj = {}
  obj[arr[i]] = resObj
  resObj = obj;
}


console.log(JSON.stringify(resObj))