// [1,3,3,4,5,6]

let arr = [1, 3, 3, 4, 5, 6]


let set = new Set(arr)
let arr2 = Array.from(set);


function getArr(arr) {
  let map = new Map()
  let res = []

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
      res.push(arr[i])
    }
  }

  return res;
}

function getArrByStr(arr) {
  let arrStr = arr.split(',') //133456
  let index = 0;
  while (index < arrStr.length) {
    let item = arr[index]
    if (item !== arrStr.lastIndexOf(item)) {
      arrStr.replace(arrStr.lastIndexOf(item), '')
    } else {
      index++;
    }
  }

  return arrStr.join('')

}

// [1, 2, 3, 4, 5, 7, 9]

function randomArr(arr) {
  let res = [];

  while (arr.length >= 0) {
    let index = Math.floor(Math.random() * arr.length);

    let [item] = arr.splice(index, 1)

    res.push(item)
  }
  return res;
}


