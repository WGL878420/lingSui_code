<template>
  <div id="container">
    <article class="page-title">仿 QQ 侧滑</article>

    <ul>
      <li class="list-item" v-for="(item, index) of list" :key="index" data-type="0">
        <div class="list-box" @touchstart="touchStart" @touchend="touchEnd" @click="handleClick">
          <img class="list-img" :src="item.imgUrl" alt="" />
          <section class="list-content">
            <p class="title">{{ item.title }}</p>
            <p class="tips">{{ item.tips }}</p>
            <p class="time">{{ item.time }}</p>
          </section>
        </div>
        <div class="delete" @click="deleteItem" :data-index="index">删除</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          title: 'Chrome 更新了',
          imgUrl: './static/chrome.png',
          tips: '不再支持 Flash 视频播放',
          time: '上午 8:30'
        },
        {
          title: '电影新资讯',
          imgUrl: './static/sina.png',
          tips: '电影《红海行动》上映以来票房暴涨，很多国人表示对国产电影有了新的改观',
          time: '下午 16:00'
        },
        {
          title: '聚焦两会·共筑中国梦',
          imgUrl: './static/tencent.png',
          tips: '习近平代表的两会故事',
          time: '下午 17:45'
        },
        {
          title: '微信团队',
          imgUrl: './static/wechat.png',
          tips: '您的帐号有异常登录，如非本人操作，请及时修改密码',
          time: '昨天 18:30'
        }
      ],
      startX: 0,
      endX: 0
    };
  },
  methods: {
    /*
     * 当手指放在屏幕上触发
     */
    touchStart (event) {
      // touches：当前位于屏幕上的所有手指的一个列表
      this.startX = event.touches[0].clientX;
    },
    /*
     * 当手指从屏幕上离开时触发
     */
    touchEnd (event) {
      // event.currentTarget 返回绑定事件的元素
      let parentElement = event.currentTarget.parentElement;
      // changedTouches：涉及(引发)当前事件的手指的一个列表
      this.endX = event.changedTouches[0].clientX;
      // dataset 访问 data-* 自定义数据属性
      if (parentElement.dataset.type == 0 && this.startX - this.endX > 30) {
        // 一次只能滑动一个
        this._resetSlide();
        parentElement.dataset.type = 1;
      }

      if (parentElement.dataset.type == 1 && this.startX - this.endX < -30) {
        this._resetSlide();
        parentElement.dataset.type = 0;
      }
    },
    /*
     * 重置所有滑动块
     */
    _resetSlide () {
      // querySelectorAll 方法返回文档中匹配指定 CSS 选择器的所有元素
      let listItems = document.querySelectorAll('.list-item');

      for (let item of listItems) {
        item.dataset.type = 0;
      }
    },
    /*
     * 检查所有列表是否有处于滑动状态
     */
    _checkSlide () {
      // querySelectorAll 方法返回文档中匹配指定 CSS 选择器的所有元素
      let listItems = document.querySelectorAll('.list-item');

      for (let item of listItems) {
        if (item.dataset.type == 1) {
          return true;
        }
      }
      return false;
    },
    /*
    * 处理单个元素点击
    */
    handleClick () {
      if (this._checkSlide()) {
        this._resetSlide();
      } else {
        window.alert('点击了！');
      }
    },
    /*
     * 删除 item
     */
     deleteItem (event) {
       let index = event.currentTarget.dataset.index;
       this._resetSlide();
       this.list.splice(index, 1);
     }
  }
};
</script>

<style scoped>
  @import './index.css';
</style>
