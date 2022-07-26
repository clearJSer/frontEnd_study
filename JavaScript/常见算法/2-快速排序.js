let arr1 = [0, 2, 0, 3, 1, 50, 8, 7]

function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  let current = arr[0]
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < current) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  result = quickSort(left).concat(current, quickSort(right))
  return result
}


console.log(quickSort(arr1))