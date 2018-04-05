
/**
 * 查找数组元素位置
 */

let array = [2, 3, 5, 9, 10, 4];

// 方法一
function arrayIndexOf_1(array, value) {
  if (Array.isArray(array)) {
    let index = array.indexOf(value);
    return index === -1 ? `数组中不存在元素 ${ value }.`
           : `元素 ${ value } 存在于数组中下标为：${ index }`;
  } else {
    try {
      throw new Error('第一个参数必须是数组！');
    } catch (error) {
      return error.message;
    }
  }
}

console.log(arrayIndexOf_1(array, 2));

// 方法二
function arrayIndexOf_2(array, item) {
  // 转换成字符串
  let stringArray = array.join('');
  return stringArray.search(item);
}

console.log(arrayIndexOf_2(array, 10));
