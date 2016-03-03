import React from 'react'

import { Segment, Icon, Grid, Column } from '../src/index'

const IconDemo = (props) => {
  return (
    <div className='iconExample'>
      <Segment>
        <h3>Web content</h3>
        <Grid columns={5}>
          <Column>
            <Icon type='alarm' /> Alarm
          </Column>
          <Column>
            <Icon type='alarm' outline/> Alarm outline
          </Column>
          <Column>
            <Icon type='alarm' slash/> Alarm slash
          </Column>
          <Column>
            <Icon type='alarm' slash outline/> Alarm outline
          </Column>
          <Column>
            <Icon type='at'/> At
          </Column>
        </Grid>
      </Segment>
    </div>
  )
}

export default IconDemo
