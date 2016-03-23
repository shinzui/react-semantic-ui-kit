import React from 'react'

import { Segment, Icon, Grid, Column } from '../src/index'
import { splitAndLowerCamelCase } from '../src/util/string'

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
    'map', 'options', 'paintBrush', 'payment', 'phone', {type: 'phone', square: true, key: 'phoneSquare'},
    'privacy', 'protect', 'search', 'setting', 'settings', 'shop', 'sidebar', 'signal', 'sitemap', 'tag',
    'tags', 'tasks', 'terminal', 'textTelephone', 'ticket', 'trophy', 'wifi'
  ]

  const userIcons = [ 'adjust', 'addUser', 'addToCart', 'archive', 'ban',
    'bookmark', 'call',{type: 'call', square: true, key: 'callSquare'}, 'cloudDownload', 'cloudUpload',
    'compress', 'configure', 'download', 'edit', 'erase', 'exchange', 'externalShare', 'expand',
    'filter', 'flag', {type: 'flag', outline: true, key:'flagOutline'}, 'forwardMail', 'hide',
    'inCart', 'lock', 'pin', 'print', 'random', 'recycle', 'refresh', 'removeBookmark', 'removeUser',
    'repeat', 'replyAll', 'reply', 'retweet', 'send', {type: 'send', outline: true, key: 'sendOutline'},
    'shareAlternate', {type: 'shareAlternate', square: true, key:'shareAlternateS'} , 'share',
    {type: 'share', square: true, key: 'shareSquare'}, 'signIn', 'signOut', 
    'theme', 'translate', 'undo', 'unhide', 'unlockAlternate', 'unlock', 'upload', 'wait', 
    'wizard', 'write', {type: 'write', square: true, key: 'writeSquare'}]

  const messageIcons = ['announcement', 'birthday', 'flag', 'help', {type: 'help', circle: true, key: 'helpCircle'},
    'info', {type: 'info', circle: true, key: 'infoCircle'}, 'warning', {type: 'warning', circle: true, key: 'warningCircle'}, 
    'warningSign']

  const userTypesIcons = ['child', 'doctor', 'handicap', 'spy', 'student', 'user', 'users']

  const iconName = (type) => {
    const classes = splitAndLowerCamelCase(type)
    return classes.charAt(0).toUpperCase() + classes.slice(1)
  }

  const renderIcon = (icon) => {
    if(typeof icon === 'string') {
      return <Column key={icon}> <Icon type={icon} /> {iconName(icon)}</Column>
    } else {
      let suffix = ''
      if(icon.square) suffix =  ' square'
      if(icon.circle) suffix = ' circle'
      if(icon.outline) suffix = suffix + ' outline'

      return <Column key={icon.key}><Icon type={icon.type} square={icon.square} circle={icon.circle} outline={icon.outline}/>
        {iconName(icon.type) + suffix}
      </Column>
    }
  }

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
          {webIcons1.map(renderIcon)}
        </Grid>
      </Segment>

      <Segment>
        <h3>User actions</h3>
        <Grid columns={5}>
          {userIcons.map(renderIcon)}
        </Grid>
      </Segment>

      <Segment>
        <h3>Message</h3>
        <Grid columns={5}>
          {messageIcons.map(renderIcon)}
        </Grid>
      </Segment>

      <Segment>
        <h3>User types</h3>
        <Grid columns={5}>
          {userTypesIcons.map(renderIcon)}
        </Grid>
      </Segment>
    </div>
  )
}

export default IconDemo
