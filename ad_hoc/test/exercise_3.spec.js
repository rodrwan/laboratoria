const expect = require('expect.js')
const rotateArr = require('../src/exercise_3/rotate_arr').rotateArr
const rotate = require('../src/exercise_3/rotate_arr').rotate

describe('Exercise 3: rotate array.', () => {
  describe('Method 1', () => {
    it('should return a rotated array.', () => {
      const arr = [1,2,3,4,5]
      const expectedValue = [3,4,5,1,2]
      const actualValue = rotateArr(arr, 2)

      expect(actualValue).to.eql(expectedValue)
    })
  })

  describe('Method 2', () => {
    it('should return a rotated array.', () => {
      const arr = [1,2,3,4,5]
      const expectedValue = [3,4,5,1,2]
      const actualValue = rotate(arr, 2)

      expect(actualValue).to.eql(expectedValue)
    })
  })
})
