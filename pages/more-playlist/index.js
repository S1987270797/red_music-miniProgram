// pages/more-playlist/index.js
import { getPlaylist } from "../../service/api_music";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: "",
    playlists: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let playlistType = options.id.slice(0, 2); // 取出歌单类型 '华语' '欧美'
    if (playlistType === "热门") playlistType = "";
    // 请求51条数据
    getPlaylist(playlistType, 51).then((res) => {
      this.setData({
        title: options.id, // 储存title, 作为这页的title
        playlists: res.playlists,
      });
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
