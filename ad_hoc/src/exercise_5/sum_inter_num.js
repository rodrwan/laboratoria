(function (exports) {
  'use strict'

  function sumInterNum (arr) {
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i < arr.length; i++) {
      // even
      if (i%2 === 0) {
        sum1 += arr[i]
      } else { // odd
        sum2 += arr[i]
      }
    }

    return [sum1, sum2]
  }

  function sumReduce (arr) {
    return arr.reduce((acc, value, idx) => {
      if (idx%2===0) {
        acc[0] += value
      } else {
        acc[1] += value
      }

      return acc
    }, [0,0])
  }

  exports.sumInterNum= sumInterNum
  exports.sumReduce= sumReduce

})(typeof window === 'undefined' ? module.exports : window)
