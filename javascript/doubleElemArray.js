
/*
  参数：[1, 2, 3, 4, 5]
  return：[1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
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
console.log(doubleElemArray(old_array, number));
