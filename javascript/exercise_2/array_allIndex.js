/**
 * 查找数组中值与 item 相等的所有位置
 */

 let array = [1, 1, 1, 8, 8, 9, 4, 5, 1],
     item = 1;

// 方法一 | for
function findAllIndex(array, item) {
  let indexArr = [];
  for (let index = 0; index < array.length; index++) {
    array[index] === item ? indexArr.push(index) : null;
  }
  return indexArr;
}

console.log(findAllIndex(array, item));

// 方法二 | filter()
let findAllIndex_2 = function(array, item) {
  let indexArr = new Array();
  array.filter((currentValue, index) => {
    return currentValue === item && indexArr.push(index);
  });
  return indexArr;
}

console.log(findAllIndex_2(array, item));

// 方法三 | indexOf()
function findAllIndex_3(array, item) {
  let result = [],
      index = array.indexOf(item);
  while (index != -1) {
    result.push(index);
    index = array.indexOf(item, ++index);
  }
  return result;
}

console.log(findAllIndex_3(array, item));

// 方法四 lastIndexOf() + splice()
function findAllIndex_4(array, item) {
  let result = new Array(),
      // 最后出现的位置
      index = array.lastIndexOf(item);
  while (index != -1) {
    result.push(index);
    // 删除元素
    array.splice(index, 1);
    index = array.lastIndexOf(item)
  }
  return result.sort();
}

console.log(findAllIndex_4(array, item));
