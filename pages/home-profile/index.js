// pages/home-profile/index.js
import { getUserInfo } from "../../service/api_login";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    icons: [
      {
        icon: "wechat",
        title: "敬请期待",
      },
      {
        icon: "html_5",
        title: "敬请期待",
      },
      {
        icon: "css_3",
        title: "敬请期待",
      },
      {
        icon: "js",
        title: "敬请期待",
      },
      {
        icon: "edge",
        title: "敬请期待",
      },
      {
        icon: "google",
        title: "敬请期待",
      },
      {
        icon: "react",
        title: "敬请期待",
      },
      {
        icon: "vue",
        title: "敬请期待",
      },
      {
        icon: "npm",
        title: "敬请期待",
      },
      {
        icon: "github",
        title: "敬请期待",
      },
      {
        icon: "git",
        title: "敬请期待",
      },
      {
        icon: "node_js",
        title: "敬请期待",
      },
    ],
    isLogin: false,
    userInfo: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},
  onAvatarClick: function (event) {
    console.log(event);
    getUserInfo().then((res) => {
      this.setData({ isLogin: true, userInfo: res.userInfo });
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
