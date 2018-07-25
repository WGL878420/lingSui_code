
window.onload = function() {
  // 获取元素，父容器，列表，小圆点，两个箭头
  var container = document.getElementById('container');
  var list = document.getElementById('list');
  var buttons = document.getElementById('buttons').getElementsByTagName('span');
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');

  var index = 1; //小圆点序号
  var animated = false; //存放动画运行状态，优化功能(正在动画，点击无效)
  var interval = 3000; //自动播放时间间隔
  var timer;

  // 切换时点亮小圆点
  function showButton() {
    for (var i = 0; i < buttons.length; i++) {
      // 遍历所有小圆点，置灰已前点亮的小圆点
      if (buttons[i].className == 'on') {
        buttons[i].className = '';
        break; // 跳出循环
      }
    }
    // 点亮当前小圆点
    buttons[index - 1].className = 'on';
  }

  // 滑动动画效果
  function animate(offset) {
    animated = true;
    // left属性的目标值
    var newLeft = parseInt(list.style.left) + offset;
    var time = 300; // 位移总时间
    var interval = 10; //位移间隔时间
    // 每次位移量 = 总偏移量 / 次数
    var speed = offset / (time / interval);

    // go() 功能是判断是否位移和实现位移
    function go() {
      // 符合位移条件，进行位移
      if ( (speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 && parseInt(list.style.left) < newLeft) ) {
        list.style.left = parseInt(list.style.left) + speed + 'px';
        setTimeout(go, interval);
      } else {
        animated = false;
        // 不符合位移条件，把当前left值置为目标值
        list.style.left = newLeft + 'px';
        // 如当前在辅助图上，就归位到真的图上
        if (newLeft > -800) {
          list.style.left = -4000 + 'px';
        } else if (newLeft < -4000) {
          list.style.left = -800 + 'px';
        }
      }
    }
    go();
  }

  // 点击右箭头事件，向左移动
  next.onclick = function() {
    //小圆点index归位
    if (index === 5) {
      index = 1;
    } else {
      index += 1;
    }
    // 小圆点跟随箭头移动
    showButton();
    // 正在切换，点击无效
    if (!animated) {
      animate(-800);
    }
  }
  // 点击左箭头事件，向右移动
  prev.onclick = function() {
    if (index === 1) {
      index = 5;
    } else {
      index -= 1;
    }
    showButton();
    if (!animated) {
      animate(800);
    }
  }

  // 给每一个小圆点添加点击事件
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      // 点击当前小圆点，不执行后面的代码
      if (this.className == 'on') {
        return;
      }

      // 小圆点跳跃切换
      var myIndex = parseInt(this.dataset.index);
      // 求偏移量
      var offset = 800 * (myIndex - index);
      // 更新小圆点index值
      index = myIndex;
      // 点亮小圆点
      showButton();
      // 正在切换，点击无效
      if (!animated) {
        animate(offset);
      }
    }
  }

  // 开始自动播放
  function autoplay() {
    timer = setInterval(function() {
      next.onclick();
    }, interval);
  }
  autoplay();

  // 停止自动播放
  function stop() {
    clearInterval(timer);
  }
  // 鼠标移入停止自动播放
  container.onmouseover = stop;
  // 鼠标移出开始自动播放
  container.onmouseout = autoplay;
}
