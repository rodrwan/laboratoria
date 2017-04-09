const expect = require('expect.js')
const sumInterNum = require('../src/exercise_5/sum_inter_num').sumInterNum
const sumReduce = require('../src/exercise_5/sum_inter_num').sumReduce

describe('Exercise 5: sum iner numbers.', () => {
  describe('Method 1.', () => {
    it('should return the inter sum.', () => {
      const arr = [1,2,3,4,5]
      const expectedValue = [9, 6]
      const actualValue = sumInterNum(arr)

      expect(actualValue).to.eql(expectedValue)
    })
  })

  describe('Method 2.', () => {
    it('should return the inter sum.', () => {
      const arr = [1,2,3,4,5]
      const expectedValue = [9, 6]
      const actualValue = sumReduce(arr)

      expect(actualValue).to.eql(expectedValue)
    })
  })
})
