(function (exports) {
  'use strict'

  function uniqueValues (arr) {
    const response = []
    arr.forEach((value) => {
      if (response.indexOf(value) === -1) {
        response.push(value)
      }
    })

    return response
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  function uniqueValues2 (arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index)
  }

  exports.uniqueValues = uniqueValues
  exports.uniqueValues2 = uniqueValues2

})(typeof window === 'undefined' ? module.exports : window)
