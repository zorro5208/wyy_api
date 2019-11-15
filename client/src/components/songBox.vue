<template>
  <div class="song">
    <p class="title">推荐歌单></p>
    <div class="box">
      <ul>
        <li>
          <img src="../../static/images/gedan.jpg" alt />
          <p class="text">华语/百首写给前任的歌，让你百感...</p>
        </li>
        <li>
          <img src="../../static/images/gedan.jpg" alt />
          <p class="text">华语/百首写给前任的歌，让你百感...</p>
        </li>
        <li>
          <img src="../../static/images/gedan.jpg" alt />
          <p class="text">华语/百首写给前任的歌，让你百感...</p>
        </li>
        <li>
          <img src="../../static/images/gedan.jpg" alt />
          <p class="text">华语/百首写给前任的歌，让你百感...</p>
        </li>
        <li>
          <img src="../../static/images/gedan.jpg" alt />
          <p class="text">华语/百首写给前任的歌，让你百感...</p>
        </li>
        <li>
          <img src="../../static/images/gedan.jpg" alt />
          <p class="text">华语/百首写给前任的歌，让你百感...</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$wxhttp
      .get({
        url: "/recommend/resource", //连接的网址
        data: {} //需要的参数
      })
      .then(res => {
        console.log(res);
      });
  }
};
</script>

<style lang="less" scoped>
.song {
  width: 100%;
  height: auto;
  .title {
    padding-bottom: 24rpx;
    font-size: 30rpx;
  }
  .box ul{
    width: 100%;
    height: auto;
    column-count: 3;
    column-gap: 10rpx;
    li{
      width: 100%;
      height: 100%;
      margin-bottom: 20rpx;
      img{
        width:100%;
        height: 230rpx;
        border-radius: 10rpx
      }
      .text{
        font-size: 22rpx;
        line-height: 32rpx;
      }
    }
  }
}
</style>
