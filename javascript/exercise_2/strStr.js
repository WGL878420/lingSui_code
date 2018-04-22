/**
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
 *
 */

 let resource = 'hanyua';
 let needle = 'yu';

 function strStr(resource, needle) {
   let len_1 = resource.length;
   let len_2 = needle.length;
   for (let i = 0; i <= len_1 - len_2; i++) {
     if (resource.substring(i, i + len_2) == needle) {
       return i;
     }
   }
   return -1;
 }

 let result = strStr(resource, needle);
 console.log(result);
