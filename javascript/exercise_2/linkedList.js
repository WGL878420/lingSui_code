/**
 * 链表
 */

/* 单向链表 */
function LinkedList() {
  var Node = function(element) {
    this.element = element;
    this.next = null;   // 指向下一个元素的指针
  };
  var length = 0;    // 长度
  var head = null;   // 第一个元素指针

  /* 向链表尾部追加元素 */
  this.append = function(element) {
    var node = new Node(element);
    var current;

    if (head === null) {   // 列表中第一个节点
      head = node;
    } else {
      current = head;
      // 循环列表，直到找到最后一项
      while (current.next) {
        current = current.next;
      }
      // 找到最后一项，将 next 赋于 node，建立连接
      current.next = node;
    }
    length++;   // 更新列表长度
  };

  /* 移除列表特定位置元素 */
  this.removeAt = function(position) {
    // 检查是否越界
    if (position > -1 && position < length) {
      var current = head;
      var previous;
      var index = 0;

      if (position === 0) {   // 移除第一项
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        // 将 previous 与 current 的下一项链接起来
        previous.next = current.next;
      }
      length--;
      return current.element;   // 返回移除的元素
    } else {
      return null;
    }
  };

  /* 在任意位置插入一个元素 */
  this.insert = function(position, element) {
    // 检查越界
    if (position >= 0 && position <= length) {
      var node = new Node(element);
      var current = head;
      var previous;
      var index = 0;

      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      length++;   // 更新列表长度
      return true;
    } else {
      return false;
    }
  };

  /* 将链表对象转换成一个字符串 */
  this.toString = function() {
    var current = head;
    var string = '';

    while (current) {
      string = current.element;
      current = current.next;
    }
    return string;
  };

  /* 检索元素在列表中的位置，否则返回 -1 */
  this.indexOf = function(element) {
    var current = head;
    var index = -1;

    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  };

  this.remove = function(element) {
    var index = this.indexOf(element);
    return this.removeAt(index);
  };
  // 判断链表是否为空
  this.isEmpty = function() {
    return length === 0;
  };

  /* 获得第一个元素 */
  this.getHead = function() {
    return head;
  };
}

var list = new LinkedList();
list.append(15);
list.append(10);

console.log(list.isEmpty());


/* 双向链表 */
function DoublyLinkedList() {
  var Node = function(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  };

  var length = 0;
  var head = null;   // 头部元素指针
  var tail = null;   // 尾部元素指针

  /* 向任意位置插入一个元素 */
  this.insert = function(position, element) {
    // 检查越界
    if (position >= 0 && position <= position) {
      var node = new Node(element);
      var current = head;
      var index = 0;
      var previous;   // 代指上一个元素 | 占位

      if (position === 0) {   // 在第一个位置添加
        if (!head) {
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node;
          head = node;
        }
      } else if (position === length) {   // 在最后一位置添加
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      length++;
      return true;
    } else {
      return false;
    }
  };

  /* 从任意位置移除元素 */
  this.removeAt = function(position) {
    // 检查越界
    if (position > -1 && position < length) {
      var current = head;
      var previous;
      var index = 0;

      // 移除第一项
      if (position === 0) {
        head = current.next;
        // 如果只有一项
        if (length === 1) {
          tail = null;
        } else {
          head.prev = null;
        }
      } else if (position === length - 1) {   // 最后一项
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        // 将 previous 与 current 的下一项链接起来
        previous.next = current.next;
        current.next.prev = previous;
      }

      length--;
      return current.element;
    } else {
      return null;
    }
  };
}
