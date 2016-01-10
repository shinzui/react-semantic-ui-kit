import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import { Rail } from '../../../src/index'

describe('<Rail />', () => {

  it('should have ui rail classes', () => {
    const wrapper = shallow(<Rail position='right'><p>Right rail</p></Rail>)
    expect(wrapper.find('div')).to.have.className('ui right rail')
  })

})
