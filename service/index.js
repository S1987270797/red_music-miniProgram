const BASE_URL = "http://47.100.219.250:8005";
const LOGIN_BASE_URL = "http://123.207.32.32:3000";

// 记录当前请求发送数量，全部成功就隐藏loading
let loadingCount = 0;

class REDRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  request(url, methods, params, header = {}) {
    // 没有已经在显示的loading就显示loading（不重复显示）
    if (loadingCount === 0) {
      wx.showLoading({
        title: "正在加载 . . .",
      });
      wx.showNavigationBarLoading();
    }
    loadingCount++;
    // 发送请求
    return new Promise((resolve, reject) => {
      wx.request({
        url: this.baseUrl + url,
        method: methods,
        data: params,
        header: header,
        success: function (res) {
          // 请求全部成功关闭loading
          if (--loadingCount <= 0) {
            wx.hideLoading();
            wx.hideNavigationBarLoading();
          }
          resolve(res.data);
        },
        fail: reject,
      });
    });
  }
  get(url, params, header) {
    return this.request(url, "GET", params, header);
  }
  post(url, data, header) {
    return this.request(url, "POST", data, header);
  }
}

const redRequest = new REDRequest(BASE_URL);
const loginRequest = new REDRequest(LOGIN_BASE_URL);

export default redRequest;
export { loginRequest };
