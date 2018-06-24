/**
 * 求：数组连续元素的最大长度
 */

 let arr = [1, 2, 4, 5, 6, 8, 9, 10, 11];

 function continueItemMaxLen(arr) {
   if (Array.isArray(arr)) {
     if (arr.length === 0) return 0;
     // 首先进入当前连续长度 nowLen 初始化为 1
     let nowLen = 1;
     // 最终连续长度 maxLen 初始化为0
     let maxLen = 0;

     for (let i = 1; i < arr.length; i++) {
       // 当前元素是否比上一个元素大 1
       if (arr[i] - arr[i - 1] === 1) {
        // 当前连续长度 nowLen + 1
         nowLen++;
       } else {
         if (maxLen < nowLen) maxLen = nowLen;
         // 当前连续长度初始化为 1
         nowLen = 1;
       }
     }
    // 循环完再判断一次当前连续长度是否大于最大连续长度
    //（避免最大连续长度是数组最后面几个元素时产生的 bug）
     if (maxLen < nowLen) {
       maxLen = nowLen;
     }
     return maxLen;
   }
 }

console.log(continueItemMaxLen(arr));
