import React from 'react'

import { Segment, Menu, MenuItem, Input, Divider } from '../src/index'
import ParagraphExample from './ParagraphExample'

const MenuDemo = (props) => {

  const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue',
                          'violet', 'purple', 'pink', 'brown', 'grey', 'black']
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

      <Segment>
        <h3>Stackable menu</h3>
        <Menu stackable>
          <MenuItem href='#home' active>Home</MenuItem>
          <MenuItem href='#features'>Features</MenuItem>
          <MenuItem href='#about'>About</MenuItem>
        </Menu>
      </Segment>

      <Segment>
        <Menu inverted>
          <MenuItem href='#home' active>Home</MenuItem>
          <MenuItem href='#features'>Features</MenuItem>
          <MenuItem href='#about'>About</MenuItem>
        </Menu>
      </Segment>

      <Segment>
        <Menu inverted vertical>
          <MenuItem href='#home' active>Home</MenuItem>
          <MenuItem href='#features'>Features</MenuItem>
          <MenuItem href='#about'>About</MenuItem>
        </Menu>
      </Segment>

      <Segment>
        <Menu inverted vertical pointing>
          <MenuItem href='#home' active>Home</MenuItem>
          <MenuItem href='#features'>Features</MenuItem>
          <MenuItem href='#about'>About</MenuItem>
        </Menu>
      </Segment>

      <Segment inverted>
        <Menu secondary inverted>
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
      </Segment>

      <Segment inverted>
        <h3>Inverted secondary pointing menu</h3>
        <Menu inverted secondary pointing>
          <MenuItem href='#home' active>Home</MenuItem>
          <MenuItem href='#features'>Features</MenuItem>
          <MenuItem href='#about'>About</MenuItem>
          <Menu right>
            <MenuItem href='#logout'>Logout</MenuItem>
          </Menu>
        </Menu>
        <Segment inverted>
          <ParagraphExample />
        </Segment>
      </Segment>

      <Segment>
        <h3>Colored menus</h3>
        {colors.map( color => {
          return <Menu items={3} color={color} key={color}>
            <MenuItem href='#home' active>Home</MenuItem>
            <MenuItem href='#features'>Features</MenuItem>
            <MenuItem href='#about'>About</MenuItem>
          </Menu>
          })}
      </Segment>

      <Segment>
        <h3>Colored menu items</h3>
        <Menu>
        {colors.slice(0,9).map( (color, index) => {
          const active = index === 0
          return <MenuItem key={color} color={color} active={active}>{color}</MenuItem>
        })}
        </Menu>
      </Segment>

      <Segment>
        <h3>Icon menu</h3>
        <Menu icon>
          <MenuItem href='#pause'>
            <i className='pause icon' />
          </MenuItem>
          <MenuItem href='#play'>
            <i className='play icon' />
          </MenuItem>
          <MenuItem href='#shuffle'>
            <i className='shuffle icon' />
          </MenuItem>
        </Menu>

        <Menu vertical icon>
          <MenuItem href='#pause'>
            <i className='pause icon' />
          </MenuItem>
          <MenuItem href='#play'>
            <i className='play icon' />
          </MenuItem>
          <MenuItem href='#shuffle'>
            <i className='shuffle icon' />
          </MenuItem>
        </Menu>
      </Segment>

      <Segment>
        <h3>Labeled icon menu</h3>
        <Menu labeledIcon>
          <MenuItem href='#pause'>
            <i className='pause icon' /> Pause
          </MenuItem>
          <MenuItem href='#play'>
            <i className='play icon' /> Play
          </MenuItem>
          <MenuItem href='#shuffle'>
            <i className='shuffle icon' />Shuffle
          </MenuItem>
        </Menu>

        <Menu vertical labeledIcon>
          <MenuItem href='#pause'>
            <i className='pause icon' />Pause
          </MenuItem>
          <MenuItem href='#play'>
            <i className='play icon' />Play
          </MenuItem>
          <MenuItem href='#shuffle'>
            <i className='shuffle icon' />Shuffle
          </MenuItem>
        </Menu>
      </Segment>

    </div>
  )
}

export default MenuDemo
