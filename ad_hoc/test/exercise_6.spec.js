const expect = require('expect.js');
const funnyString = require('../src/exercise_6/funny_string').funnyString

describe('Exercise 6: Funny String.', function() {
  it('should return a formatted string.', () => {
    const str = 'Hello, Laboratoria'
    const expectedValue = 'HeLlO, LaBoRaToRiA'
    const actualValue = funnyString(str)

    expect(actualValue).to.eql(expectedValue)
  })
})
