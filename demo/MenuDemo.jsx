import React from 'react'

import { Segment, Menu, MenuItem, Input } from '../src/index'

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

      <Segment>
        <Menu tabular>
          <MenuItem href='#home' active>Home</MenuItem>
          <MenuItem href='#features'>Features</MenuItem>
          <MenuItem href='#about'>About</MenuItem>
        </Menu>
      </Segment>

      <Segment>
        <Menu secondary>
          <MenuItem href='#home'>Home</MenuItem>
          <MenuItem href='#features'>Features</MenuItem>
          <MenuItem href='#about'>About</MenuItem>
          <Menu right>
            <MenuItem>
              <Input icon>
                <input type='text' placeholder='Search...'/>
                <i className='icon search'/>
              </Input>
            </MenuItem>
            <MenuItem href='#logout'>Logout</MenuItem>
          </Menu>
        </Menu>
      </Segment>

      <Segment>
        <h3>Text menu</h3>
        <Menu text>
          <MenuItem header>Sort by</MenuItem>
          <MenuItem href='#' active>Most recent</MenuItem>
          <MenuItem href='#'>Most popular</MenuItem>
        </Menu>
        <Menu vertical text>
          <MenuItem header>Sort by</MenuItem>
          <MenuItem href='#' active>Most recent</MenuItem>
          <MenuItem href='#'>Most popular</MenuItem>
        </Menu>
      </Segment>
    </div>
  )
}

export default MenuDemo
