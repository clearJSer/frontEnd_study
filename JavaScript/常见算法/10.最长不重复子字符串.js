function longestSubString(s) {
  // let l = 0;
  // let res = 0;
  // let resStr = ''

  // const map = new Map();

  // for (let r = 0; r < s.length; r++) {
  //   if (map.has(s[r]) && map.get(s[r]) >= l) {
  //     l = map.get(s[r]) + 1
  //   }
  //   resStr = s.substring(l, r + 1)
  //   res = Math.max(res, r - l + 1)
  //   console.log(resStr)
  //   map.set(s[r], r)
  // }

  // return res;

  let l = 0;
  let r = 0;
  let res = 0;
  let map = new Map()
  let str = ''
  while (r < s.length) {
    const item = s[r]
    if (map.has(item) && map.get(item) >= l) {
      l = map.get(item) + 1
      map.set(item, r)
      if (str.length < r - l) {
        str = s.substr(l, r)
      }
    } else {
      map.set(item, r)
      res = Math.max(res, r - l + 1)
      str += item;
    }
    r++;
  }
  console.log(str)
  return res
}

console.log(longestSubString('abcabcbb'))
console.log(longestSubString('aacabbb'))
console.log(longestSubString('pwwkew'))