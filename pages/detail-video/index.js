// pages/detail-video/index.js
import {
  getMvUrl,
  getMvDefail,
  getMvRelated,
  getVideoUrl,
  getVideoDefail,
} from "../../service/api_video";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    mvUrl: {},
    mvDetail: {},
    mvRelated: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1.拿到视频的id
    console.log(options);
    const id = options.id;
    // 2.发送网络请求
    this.getPageData(id);
    // 3.其他逻辑
  },
  /**
   * 发送网络请求的代码
   */
  getPageData: function (id) {
    // 推荐视频 只有vid, vid是32位的
    if (id.length === 32) {
      // 视频播放地址
      getVideoUrl(id).then((res) => this.setData({ mvUrl: res.urls[0] }));
      // 获取mv的信息
      getVideoDefail(id).then((res) => this.setData({ mvDetail: res.data }));
    } else {
      // 获取mv的播放地址
      getMvUrl(id).then((res) => this.setData({ mvUrl: res.data }));
      // 获取mv的信息
      getMvDefail(id).then((res) => this.setData({ mvDetail: res.data }));
    }
    // 获取相关mv
    getMvRelated(id).then((res) => this.setData({ mvRelated: res.data }));
  },

  // 点击推荐mv跳转到播放页
  mvItemClick: function (event) {
    const vid = event.currentTarget.dataset.vid;
    wx.navigateTo({
      url: `/pages/detail-video/index?id=${vid}`,
    });
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
