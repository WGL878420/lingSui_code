/**
 * 计算一个数的位数（共几个数字）
 */

let num = 123456789;

// 方法一 | while循环
let count = 0;
while(num != 0) {
  num = parseInt(num / 10);
  count++;
}
console.log(count);


let num_2 = 123456789;
// 方法二 | 转为字符串
let str = num_2 + '';
console.log(str.length);
