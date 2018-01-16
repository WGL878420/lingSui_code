/**
 *  删除数组指定元素
 */

let array = [9, 3, 5, 3, 7, 3, 9, 6, 3];
let item = 3;

function remove_1(array, item) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == item) {
      continue;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(remove_1(array, item));

// 方法二
function remove_2(array, item) {
  let newArray = array.slice(0);
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] == item) {
      let index = newArray.indexOf(item);
      newArray.splice(index, 1);
    }
  }
  return newArray;
}

console.log(remove_2(array, item));
