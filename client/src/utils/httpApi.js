const host = "http://localhost:3000"; //线上环境
// 请求方法封装
function request(url, method, data, header = {}) {
  // 开启Loading
  wx.showLoading({
    title: "正在加载中...."
  });
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + url,
      method: method,
      data: data,
      // 请求头
      header: {
        "content-type": "application/json"
      },
      // 请求成功
      success: function(res) {
        wx.hideLoading();
        resolve(res.data);
      },
      // 请求失败
      fail: function(res) {
        wx.hideLoading();
        reject(res);
      },
      // 关闭Loading
      complete: function(res) {
        wx.hideLoading();
      }
    });
  });
}
//封装get方法
function get(obj) {
  return request(obj.url, "GET", obj.data);
}
//封装post方法
function post(obj) {
  return request(obj.url, "POST", obj.data);
}
export default {
  request,
  get,
  post
};
