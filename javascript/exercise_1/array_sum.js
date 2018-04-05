/**
 * 数组求和
 */

let array = [5, 10, 8, 6, 2];

// 方法一
function sum_1(arr) {
  let sum = 0;
  for (item of arr) {
    sum += item;
  }
  return sum;
}

console.log(sum_1(array));

// 方法二 | 立即执行箭头函数
let sum_2 = (arr => arr.reduce((prev, current) => prev + current))(array);
console.log(sum_2);

// 方法三 | forEach
function sum_3(arr) {
  let sum = 0;
  arr.forEach(curValue => sum += curValue);
  return sum;
}

console.log(sum_3(array));
