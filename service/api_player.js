import redRequest from "./index";

// 获取歌曲的详细信息
export function getMusicDetail(ids) {
  return redRequest.get("/song/detail", { ids });
}
// 获取歌词
export function getMusicLyric(id) {
  return redRequest.get("/lyric", { id });
}
