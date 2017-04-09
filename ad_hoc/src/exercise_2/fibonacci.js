(function (exports) {
  'use strict'

  function fibonacci (nums) {
    let i = 0
    let init1 = 0
    let init2 = 1
    let sum = 0
    const response = []

    while (nums > i) {
      response.push(sum)
      sum = init1 + init2
      init2 = init1
      init1 = sum
      i++
    }

    return response
  }

  exports.fibonacci = fibonacci

})(typeof window === 'undefined' ? module.exports : window)
