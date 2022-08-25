// js 计算两个大数字的和
function sum(a, b) {
  const length = Math.max(a.length, b.length)
  a = getZeroStr(length, a)
  b = getZeroStr(length, b)
  let i = a.length - 1;
  let res = ''
  let temp = 0; // 进位的数字
  while (i >= 0) {
    let sum = Number(a[i]) + Number(b[i]) + Number(temp)
    if (sum >= 10) {
      // 进位
      sum = sum % 10
      temp = 1;
      res = sum.toString() + res
    } else {
      res = sum.toString() + res
      temp = 0;
    }
    i--;
  }
  if (temp == 1) {
    res = '1' + res
  }
  console.log('res', res)
  return res;

}

function getZeroStr(count, number) {
  return number = number.padStart(count, '0')
}

sum('500', '500')
getZeroStr(3, '13')