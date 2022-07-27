let a = [0, 1, 3, 6]
let b = [1, 2, 3, 4, 5]


/**
 * 思路，利用个排序的数组，双指针挨个数组比较。放入temp数组中，temp有一个控制添加的指针。
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns 
 */
function sort(arr1, arr2) {
  let temp = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      temp[k++] = arr1[i++]
    } else {
      temp[k++] = arr2[j++]
    }
  }

  while (i < arr1.length) {
    temp[k++] = arr1[i++]
  }

  while (j < arr2.length) {
    temp[k++] = arr2[j++]
  }

  return temp;
}
let res = sort(a, b)
console.log(res)