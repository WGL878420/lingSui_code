/**
 * 函数描述：
 *  参数：[1, 2, 3, 4, 5]
 *  返回：[1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
 *
 * @param { Array } old_array.
 * @param { number } number.
 * @return { Array } 新数组.
 *
*/

function doubleElemArray(old_array, number) {
  let oldArray = old_array;
  let newArray = new Array();
  for (let i = 0; i < number; i++) {
    for (value of oldArray) {
      newArray.push(value);
    }
  }
  return newArray;
}

let old_array = [1, 2, 3, 4, 5];
let number = 2;

let newArray = doubleElemArray(old_array, number);
console.log(newArray);
