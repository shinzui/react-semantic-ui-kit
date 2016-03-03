import React from 'react'

import { Segment, Icon, Grid, Column } from '../src/index'

const IconDemo = (props) => {
  const webIcons1 = [
    'at', 'browser', 'bug', 'calendar', {type: 'calendar', outline: true, key: 'calendarOutline'},
    'cloud', 'code', 'comments', {type: 'comments', outline: true, key: 'commentsOutline'},
    'comment', {type: 'comment', outline: true, key: 'commentOutline'},
    'copyright', 'dashboard', 'dropdown', 'external',
    {type: 'external', square: true, key: 'externalSquare'}, 
    'eyedropper', 'feed', 'find', 'heartbeat', 'history',
    'home', 'idea', 'inbox', 'lab', 'mail', 
    {type: 'mail', outline: true, key: 'mailOuline'}, {type: 'mail', square: true, key: 'mailSquare'},
    'map', 'options'
  ]
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
          {webIcons1.map( icon => {
            if(typeof icon === 'string') {
              return <Column key={icon}> <Icon type={icon} /> {icon.charAt(0).toUpperCase() + icon.slice(1)}</Column>
            } else {
              let suffix = ''
              if(icon.square) suffix =  ' square'
              if(icon.outline) suffix = suffix + ' outline'

              return <Column key={icon.key}><Icon type={icon.type} square={icon.square} outline={icon.outline}/>
                {icon.type.charAt(0).toUpperCase() + icon.type.slice(1) + suffix}
              </Column>
            }
          })}
        </Grid>
      </Segment>
    </div>
  )
}

export default IconDemo
