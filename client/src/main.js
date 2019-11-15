import Vue from "vue";
import App from "./App";
import HttpApi from "./utils/httpApi"; //引入
Vue.prototype.$wxhttp = HttpApi; //作为全局变量

Vue.config.productionTip = false;
App.mpType = "app";

const app = new Vue(App);
app.$mount();
