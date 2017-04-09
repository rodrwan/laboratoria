const expect = require('expect.js');
const rotateArr = require('../src/exercise_3/rotate_arr').rotateArr

describe('Exercise 3: rotate array.', function() {
  it('should return a rotated array.', () => {
    const arr = [1,2,3,4,5]
    const expectedValue = [3,4,5,1,2]
    const actualValue = rotateArr(arr, 2)

    expect(actualValue).to.eql(expectedValue)
  })
})
