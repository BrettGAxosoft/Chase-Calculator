function delay(ms, fn, fnMethod, params) {
  return new Promise((resolve, reject) => {
    try {
      var ret = fn[fnMethod](...params);
      setTimeout(function() {
        resolve(ret);
      }, ms);
    }
    catch(err) {
      reject;
    }
  });
}

module.exports = delay;
