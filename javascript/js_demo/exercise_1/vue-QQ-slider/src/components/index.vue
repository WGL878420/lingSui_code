<template>
  <div id="container">
    <article class="page-title">仿 QQ 侧滑</article>

    <ul>
      <li class="list-item" v-for="(item, index) of list" :key="index" data-type="0">
        <div class="list-box" @touchstart="touchStart" @touchend="touchEnd">
          <img class="list-img" :src="item.imgUrl" alt="" />
          <section class="list-content">
            <p class="title">{{ item.title }}</p>
            <p class="tips">{{ item.tips }}</p>
            <p class="time">{{ item.time }}</p>
          </section>
        </div>
        <div class="delete">删除</div>
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
    touchStart(event) {
      // touches：当前位于屏幕上的所有手指的一个列表
      // console.log(event.touches[0].clientX);
      console.log(event.currentTarget);
    },
    /*
     * 当手指从屏幕上离开时触发
     */
    touchEnd() {

    },
  }
};
</script>

<style scoped>
  @import './index.css';
</style>
