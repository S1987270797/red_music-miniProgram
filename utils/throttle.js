// 回调函数 间隔时间 options{第一次是否立即触发, 最后一次点击后又点击了1次,后面点击这次是否到时间后给他触发}
/**
 *
 * @param {Function} fn
 * @param {Number} interval
 */
export function throttle(
  fn,
  interval,
  options = { leading: false, trailing: true, resultCallback: null }
) {
  const { leading, trailing, resultCallback } = options;
  let lastTime = 0;
  let timer = null;

  const _throttle = function (...args) {
    // args既能作为绑定Event事件对象，也能作为传入（fn）函数需要的参数。
    return new Promise((resolve, reject) => {
      // 获取当前时间
      const nowTime = new Date().getTime();
      // 用户不需要第一次立刻执. lastTime === 0就是用户第一次触发。
      if (leading === false && lastTime === 0) lastTime = nowTime;
      // 剩余时间结束 用户再次触发事件 就需要执行一次函数
      const remainTime = interval - (nowTime - lastTime);
      if (remainTime <= 0) {
        // 到点执行过了，就不必再执行没到点 添加到定时器执行的函数
        if (timer) clearTimeout(timer);
        const result = fn.apply(this, args);
        if (resultCallback) resultCallback(result);
        resolve(result);
        // 保留上次触发时间
        lastTime = nowTime;
        // 执行完直接退出整个函数，不会再去下面添加定时器
        return;
      }

      // 用户需要执行最后一次. 这个timer为空.
      if (trailing && !timer) {
        timer = setTimeout(() => {
          // 设为null才能开启下一个定时器
          timer = null;
          // 设为0那么就会判断为第一次点击. leading ? 立即触发执行一次回调函数 : 进入trailing的判断，开启定时器执行。
          // 设为当前时间那么就会进入正常计时. leading ? 正常工作 ： 除了第一次，后面每次首次点击都会触发
          // lastTime = !leading ? 0 : new Date().getTime();
          // lastTime = leading ? new Date().getTime() : 0;
          lastTime = new Date().getTime();
          const result = fn.apply(this, args);
          if (resultCallback) resultCallback(result);
          resolve(result);
        }, remainTime);
      }
    });
  };

  return _throttle;
}

/* interval为1000ms
使用这句 lastTime = 0m，情况下;
0ms   第一次点击 立即执行一次被回调的函数   √
134ms 第二次点击 开启定时器setTimeout(fn, 866ms);
....  这里被节流函数拦截
1000ms 分毫不差 此时已经有了定时器, 定时器执行, 执行回调函数, 将timerOfTrailing置为null, lastTime = 0;   √
1178ms 第n次点击 根据remainTime判断,此时lastTime为0,必会进入判断执行一次回调函数.   √
1297ms 第n+1次点击 开启定时器setTimeout(fn, 881ms);
....  这里被节流函数拦截
重复...
*/
