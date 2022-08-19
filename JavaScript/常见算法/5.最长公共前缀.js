//编写一个函数来查找字符串数组中的最长公共前缀。

var maxArea = function (height) {
  let maxRes = 0;
  for (let i = 0; i < height.length - 1; i++) {
    // let end = i + 1;
    // while (end <= height.length) {
    //   let w = end - i;
    //   let h = Math.min(height[i], height[end]);
    //   console.log(h)
    //   maxRes = Math.max(maxRes, w * h)
    // }
  }
  return maxRes;
}

console.log(maxArea([1, 8, 6, 2]))