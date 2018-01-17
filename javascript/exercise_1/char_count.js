
/**
 * 写个函数 | 求数组中每个元素出现次数
 */

function arrElemCount(array) {
  let obj = {};
  for (value of array) {
    value in obj ? obj[value]++ : obj[value] = 1;
    // if (value in obj) {
    //   obj[value]++;
    // } else {
    //   obj[value] = 1;
    // }
  }
  return obj;
}

let array = ['a', 'b', 'b', 'd', 'c', 'd', 'c', 'c', 'd', 'a', 'd'];

let arrElem_count = arrElemCount(array);
console.log(arrElem_count);


/**
 * 写个函数 | 求字符串中每个字符出现次数
 */

function charCount(string) {
  let charCount = {};
  // 返回数组的成员是原字符串的每一个字符
  let strArray = string.split('');
  strArray.forEach((value) => {
    charCount[value] = (charCount[value] || 0) + 1;
  });
  return charCount;
}

let string = 'abbcccddddeeeeeffffff';

let char_count = charCount(string);
console.log(char_count);
