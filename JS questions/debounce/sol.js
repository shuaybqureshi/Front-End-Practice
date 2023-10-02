function debounce(func, wait=0) {
  let timeoutID = null;
  return function (...args) {
    const context = this;
    clearTimeout(timeoutID);
    timeoutID = setTimeout(function () {
      func.apply(context, args);
    }, wait);
  };
  }