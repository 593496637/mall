// 防抖
export const debounce = (fn, detaly) => {
  let timer = null;
  return (...args) => {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, detaly);
  };
}
