import React from 'react'

import { Segment, Checkbox } from '../src/index'

const CheckboxDemo = (props) => {

  return (
    <div>
      <Segment>
        <Checkbox name='checkbox' label='I agree to the terms' />
      </Segment>
    </div>
  )
}

export default CheckboxDemo
