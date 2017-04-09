(function (exports) {
  'use strict';

  function uniqueValues (arr) {
    const response = []
    arr.forEach((value) => {
      if (response.indexOf(value) === -1) {
        response.push(value)
      }
    })

    return response
  }

  exports.uniqueValues = uniqueValues;

})(typeof window === 'undefined' ? module.exports : window);
