/**
 * 统计数组中等于 item 的元素出现的次数
 */

let array = Array.of(88, 88, 99, 11, 55, 99, 88, 88, 99),
    item = 88;

// 方法一 | for-of 循环
let itemCount_1 = (function(arr, item) {
  let count = 0;
  for (value of arr) {
    if (value === item) {
      count++;
    }
  }
  return count;
})(array, item);

console.log(itemCount_1);

// 方法二 | filter()
let itemCount_2 = ((array, item) => {
  let newArray = array.filter(currentValue => currentValue === item);
  return newArray.length;
})(array, item);

console.log(itemCount_2);

// 方法三 | map()
let itemCount = "count";
class ArrayOperation {
  constructor(arr, item) {
    this.arr = arr;
    this.item = item;
  }
  // 可计算名称
  [itemCount]() {
    let count = 0;
    this.arr.map(currentValue => {
      if (currentValue === this.item) {
        ++count;
      }
    });
    return count;
  }
}
// 实例化
let arrayIns = new ArrayOperation(array, 88);
console.log(arrayIns[itemCount]());

// 方法四 | forEach()
function itemCount_4(arr, item) {
  let count = 0;
  arr.forEach(currentValue => currentValue === item ? count++ : 0);
  return count;
}

console.log(itemCount_4(array, item));
