/**
 * 查找数组中重复元素
 */
 let array = [9, 9, 8, 6, 6, 4, 9, 1, 8, 2, 0, 9],
     item = 9;

// 方法一
function repeatItem(array, item) {
  let object = {},
      repeatItemCount = 0;
  // 算出数组中每个元素出现的次数，保存在对象中
  for (value of array) {
    if (!(value in object)) {
      object[value] = 1;
    } else {
      object[value]++;
    }
  }
  // 遍历对象，过滤掉数组中元素出现一次的值
  for (key in object) {
    object[key] === 1 ? delete object[key] : null;
  }
  return object;
}

console.log(repeatItem(array, item));

// 方法二 | indexOf() && lastIndexOf()
let repeatElemToArray = (function(array) {
  let newArray = new Array();
  array.forEach(function(currentValue) {
    // 若当前元素在 old 数组中出现的第一次位置 != 最后一次位置 && new array 不存在当前元素，便执行 if 语句中语句
    if (array.indexOf(currentValue) !== array.lastIndexOf(currentValue) && !(newArray.includes(currentValue))) {
      newArray.push(currentValue);
    }
  });
  return newArray;
})(array);

console.log(repeatElemToArray);

// 方法三 | sort()
let repeatItem_3 = array => {
  let sortArray = array.sort();
  let newArray = [];
  for (index in sortArray) {
     if (sortArray[index] == sortArray[index - 1] && newArray.indexOf(sortArray[index]) == -1) {
       newArray.push(sortArray[index]);
     }
  }
  return newArray;
}

console.log(repeatItem_3(array));
