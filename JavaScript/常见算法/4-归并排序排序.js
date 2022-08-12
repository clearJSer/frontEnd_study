let arr = [0, 2, 0, 3, 1, 50, 8, 7];

function mergeSort(nums) {
  let len = nums.length;
  if (len < 2) {
    return nums;
  }
  let index = parseInt(len / 2)
  let left = nums.slice(0, index)
  let right = nums.slice(index)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let res = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift())
    } else {
      res.push(right.shift())
    }
  }

  if (left.length === 0) {
    res = res.concat(right)
  }
  if (right.length === 0) {
    res = res.concat(left)
  }

  return res;
}

console.log(mergeSort(arr))