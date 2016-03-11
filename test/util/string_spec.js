import { expect } from 'chai'

import { splitAndLowerCamelCase } from '../../src/util/string'


describe('splitAndLowerCamelCase', () => {

  it('should split a camel case word and lower case it', () => {
    expect(splitAndLowerCamelCase('fullScreen')).to.eq('full screen')
  })

  it('should support more than two words', () => {
    expect(splitAndLowerCamelCase('fullScreenComputer')).to.eq('full screen computer')
  })

  it('should not break with empty strings', () => {
    expect(splitAndLowerCamelCase(' ')).to.eq('')
  })

  it('should not change non camelcased words', () => {
    expect(splitAndLowerCamelCase('mobile')).to.eq('mobile')
  })

})
