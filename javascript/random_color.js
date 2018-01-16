
/*
    写一个函数，生成一个随机颜色字符串，
    合法的颜色为 #000000 ~ #ffffff
*/

function randomColor() {
  let color = '#';
  let colorValue = '0123456789abcdef';
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * colorValue.length);
    color += colorValue[index];
  }
  return color;
}

let color =  randomColor();
console.log(color);
