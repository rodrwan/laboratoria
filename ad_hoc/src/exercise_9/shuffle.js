(function (exports) {
  'use strict'

  function shuffle (arr) {
    let len = arr.length
    while(len > 0) {
      const idx = Math.floor(Math.random() * len)
      len--
      const temp = arr[len]
      arr[len] = arr[idx]
      arr[idx] = temp
    }

    return arr
  }

  exports.shuffle = shuffle

})(typeof window === 'undefined' ? module.exports : window)
