
/*
  写一个函数，返回从 min 到 max 之间的 随机整数，包括 min不包括 max
*/

function random(min, max) {
  let randomNum = min + (Math.floor(Math.random() * (max - min)));
  return randomNum;
}

let min_num = 5,
    max_num = 10;
    
let result = random(min_num, max_num);

console.log(result);
