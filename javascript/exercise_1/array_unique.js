
/**
 * 数组元素去重
 */

 function unique(array) {
   let newArray = [];
   let obj = {};
   for (value of array) {
     if (!obj[value]) {
      //  对象属性赋于默认值
       obj[value] = true;
       newArray.push(value);
     }
   }
   return newArray;
 }

let array = [1, 1, 2, 2, 3, 3, 3, 2, 1, 4, 5, 1];

let newArray = unique(array);
console.log(newArray);
