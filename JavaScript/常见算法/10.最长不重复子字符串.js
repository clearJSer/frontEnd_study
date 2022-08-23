function longestSubString(s) {
  let l = 0;
  let res = 0;
  let resStr = ''

  const map = new Map();

  for (let r = 0; r < s.length; r++) {
    if (map.has(s[r]) && map.get(s[r]) >= l) {
      l = map.get(s[r]) + 1
    }
    resStr = s.substring(l, r + 1)
    res = Math.max(res, r - l + 1)
    console.log(resStr)
    map.set(s[r], r)
  }

  return res;
}

console.log(longestSubString('pwwkew'))