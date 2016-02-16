import React from 'react'

import { Segment, Menu, MenuItem, Input, Divider } from '../src/index'
import ParagraphExample from './ParagraphExample'

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
        <h3>Pointing menu</h3>
        <Menu pointing>
          <MenuItem href='#home' active>Home</MenuItem>
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
        <Segment>
          <ParagraphExample />
        </Segment>
      </Segment>
      <Segment>
        <h3>Secondary pointing menu</h3>
        <Menu secondary pointing>
          <MenuItem href='#home' active>Home</MenuItem>
          <MenuItem href='#features'>Features</MenuItem>
          <MenuItem href='#about'>About</MenuItem>
          <Menu right>
            <MenuItem href='#logout'>Logout</MenuItem>
          </Menu>
        </Menu>
        <Segment>
          <ParagraphExample />
        </Segment>
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

      <Segment>
        <h3>Pagination</h3>
        <Menu pagination>
          <MenuItem>1</MenuItem>
          <MenuItem>2</MenuItem>
          <MenuItem disabled>…</MenuItem>
          <MenuItem>10</MenuItem>
          <MenuItem>11</MenuItem>
        </Menu>
      </Segment>

      <Segment>
        <h3>States</h3>

        <h5>Hover</h5>
        <Menu compact>
          <MenuItem href='#'>Link</MenuItem>
          <MenuItem link>Div link</MenuItem>
        </Menu>

        <Divider />

        <h5>Down</h5>
        <Menu compact>
          <MenuItem href='#' down>Home</MenuItem>
          <MenuItem down>About</MenuItem>
        </Menu>

      </Segment>
    </div>
  )
}

export default MenuDemo
