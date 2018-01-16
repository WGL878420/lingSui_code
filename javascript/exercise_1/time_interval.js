
/**
 * 写一个函数，获取从当前时间 到 指定日期的间隔时间
 */

function timeInterval(initDate) {
  let time = Date.now() - Date.parse(initDate);
  return time;
}

let initDate = "2017-02-08 10:30:24";
let interval = timeInterval(initDate);

console.log(interval);
