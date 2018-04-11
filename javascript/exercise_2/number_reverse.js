/**
 * 给定一个范围为 32 位 int 的整数，将其颠倒。
 */

function numReverse(number) {
  if (number % 1 !== 0) return '参数必须为整数';
  let absNumber = Math.abs(number);
  let reverse = parseInt((absNumber + '').split('').reverse().join(''), 10);
  if (reverse > Math.pow(2, 31)) return 0;
  return number < 0 ? 0 - reverse : reverse;
}

let result = numReverse(987);
console.log(result);
