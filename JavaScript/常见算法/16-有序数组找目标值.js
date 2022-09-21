
let test = [1, 2, 2, 3, 4, 5, 6]

function findTarget(arr, target) {

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    if (arr[middle] < target) {
      left = middle + 1;
    } else if (arr[middle] === target) {
      return middle
    } else {
      right = middle - 1;
    }
  }
  return -1;

}

console.log(findTarget(test, 6))