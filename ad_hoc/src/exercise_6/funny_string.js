(function (exports) {
  'use strict';

  function funnyWord (word) {
    let letter = word.split('')
    for (let i = 0; i < letter.length; i++) {
      const dec = letter[i].charCodeAt()
      if (i%2 !== 0) {
        if (dec >= 65 && dec <= 90) {
          letter[i] = letter[i].toLowerCase()
        }
      } else if (i%2 === 0) {
        if (dec >= 97 && dec <= 122) {
          letter[i] = letter[i].toUpperCase()
        }
      }
    }
    return letter.join('')
  }

  function funnyString (str) {
    let arr = str.split(' ')
    return arr.map((word) => {
      return funnyWord(word)
    }).join(' ')
  }

  exports.funnyString = funnyString;

})(typeof window === 'undefined' ? module.exports : window);
