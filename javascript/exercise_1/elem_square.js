
/**
 * 为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
 */

let arr = [1, 2, 3, 4, 5];
// 方法一
function square_1(arr) {
  let newArray = arr.map((value) => {
    return value * value;
  });
  return newArray;
}

let newArray_1 = square_1(arr);
console.log(newArray_1);

// 方法二
function square_2(arr) {
  // 复制一个数组
  let newArray = arr.slice(0);
  for (let index in newArray) {
    newArray[index] = Math.pow(newArray[index], 2);
  }
  return newArray;
}

let newArray_2 = square_1(arr);
console.log(newArray_2);

// 方法三
function square_3(arr) {
  let newArray = new Array();
  arr.forEach((value) => {
    newArray.push(value * value);
  });
  return newArray;
}

let newArray_3 = square_1(arr);
console.log(newArray_3);
