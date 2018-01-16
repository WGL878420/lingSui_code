
/*
  写一个函数，生成一个随机 IP 地址，
  一个合法的 IP 地址为 0.0.0.0 ~ 255.255.255.255
*/

function randomIP() {
  let randIP = [];
  for (let i = 0; i < 4; i++) {
    let ipNum = Math.floor(Math.random() * 256);
    randIP.push(ipNum);
  }
  return randIP;
}

let ip =  randomIP().join('.');
console.log(ip);
