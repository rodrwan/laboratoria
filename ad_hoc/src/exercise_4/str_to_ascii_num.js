(function (exports) {
  'use strict'

  function strToAsciiNum (str) {
    const response = []
    for (let i = 0; i < str.length; i++) {
      response.push(str[i].charCodeAt())
    }
    return response
  }

  function strToAsciiNum2 (str) {
    var arr = str.split('')
    return arr.map((c) => c.charCodeAt())
  }


  exports.strToAsciiNum = strToAsciiNum
  exports.strToAsciiNum2 = strToAsciiNum2

})(typeof window === 'undefined' ? module.exports : window)
