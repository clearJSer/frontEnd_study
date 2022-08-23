let a = [1, 3, 4]

let b = a.reduce((item, next) => {
  return item += next
}, 5)
console.log(b)