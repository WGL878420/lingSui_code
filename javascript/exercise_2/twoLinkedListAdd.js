/**
 * 给定两个非空链表来代表两个非负整数，位数按照逆序方式存储,
 * 它们的每个节点只存储单个数字。将这两数相加会返回一个新的链表;
 *
 * example:
 *          输入：(2 -> 4 -> 3) + (5 -> 6 -> 4),
 *          输出：7 -> 0 -> 8
 *          原因：342 + 465 = 807
 */


/*
 思路：
      这道题目的本质是链表的操作，单个链表从表头到表尾代表的是从数字的个位、十位、百位
      一直往上，也就是题目说的逆序方式存储。
      个位跟个位相加，超过十的部分作为进位，在下一位相加的时候添上这个进位值。
 */

// 定义单项链表节点
function LinkedList(value) {
  this.value = value;
  this.next = null;
}

/* 迭代写法，以节点个数为准 */
function addTwoLinkedList(link_1, link_2) {
  if (link_1 === null && link_2 === null) {
    return null;
  }

  // 定义一个结果链表 | 第一个节点元素为 0
  let resultLink = new LinkedList(0);
  let point = resultLink;   // 指向链表第一个节点的指针
  let carryNum = 0;   // 进位值 | default: 0

  // 当两个链表都不为空时。求得各个节点的值
  while (link_1 !== null && link_2 !== null) {
    let sum = carryNum + link_1.value + link_2.value;
    point.next = new LinkedList(sum % 10);   // 节点元素应存的值
    carryNum = Math.floor(sum / 10);   // 进位值
    // 移到下一个节点
    link_1 = link_1.next;
    link_2 = link_2.next;
    point = point.next;
  }

  // 当 link_1 不为空，link_2 为空得时候
  while (link_1 !== null) {
    let sum = carryNum + link_1.value;
    point.next = new LinkedList(sum % 10);
    carryNum = Math.floor(sum / 10);
    link_1 = link_1.next;
    point = point.next;
  }

  // 当 link_2 不为空，link_1 为空得时候
  while (link_2 !== null) {
    let sum = carryNum + link_2.value;
    point.next = new LinkedList(sum % 10);
    carryNum = Math.floor(sum / 10);
    link_2 = link_2.next;
    point = point.next;
  }

  // 最后一位 | 如进位值不为 0 结果链表则添加一节点
  if (carryNum !== 0) {
    point.next = new LinkedList(carryNum);
  }

  return resultLink.next;
}

let a_1 = new LinkedList(2);
let a_2 = new LinkedList(4);
// let a_3 = new LinkedList(3);
a_1.next = a_2;
// a_2.next = a_3;

let b_1 = new LinkedList(5);
let b_2 = new LinkedList(6);
let b_3 = new LinkedList(4);
b_1.next = b_2;
b_2.next = b_3;

let result = addTwoLinkedList(a_1, b_1);
console.log(result);
