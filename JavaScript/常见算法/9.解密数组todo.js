function getPassword(str) {
  let res = []
  function getResult(str, num) {
    if (str.length == 1) {
      res.push(String.fromCharCode(parseInt(str)))
      return res
    }
    if (str.length == 2) {
      let arr = str.split('')
      res.push(String.fromCharCode(parseInt(arr[0])))
      res.push(String.fromCharCode(parseInt(arr[1])))
      res.push(String.fromCharCode(parseInt(str)))
    }
    let newStr = str.substring(num + 1, str.length - 1)
    return getResult(newStr, num + 1)
  }
  getResult(str, 0)
  console.log(res)

  return res;
}
getPassword('121')

console.log('123'.length)