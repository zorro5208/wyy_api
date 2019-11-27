<template>
  <div class="login">
    <img class="userImg" src="../../../static/images/logo01.jpg" />
    <van-cell-group>
      <van-field
        custom-style="background: #47485a;color:#fff"
        input-class="inputs"
        v-model="phone"
        label="手机号"
        type="number"
        placeholder="请输入手机号"
        :error-message="tip1"
        @blur="checkPhone"
      />
      <van-field
        custom-style="background: #47485a;color:#fff"
        input-class="inputs"
        type="password"
        v-model="password"
        label="密码"
        placeholder="请输入密码"
        :error-message="tip2"
        @blur="checkPassword"
      />
    </van-cell-group>
    <van-button
      @click="Login"
      type="default"
      custom-style="margin-top:200rpx;padding:0px 200rpx;color:#333;font-size:30rpx;font-weight:bold"
    >登录</van-button>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import Toast from "../../../static/vant-weapp/toast/toast";
export default {
  data() {
    return {
      phone: "",
      password: "",
      tip1: "",
      tip2: ""
    };
  },
  components: {},

  methods: {
    // 手机号验证
    checkPhone(event) {
      if (event.target.value) {
        this.tip1 = "";
        if (/^[0-9]+$/.test(event.target.value)) {
          this.phone = event.target.value;
        } else {
          this.tip1 = "手机号格式错误";
        }
      } else {
        this.tip1 = "手机号不能为空";
      }
    },
    // 密码验证
    checkPassword(event) {
      if (event.target.value) {
        this.tip2 = "";
        this.password = event.target.value;
      } else {
        this.tip2 = "密码不能为空";
      }
    },
    // 登录
    Login() {
      if (this.phone == "") {
        Toast.fail("手机号不能为空");
      } else if (this.password == "") {
        Toast.fail("密码不能为空");
      } else if (this.phone && this.password) {
        this.$wxhttp
          .get({
            url: "/login/cellphone", //连接的网址
            data: {
              phone: this.phone,
              password: this.password
            } //需要的参数
          })
          .then(res => {
            // console.log(res);
            if (res.code == 200) {
              Toast.success("登录成功");
              setInterval(function() {
                wx.switchTab({
                  url: "/pages/findMusic/main"
                });
              }, 2000);
            } else if (res.code == 400) {
              Toast.fail("登录失败");
            } else {
              Toast.fail(res.msg);
            }
          });
      }
    }
  },
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
  .userImg {
    width: 200rpx;
    height: 200rpx;
    border-radius: 200rpx;
    margin: 100rpx 0;
  }
  .inputs {
    color: #fff !important;
  }
}
</style>
