(function (exports) {
  'use strict'

  function funnyWord (word) {
    let letters = word.split('')
    for (let i = 0; i < letters.length; i++) {
      const dec = letters[i].charCodeAt()
      if (i%2 !== 0) {
        if (dec >= 65 && dec <= 90) {
          letters[i] = letters[i].toLowerCase()
        }
      } else if (i%2 === 0) {
        if (dec >= 97 && dec <= 122) {
          letters[i] = letters[i].toUpperCase()
        }
      }
    }
    return letters.join('')
  }

  function funnyString (str) {
    let arr = str.split(' ')
    return arr.map((word) => {
      return funnyWord(word)
    }).join(' ')
  }

  exports.funnyWord = funnyWord
  exports.funnyString = funnyString

})(typeof window === 'undefined' ? module.exports : window)
