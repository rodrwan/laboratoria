const expect = require('expect.js')
const strToAsciiNum = require('../src/exercise_4/str_to_ascii_num').strToAsciiNum
const strToAsciiNum2 = require('../src/exercise_4/str_to_ascii_num').strToAsciiNum2

describe('Exercise 4: string to ascii number.', () => {
  describe('Method 1.', () => {
    it('should return an array with ascii num.', () => {
      const str = 'hello world'
      const expectedValue = [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
      const actualValue = strToAsciiNum(str)

      expect(actualValue).to.eql(expectedValue)
    })
  })

  describe('Method 2.', () => {
    it('should return an array with ascii num.', () => {
      const str = 'hello world'
      const expectedValue = [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
      const actualValue = strToAsciiNum2(str)

      expect(actualValue).to.eql(expectedValue)
    })
  })
})
