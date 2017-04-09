(function (exports) {
  'use strict';

  function isDuplicate (arr) {
    const numbers = {}

    for (let i = 0; i < arr.length; i++) {
      if (numbers.hasOwnProperty(arr[i])) {
        numbers[arr[i]] = !numbers[arr[i]]
      } else {
        numbers[arr[i]] = true
      }
    }

    for (let num in numbers) {
      if (!numbers[num]) {
        return true
      }
    }

    return false
  }

  exports.isDuplicate = isDuplicate;

})(typeof window === 'undefined' ? module.exports : window);
