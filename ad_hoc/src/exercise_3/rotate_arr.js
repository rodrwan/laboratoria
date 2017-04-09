(function (exports) {
  'use strict'

  function rotate(arr, rot) {
    for (let i = 0; i < arr.length-rot; i++) {
      arr.unshift(arr.pop())
    }
    return arr
  }

  function rotateArr (arr, rot) {
    const arr1 = arr.slice(0, rot)
    arr = arr.splice(rot, arr.length-1)
    return arr.concat(arr1)
  }

  exports.rotateArr = rotateArr
  exports.rotate = rotate

})(typeof window === 'undefined' ? module.exports : window)
