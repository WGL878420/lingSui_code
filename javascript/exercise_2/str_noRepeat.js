/**
 * 给定一个字符串，找出不含有重复字符的 最长子串 的长度
 *
 * example:
 *         给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是 3。
 *         给定 "bbbbb" ，最长的子串就是 "b" ，长度是 1。
 *         给定 "pwwkew" ，最长子串是 "wke" ，长度是 3。
 */


let string = 'abcabcbb';

function noRepeatStrLen(str) {
  let maxLen = 0; // 初始化最长长度
  let subArr = [];   // 保存无重复元素子串
  let index;   // 数组索引

  for (let i = 0; i < str.length; i++) {
    // 检索数组是否已有该字符
    index = subArr.indexOf(str[i]);
    if (index !== -1) {
      subArr = subArr.slice(index + 1, subArr.length);
    }
    subArr.push(str[i]);
    maxLen = Math.max(maxLen, subArr.length);
  }
  return maxLen;
}

let result = noRepeatStrLen(string);
console.log(result);
