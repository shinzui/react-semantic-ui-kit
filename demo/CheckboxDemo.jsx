import React from 'react'

import { Segment, Checkbox } from '../src/index'

const CheckboxDemo = (props) => {

  return (
    <div>
      <Segment>
        <Checkbox name='checkbox' label='I agree to the terms' />
      </Segment>

      <Segment clearing>
        <Segment floated='left' compact>
          <Checkbox name='checkbox' fitted label=' '/>
        </Segment>
      </Segment>

      <Segment>
        <h3>Radio</h3>

        <Checkbox radio name='radio' label='Radio choice' />
      </Segment>

    </div>
  )
}

export default CheckboxDemo
