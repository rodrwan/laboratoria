const expect = require('expect.js');
const isAnagram = require('../src/exercise_1/is_anagrama').isAnagram

describe('Exercise 1: isAnagram', function() {
  it('should return true when T is an anagram of S.', () => {
    const s = 'anagram'
    const t = 'nagaram'
    const expectedValue = true
    const actualValue = isAnagram(s,t)

    expect(actualValue).to.be(expectedValue)
  })
})
