(function (exports) {
  'use strict'

  function isAnagram (s, t) {
    if (s.length !== t.length) {
      return false
    }
    const str1 = s.split('').sort()
    const str2 = t.split('').sort()

    for (let i = 0; i < s.length; i++) {
      if (str1[i] !== str2[i]) {
        return false
      }
    }
    return true
  }

  function isAnagram2 (s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('')
  }

  exports.isAnagram = isAnagram
  exports.isAnagram2 = isAnagram2

})(typeof window === 'undefined' ? module.exports : window)
