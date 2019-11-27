<template>
  <div class="index">
    <search></search>
    <div class="main">
      <van-tabs :active="active" @change="onChange" tab-active-class="active">
        <van-tab title="个人推荐">
          <!-- 轮播图 -->
          <div class="banner">
            <swiper autoplay="true" interval="3000">
              <swiper-item>
                <img src="../../../static/images/banner/banner1.jpg" alt />
              </swiper-item>
              <swiper-item>
                <img src="../../../static/images/banner/banner2.jpg" alt />
              </swiper-item>
              <swiper-item>
                <img src="../../../static/images/banner/banner3.jpg" alt />
              </swiper-item>
              <swiper-item>
                <img src="../../../static/images/banner/banner4.jpg" alt />
              </swiper-item>
              <swiper-item>
                <img src="../../../static/images/banner/banner5.jpg" alt />
              </swiper-item>
            </swiper>
          </div>
          <!-- 菜单宫格 -->
          <div class="grid">
            <van-grid clickable column-num="3">
              <van-grid-item use-slot link-type="switchTab" url="/pages/my/main">
                <i class="iconfont icon-fm"></i>
                <span>私人FM</span>
              </van-grid-item>
              <van-grid-item use-slot link-type="switchTab" url="/pages/my/main">
                <i class="iconfont icon-xingzhuang"></i>
                <span>每日推荐</span>
              </van-grid-item>
              <van-grid-item use-slot link-type="switchTab" url="/pages/my/main">
                <i class="iconfont icon-yinle-yinfu"></i>
                <span>热歌榜</span>
              </van-grid-item>
            </van-grid>
          </div>
          <!-- 推荐歌单 -->
          <div class="recommend">
            <songBox></songBox>
          </div>
        </van-tab>
        <van-tab title="歌单">内容 2</van-tab>
        <van-tab title="主播电台">内容 3</van-tab>
        <van-tab title="排行榜">内容 4</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import search from "../../components/search";
import songBox from "../../components/songBox";
export default {
  data() {
    return {
      active: 1,
      bannerList: []
    };
  },

  components: {
    search,
    songBox
  },

  methods: {
    getData() {
      this.$wxhttp
        .get({
          url: "/personalized/newsong", //连接的网址
          data: {} //需要的参数
        })
        .then(res => {
          console.log(res);
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style lang="less">
.main {
  width: 100%;
  height: auto;
  .banner swiper {
    width: 100%;
    height: 300rpx;
  }
  .banner swiper img {
    width: 100%;
    height: 300rpx;
  }
  .grid {
    width: 100%;
    height: auto;
    i {
      padding: 26rpx;
      margin-bottom: 16rpx;
    }
    .iconfont {
      font-size: 60rpx;
      background-color: #eee;
      border-radius: 50%;
      color: #999999;
    }
    span {
      font-size: 24rpx;
      color: #999999;
    }
  }
  .recommend {
    width: 100%;
    height: auto;
    padding: 20rpx;
    box-sizing: border-box;
  }
}
</style>
