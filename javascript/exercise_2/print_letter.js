/**
 * 依次打印 a - z | 实现打字效果
 */

let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let len = str.length;
let index = 0;

let timer = setInterval(function() {
  if (index >= len) {
    clearInterval(timer);
    return;
  }
  index++;
  
  console.log(str.substring(0, index));
}, 500);
