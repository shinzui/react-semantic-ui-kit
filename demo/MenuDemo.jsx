import React from 'react'

import { Segment, Menu, MenuItem } from '../src/index'

const MenuDemo = (props) => {
  return (
    <div>
      <Segment>
        <Menu items={3}>
          <MenuItem href='#home' active>Home</MenuItem>
          <MenuItem href='#features'>Features</MenuItem>
          <MenuItem href='#about'>About</MenuItem>
        </Menu>
      </Segment>
    </div>
  )
}

export default MenuDemo
