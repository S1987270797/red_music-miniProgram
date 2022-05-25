import redRequest from "./index";

// 获取搜索框的placeholder
export function getSearchDefaultWord() {
  return redRequest.get("/search/default");
}
// 获取热门搜索
export function getSearchHotWords() {
  return redRequest.get("/search/hot");
}
// 搜索联想
export function getSearchSuggest(keywords) {
  return redRequest.get("/search/suggest", {
    keywords,
    type: "mobile",
  });
}
// 搜索歌曲
export function getSearchSongs(keywords) {
  return redRequest.get("/search", { keywords });
}
