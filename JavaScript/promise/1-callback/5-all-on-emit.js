let fs = require('fs')
const { emit } = require("process");

let eventObj = {
  _arr: [],
  on: function (fn) {
    this._arr.push(fn)
  },
  emit: function () {
    this._arr.forEach(fn => fn());
  }
}

let school = {}
eventObj.on(function () {
  console.log('read')
})

eventObj.on(function () {
  if (Object.keys(school).length === 2) {
    console.log('school', school)
  }
})


fs.readFile('./name.txt', 'utf8', function (err, data) {
  school.name = data;
  eventObj.emit()
})

fs.readFile('./age.txt', 'utf8', function (err, data) {
  school.age = data;
  eventObj.emit()
})

