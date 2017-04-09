const expect = require('expect.js')
const isAnagram = require('../src/exercise_1/is_anagrama').isAnagram
const isAnagram2 = require('../src/exercise_1/is_anagrama').isAnagram2

describe('Exercise 1: isAnagram', () => {
  describe('Method 1.', () => {
    it('should return true when T is an anagram of S.', () => {
      const s = 'anagram'
      const t = 'nagaram'
      const expectedValue = true
      const actualValue = isAnagram(s,t)

      expect(actualValue).to.be(expectedValue)
    })
  })

  describe('Method 2.', () => {
    it('should return true when T is an anagram of S.', () => {
      const s = 'anagram'
      const t = 'nagaram'
      const expectedValue = true
      const actualValue = isAnagram2(s,t)

      expect(actualValue).to.be(expectedValue)
    })
  })
})
