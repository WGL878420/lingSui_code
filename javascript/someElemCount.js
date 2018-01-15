
 /*
    统计数组 arr 中值等于 item 的元素出现的次数
 */

let arr = [1, 3, 2, 1, 3, 1, 1];
let item = 1;

// 方法一
function itemCount(arr, item) {
  let count = 0;
  for (value of arr) {
    if (value == item) {
      count++;
    }
  }
  console.log('次数：'+ count);
}

itemCount(arr, item);

// 方法二
function itemCount_2(arr, item) {
  let count = 0;
  arr.forEach((value) => {
    // if (value == item) count++;
    value == item ? count++ : count;
  });
  console.log('次数：'+ count);
}

itemCount_2(arr, item);

// 方法三
function itemCount_3(arr, item) {
  let newArray = arr.filter((value) => {
    return value == item;
  });
  console.log('次数：'+ newArray.length);
}

itemCount_3(arr, item);

// 方法四
function itemCount_4(arr, item) {
  let count = 0;
  arr.map((value) => {
    if (value == item) count++;
  });
  console.log('次数：'+ count);
}

itemCount_4(arr, item);
