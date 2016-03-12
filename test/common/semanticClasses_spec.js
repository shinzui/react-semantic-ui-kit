import { expect } from 'chai'

import { deviceWidthClasses, reversedDevicesClasses } from '../../src/common/semanticClasses'

describe('deviceWidthClasses ', () => {

  it('should return the specific device width classes', () => {
    const expectedWidth = 'ten wide mobile five wide tablet two wide computer'
    expect(deviceWidthClasses({mobileWidth: 10, tabletWidth: 5, computerWidth: 2})).to.eq(expectedWidth)
  })

  it('should support only one device', () => {
    const expectedWidth = 'two wide computer'
    expect(deviceWidthClasses({computerWidth: 2})).to.eq(expectedWidth)
  })

  it('should not break with missing props', () => {
    expect(deviceWidthClasses({})).to.eq(undefined)
  })
})

describe('reversedDeviceWidthClasses', () => {

  it('should return the reversed devices classes', () => {
    const expectedClasses = 'mobile reversed tablet reversed'
    expect(reversedDevicesClasses({reversedDevices: ['mobile', 'tablet']})).to.eq(expectedClasses)
  })

  it('should not break with missing props', () => {
    expect(deviceWidthClasses({})).to.eq(undefined)
  })

})
