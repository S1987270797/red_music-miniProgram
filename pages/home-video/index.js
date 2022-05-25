// pages/home-video/index.js
import { getTopMv } from "../../service/api_video";
import { playerStore } from "../../store/player-store";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    topMvs: [],
    hasMore: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    const res = await getTopMv(0);
    this.setData({ topMvs: res.data });
    // 获取播放地址
  },

  handleVideoItemClick: function (event) {
    const id = event.currentTarget.dataset.item.id;
    wx.navigateTo({
      url: `/pages/detail-video/index?id=${id}`,
    });
    // 查看是否正在播放歌曲
    if (playerStore.state.songPlayState) {
      playerStore.dispatch("changePlayStateAction");
    }
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
  onPullDownRefresh: async function () {
    const res = await getTopMv(0);
    this.setData({ topMvs: res.data });
    wx.stopPullDownRefresh(); // 加载完成取消动画
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: async function () {
    if (!this.data.hasMore) {
      wx.showToast({
        title: "没有更多了~",
      });
      return; // 服务器没有新数据就直接return
    }
    const res = await getTopMv(this.data.topMvs.length); // 从结束的地方开开始请求10条
    this.setData({ topMvs: this.data.topMvs.concat(res.data) }); // 拼接上
    this.setData({ hasMore: res.hasMore });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
