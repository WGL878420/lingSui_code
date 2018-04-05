/**
 *  删除数组中所有指定元素
 */

let array = [9, 3, 5, 3, 7, 3, 9, 6, 3];
let item = 3;

// 方法一
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

// 方法三 | splice()
function remove_3(arr, item) {
  var newArray = [...arr];
  for (index in newArray) {
    if (newArray[index] === item) {
      newArray.splice(index, 1);
    }
  }
  return newArray;
}

console.log(remove_3(array, 3));

// 方法四 | filter()
function remove_4(arr, item) {
  return arr.filter(current => current !== item);
}

console.log(remove_4(array, 3));
