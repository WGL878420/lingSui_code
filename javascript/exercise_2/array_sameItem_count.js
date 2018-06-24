/**
 * 统计数组 arr 中值等于 item 的元素出现的次数
 */

let arr = [1, 2, 3, 1, 2, 1, 8, 8, 9, 1];
let item = 1;

// 方法一
function sameItemCount(arr, item) {
  let count = 0;
  for (let value of arr) {
      value === item ? count++ : null;
  }
  return count;
}

console.log(sameItemCount(arr, item));

// 方法二
let sameItemCount_2 = (arr, item) => {
  return arr.filter((value) => value === item).length;
};

console.log(sameItemCount_2(arr, item));

// 方法三 | 函数立即执行
let sameItem = 0;
(function(arr, item) {
  arr.map(function(value) {
    if (item === value) {
      sameItem++;
    }
  });
})(arr, item);

console.log(sameItem);
