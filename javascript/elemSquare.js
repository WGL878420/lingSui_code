
/*
    为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
*/

let arr = [1, 2, 3, 4, 5];
// 方法一
function square_1(arr) {
  let newArray = arr.map((value) => {
    return value * value;
  });
  console.log('新数组：' + newArray);
}

square_1(arr);

// 方法二
function square_2(arr) {
  // 复制一个数组
  let newArray = arr.slice(0);
  for (let index in newArray) {
    newArray[index] = Math.pow(newArray[index], 2);
  }
  console.log('新数组：' + newArray);
}

square_2(arr);

// 方法三
function square_3(arr) {
  let newArray = new Array();
  arr.forEach((value) => {
    newArray.push(value * value);
  });
  console.log('新数组：' + newArray);
}

square_3(arr);
