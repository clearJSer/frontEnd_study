let arr1 = [0, 2, 0, 3, 1, 50, 8, 7]

/**
 * 快速排序
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length <= 1) return nums; //递归中止
  const pivotIdx = Math.floor(nums.length * Math.random());
  const pivot = nums.splice(pivotIdx, 1)[0];
  const left = [],
    right = [];
  for (let num of nums) {
    if (num < pivot) left.push(num);
    else right.push(num);
  }
  return sortArray(left).concat([pivot], sortArray(right));
};

console.log(sortArray(arr1))