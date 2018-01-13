/*
随机取出数组中 5 个元素组成新数组 | 且无重复元素

*/

function randomArray (singers) {
  // 空数组 | 长度为 5
  let newArray = new Array(5);
  for (let i = 0; i < newArray.length; i++) {
    let length = singers.length;
    // 随机获取数组下标
    let random = Math.floor(Math.random() * length);
    newArray[i] = singers[random];
    // 剔除数组一个元素 | 避免新数组中有重复元素
    singers.splice(random, 1);
  }
  return newArray;
}

let singers = ['张杰', '赵雷', '李健', '林志炫', '张碧晨', '梁博', '周笔畅', '张靓颖', '陈奕迅', '周杰伦', '王力宏', 'TFBoys', '李玉刚', '魏晨', '薛之谦'];
console.log(randomArray(singers));
