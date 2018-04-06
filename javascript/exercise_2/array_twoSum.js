/**
 * 给定一个值 和 整数数组，要求返回数组中两个元素相加等于该值的索引数组
 *
 * example:
 *           Given nums = [2, 7, 11, 15], target = 9,
 *           Because nums[0] + nums[1] = 2 + 7 = 9,
 *           return [0, 1].
 */

let nums = [11, 8, 9, 15, 1, 7];
let target = 9;

// 方法一 | 双重 for 循环
function twoSum(nums, target) {
  let result = [];
  outer: for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        result.push(i, j);
        // 退出双重循环
        break outer;
      }
    }
  }
  return result;
}

console.log(twoSum(nums, target));

// 方法二 | map()
let twoSum_2 = function(nums, target) {
  let result = new Array();
  let map = new Map();
  let number,
      mapValue;
  for (let index = 0; index < nums.length; index++) {
    map.set(nums[index], index);
  }
  for (let i = 0; i < nums.length; i++) {
    number = target - nums[i];
    // 检索 map
    mapValue = map.get(number);
    if (mapValue != undefined && mapValue > i) {
      result.push(i, mapValue);
      break;
    }
  }
  return result;
}

console.log(twoSum_2(nums, target));
