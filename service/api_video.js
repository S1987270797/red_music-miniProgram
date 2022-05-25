import redRequest from "./index";

/** 获取mv信息数组
 * @param {number} offset
 * @param {number} limit
 */
export function getTopMv(offset, limit = 20) {
  return redRequest.get("/top/mv", { offset, limit });
}

// 1.从歌曲进入
/** 获取mv播放地址
 *
 * @param {numer} id mv的id
 */
export function getMvUrl(id) {
  return redRequest.get("/mv/url", { id });
}

/** 获取mv的信息
 *
 * @param {number} mvid
 */
export function getMvDefail(mvid) {
  return redRequest.get("/mv/detail", { mvid });
}

/**获取类似的mv
 *
 * @param {number} id 视频的id
 */
export function getMvRelated(id) {
  return redRequest.get("/related/allvideo", { id });
}

// 2.从推荐mv进入 （32位id）
/**获取视频播放地址
 *
 * @param {} id
 */
export function getVideoUrl(id) {
  return redRequest.get("/video/url", { id });
}
/** 获取视频的信息
 *
 * @param {number} mvid
 */
export function getVideoDefail(id) {
  return redRequest.get("/video/detail", { id });
}
