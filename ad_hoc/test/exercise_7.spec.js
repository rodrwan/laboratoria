const expect = require('expect.js')
const isDuplicate = require('../src/exercise_7/is_duplicate').isDuplicate

describe('Exercise 7: is duplicate.', () => {
  it('should return true if repeated values.', () => {
    const arr = [1,2,3,3,,4,5]
    const expectedValue = true
    const actualValue = isDuplicate(arr)

    expect(actualValue).to.eql(expectedValue)
  })
})
