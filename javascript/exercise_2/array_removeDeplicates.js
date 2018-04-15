/**
 * 给定一个排序数组，你需要在原地删除重复出现的元素，
 * 使得每个元素只出现一次，返回移除后数组的新长度
 */

let numsArray = [1, 6, 3, 9, 9, 6, 0, 1, 8, 20, 25, 9];
// 方法一
function removeDuplicates(numsArray) {
  let newsArray = numsArray.sort((a, b) => a - b);
  for (let i = 0; i < newsArray.length;) {
    if (newsArray[i] === newsArray[i + 1]) {
      newsArray.splice(i, 1);
    } else {
      i++;
    }
  }
  return newsArray;
}

let result = removeDuplicates(numsArray);
console.log(result);

// 方法二 | set()
let result_2 = [...new Set(numsArray.sort((a, b) => a -b))]
console.log(result_2);
