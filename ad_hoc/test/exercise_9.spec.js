const expect = require('expect.js')
const sinon = require('sinon')
const shuffle = require('../src/exercise_9/shuffle').shuffle

describe('Exercise 9: shuffle.', () => {
  it('should return a shuffled array.', () => {
    const arr = [1,2,3,4,5]
    const expectedValue = [2,3,5,1,4]
    sinon.stub(Math, 'floor').returns(3)
    const actualValue = shuffle(arr)

    expect(actualValue).to.eql(expectedValue)
  })
})
