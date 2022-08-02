
let obj = {
  a: 1,
  b: '123',
  c: []
}


Object.keys(obj).forEach(key => {
  let originValue = obj[key]

  Object.defineProperty(obj, key, {
    set: function (newVal) {
      console.log('old', originValue, 'new ', newVal)
      originValue = newVal;
    },
    get: function () {
      return originValue
    }
  })
});

obj.a = 2
obj.a = 3
