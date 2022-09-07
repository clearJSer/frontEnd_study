// 二分查找 递归写法
// 内部find 都要return。
// 关键 挪动指针时候 +1. -1；
function binarySearch(arr, target) {
  function find(left, right) {
    let index = Math.floor((left + right) / 2)
    if (left > right) return -1; // 关键
    if (arr[index] === target) {
      return index;
    } else if (arr[index] < target) {
      left = index + 1; // 关键
    } else {
      right = index - 1; // 关键
    }
    return find(left, right)
  }
  return find(0, arr.length - 1)
}


// while 循环写法
function binarySearch2(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)

    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      left = middle + 1; // 关键
    } else {
      right = middle - 1; // 关键
    }
  }
  return -1;
}

let arr = [1, 2, 3, 6]
console.log(binarySearch2(arr, 8))