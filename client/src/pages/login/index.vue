<template>
  <div class="login">
    <img class="userImg" src="../../../static/images/logo01.jpg" />
    <van-cell-group>
      <van-field custom-style="background: #47485a;color:#fff" v-model="phone" label="手机号" placeholder="请输入手机号" />
      <van-field custom-style="background: #47485a;color:#fff" v-model="password" label="密码" placeholder="请输入密码" />
    </van-cell-group>
    <van-button type="default">登录</van-button>
  </div>
</template>

<script>
import Toast from "../../../static/vant-weapp/toast/toast";
export default {
  data() {
    return {};
  },
  components: {},

  methods: {},

  created() {}
};
</script>

<style lang="less" >
page {
  background: #47485a;
}
.login {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .userImg{
    width: 200rpx;
    height: 200rpx;
    border-radius: 200rpx;
    margin: 100rpx 0;
  }
  .inputs{
    background: #47485a !important
  }
}
</style>
