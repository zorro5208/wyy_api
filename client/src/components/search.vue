<template>
  <div class="search_tab">
    <span>
      <i class="iconfont icon-tinggeshiqu"></i>
    </span>
    <span class="search">搜索音乐、歌词、电台</span>
    <span>
      <i class="iconfont icon-yinle"></i>
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  }
};
</script>

<style lang="less" scoped>
.search_tab {
  width: 100%;
  height: 88rpx;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20rpx;
  box-sizing: border-box;
  .iconfont {
    font-size: 58rpx;
  }
  .search {
    display: inline-block;
    width: 80%;
    height: 64rpx;
    line-height: 64rpx;
    border-radius: 64rpx;
    font-size: 28rpx;
    text-align: center;
    background: #dadada;
  }
}
</style>
