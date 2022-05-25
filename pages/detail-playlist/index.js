// pages/detail-playlist/index.js
import {
  getPlaylistDetail,
  getPlaylistTrack,
  getPlaylistAllTracks,
} from "../../service/api_music";
import { playerStore } from "../../store/player-store";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    playlistId: 0,
    playlist: null, // 这个歌单的信息
    playlistTracks: [], // 歌单包含的歌曲,需要遍历<song-item-v2>进行渲染
    isShowMoreAction: false,
    moreActions: [
      {
        name: "选项1",
      },
      {
        name: "选项2",
      },
      {
        name: "选项3",
        subname: "描述信息",
        openType: "share",
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const playlistId = options.id;
    this.setData({ playlistId: playlistId });

    // 发送请求 请求歌单数据
    getPlaylistDetail(playlistId).then((res) => {
      // 储存这个歌单的数据
      this.setData({
        playlist: res.playlist,
      });
    });
    // 请求歌单所有歌曲
    getPlaylistAllTracks(playlistId).then((res) => {
      this.setData({
        playlistTracks: res.songs,
      });
    });
  },
  // 点击 ...
  onMoreActionBtnClick(ar1, ar2) {
    this.setData({ isShowMoreAction: true });
  },
  // 更多选项面板关闭
  onMoreActionClose() {
    this.setData({ isShowMoreAction: false });
  },
  // 选项被点击
  onMoreActionSelect(event) {
    console.log(event.detail);
  },
  // 改变当前播放列表
  changeCurrentPlaylist: function () {
    // 歌单相同不要改变
    if (playerStore.state.currentPlaylist.id !== this.data.playlist) {
      console.log("changeCurrentPlayList do");
      playerStore.dispatch("changeCurrentPlayList", {
        playlist: this.data.playlist,
        playlistTracks: this.data.playlistTracks,
      });
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
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: async function () {
    // 1.加载更多歌曲
    // let offset = this.data.playlistTracks.length;
    // const res = await getPlaylistAllTracks(this.data.playlistId, 100, offset);
    // this.setData({
    //   playlistTracks: this.data.playlistTracks.concat(res.songs),
    // });
    // 2.更新store里面 当前播放歌单的歌曲
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
