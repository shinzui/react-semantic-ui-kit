import React from 'react'

import { Segment, Checkbox } from '../src/index'

const CheckboxDemo = (props) => {

  return (
    <div>
      <Segment>
        <Checkbox name='checkbox' label='I agree to the terms' />
      </Segment>

      <Segment floated='left' compact>
        <Checkbox name='checkbox' fitted label=' '/>
      </Segment>
    </div>
  )
}

export default CheckboxDemo
