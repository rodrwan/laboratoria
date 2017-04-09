const expect = require('expect.js')
const funnyString = require('../src/exercise_6/funny_string').funnyString
const funnyWord = require('../src/exercise_6/funny_string').funnyWord

describe('Exercise 6: Funny String.', () => {
  describe('Funny Word.', () => {
    it('should return a formatted word.', () => {
      const str = 'Hello'
      const expectedValue = 'HeLlO'
      const actualValue = funnyWord(str)

      expect(actualValue).to.eql(expectedValue)
    })
  })
  describe('Funny String.', () => {
    it('should return a formatted string.', () => {
      const str = 'Hello, Laboratoria'
      const expectedValue = 'HeLlO, LaBoRaToRiA'
      const actualValue = funnyString(str)

      expect(actualValue).to.eql(expectedValue)
    })
  })
})
