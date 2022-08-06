function checkType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}

// type dataType = Object | [] | null | any;
function cloneDeep(target) {

  let res = null;
  let targetType = checkType(target);

  switch (targetType) {
    case "Object":
      res = {}
      break;
    case "Array":
      res = []
      break;
    default:
      break;
  }

  for (let i in target) {
    let value = target[i];
    let type = checkType(value)
    if (type === 'Object' || type === "Array") {
      res[i] = cloneDeep(value)
    } else {
      res[i] = value
    }
  }

  return res;

}
// test
let a = {
  'age': 10,
  "name": '1232',
  "array": [1, 1, 2],
  "obj": {
    name: '333'
  }
}

const b = cloneDeep(a)
console.info(111, b)

// 浅拷贝
function easyCopy(target) {
  let res = {}
  for (let i in target) {
    res[i] = target[i]
  }
  return res
}