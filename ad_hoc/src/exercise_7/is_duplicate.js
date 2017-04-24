(function (exports) {
  'use strict'

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

  function isDuplicate2 (arr) {
    arr = arr.sort((a,b) => a-b)
    for (let i = 0; i < arr.length-1; i++) {
      if (arr[i] === arr[i+1]) return true
    }

    return false
  }

  function isDuplicate3 (arr) {
    const numbers = {}
    for (let i = 0; i < arr.length; i++) {
      if (numbers.hasOwnProperty(arr[i])) {
        return true
      }
      numbers[arr[i]] = true
    }

    return false
  }

  function isDuplicate4 (arr) {
    for (let i = 0; i < arr.length; i++){
      for (let j = 0; j < i; j++){
        if (arr[j] == arr[i]) {
          return true
        }
      }
    }
    return false
  }

  function checkDuplicate(arrin){
    var arrfin = new Set(arrin);
    return (arrin.length !== (Array.from(arrfin)).length);
  }

  exports.isDuplicate = isDuplicate
  exports.isDuplicate2 = isDuplicate2
  exports.isDuplicate3 = isDuplicate3
  exports.isDuplicate4 = isDuplicate4
  exports.checkDuplicate = checkDuplicate

})(typeof window === 'undefined' ? module.exports : window)
