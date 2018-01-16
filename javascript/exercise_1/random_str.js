
/**
 * 写一个函数，生成一个长度为 n 的随机字符串，
 * 字符串字符的取值范围包括 0 - 9，a - z，A - Z
 */

function getRandomStr(num) {
  let randomStr = ''
  let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < num; i++) {
    randomStr += str[Math.floor(Math.random() * str.length)];
  }
  return randomStr;
}

let num = 5;

let result = getRandomStr(num);
console.log(result);
