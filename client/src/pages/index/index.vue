<template>
  <div class="index">
    <img class="userImg" src="../../../static/images/logo.jpg" />
    <p class="title">网易云音乐</p>
    <button class="btn" v-show="!isShow" @click="toLogin">登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  components: {
  },

  methods: {
    toLogin(){
      wx.reLaunch({
        url:'/pages/login/main'
      })
    },
  },
  
  created() {
    
  }
};
</script>

<style lang="less" >
page {
  background: #dc0000;
}
.index {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .userImg{
    width: 200rpx;
    height: 200rpx;
    border-radius: 200rpx;
    margin: 100rpx 0;
  }
  .title{
    font-size: 60rpx;
    color: #E4E5E5;
    margin-bottom: 350rpx;
  }
  
}
</style>
