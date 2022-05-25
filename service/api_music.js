import redRequest from "./index";

// 获取轮播图的请求
export function getBanner() {
  return redRequest.get("/banner", { type: 2 });
}

// 获取歌曲榜单数据
export function getRankings() {
  return redRequest.get("/toplist");
}

// 获取热门歌单
export function getPlaylist(cat = "全部", limit = 6) {
  return redRequest.get("/top/playlist", { cat, limit });
}

// 获取歌单详情(id, 创建者， 简介， 10首音乐)
export function getPlaylistDetail(id) {
  return redRequest.get("/playlist/detail", { id });
}

// 获取歌单歌曲
export function getPlaylistTrack(id, limit, offset) {
  return redRequest.get("/playlist/track/all", { id, limit, offset });
}

// 获取歌单所有歌曲
export function getPlaylistAllTracks(id) {
  return redRequest.get("/playlist/track/all", { id });
}
