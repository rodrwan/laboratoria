const expect = require('expect.js')
const { isDuplicate, isDuplicate2, isDuplicate3, isDuplicate4 } = require('../src/exercise_7/is_duplicate')

describe('Exercise 7: is duplicate.', () => {
  describe('Method 1', () => {
    it('should return true if repeated values.', () => {
      const arr = [1,2,3,3,,4,5]
      const expectedValue = true
      console.time('isDuplicate version 1')
      const actualValue = isDuplicate(arr)
      console.timeEnd('isDuplicate version 1')
      expect(actualValue).to.eql(expectedValue)
    })
  })
  describe('Method 2', () => {
    it('should return true if repeated values.', () => {
      const arr = [1,2,3,3,,4,5]
      const expectedValue = true
      console.time('isDuplicate version 2')
      const actualValue = isDuplicate2(arr)
      console.timeEnd('isDuplicate version 2')
      expect(actualValue).to.eql(expectedValue)
    })
  })
  describe('Method 3', () => {
    it('should return true if repeated values.', () => {
      const arr = [1,2,3,3,,4,5]
      const expectedValue = true
      console.time('isDuplicate version 3')
      const actualValue = isDuplicate3(arr)
      console.timeEnd('isDuplicate version 3')
      expect(actualValue).to.eql(expectedValue)
    })
  })
  describe('Method 4', () => {
    it('should return true if repeated values.', () => {
      const arr = [1,2,3,3,,4,5]
      const expectedValue = true
      console.time('isDuplicate version 4')
      const actualValue = isDuplicate4(arr)
      console.timeEnd('isDuplicate version 4')
      expect(actualValue).to.eql(expectedValue)
    })
  })
})
