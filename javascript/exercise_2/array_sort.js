/**
 * 打乱数组元素 返回 一个新的数组
 */

let arrays = [10, 88, 33, 89, 51, 1, 9, 666];

function arraySort(arrays) {
  let len = arrays.length;
  let temp;
  for (let i = 0; i < len; i++) {
    let randomIndex = Math.floor(Math.random() * len);
    temp = arrays[i];
    arrays[i] = arrays[randomIndex];
    arrays[randomIndex] = temp;
  }
  return arrays;
}

let result = arraySort(arrays);
console.log(result);
