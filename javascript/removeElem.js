
/*
    删除指定元素
*/

let array = [1, 3, 5, 3, 7, 3, 9];
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
