Array.prototype.myMap = function (fn, context) {
  let self = context || window
  return this.reduce((init, cur) => {
    let res = fn.call(self, cur)
    return init.concat(res)
  }, [])
}
let arr = [1, 2, 4]
let test = arr.myMap(item => {
  return item *= 2;
})
console.log(test);//[2, 4, 8]