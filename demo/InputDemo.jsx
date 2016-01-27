import React from 'react'

import { Input, Segment, Button,
          Header, Divider, Label } from '../src/index'

const InputDemo = (props)  => {
  const sizes = ['mini', 'small', 'medium', 'large', 'big', 'huge', 'massive']

  return (
    <div>
      <Segment>
        <Input>
          <input type='text' placeholder='Search...' />
        </Input>
      </Segment>

      <Segment>
        <Header element='h3'>Focused input</Header>
        <Input focus>
          <input type='text' placeholder='Search...' />
        </Input>

      </Segment>

      <Segment>
        <Header element='h3'>Loading input</Header>

        <Input loading icon>
          <input type='text' placeholder='Search...' />
          <i className='icon search' />
        </Input>

        <Divider />

        <Input loading icon iconPosition='left'>
          <input type='text' placeholder='Search...' />
          <i className='icon search' />
        </Input>
      </Segment>

      <Segment>
        <Header element='h3'>Disabled input</Header>
        <Input disabled>
          <input type='text' placeholder='Search...' />
        </Input>
      </Segment>

      <Segment>
        <Header element='h3'>Input with error</Header>
        <Input error>
          <input type='text' placeholder='Search...' />
        </Input>
      </Segment>

      <Segment>
        <Header element='h3'>Input with label</Header>
        <Input label>
          <Label>http://</Label>
          <input type='text' placeholder='website.com' />
        </Input>

        <Divider />

        <Header element='h5'>Label can be generated</Header>
        <Input label='http://'>
          <input type='text' placeholder='website.com' />
        </Input>

        <Divider />
        <Header element='h5'>or supplied</Header>
        <Input label={<Label basic>kg</Label>} labelPosition='right'>
          <input type='text' placeholder='weight' />
        </Input>

      </Segment>

      <Segment>
        <Header element='h3'>Action input</Header>
        <Input action>
          <input type='text' placeholder='Search...' />
          <Button>Search</Button>
        </Input>
      </Segment>

      <Segment>
        <Header element='h3'>Transparent input</Header>
        <Input transparent>
          <input type='text' placeholder='Search...' />
        </Input>
        <Divider />

        <Input transparent icon>
          <input type='text' placeholder='Search...' />
          <i className='search icon' />
        </Input>
      </Segment>

      <Segment inverted>
        <Header element='h3'>Inverted input</Header>
        <Input inverted>
          <input type='text' placeholder='Search...' />
        </Input>
        <Divider inverted/>

        <Input inverted icon>
          <input type='text' placeholder='Search...' />
          <i className='search icon' />
        </Input>
      </Segment>

      <Segment>
        <Header element='h3'>Fluid input</Header>
        <Input fluid>
          <input type='text' placeholder='Search...' />
        </Input>

        <Divider />

        <Input fluid icon>
          <input type='text' placeholder='Search...' />
          <i className='search icon' />
        </Input>

        <Divider />
        <Input action fluid>
          <input type='text' placeholder='Search...' />
          <Button>Search</Button>
        </Input>

      </Segment>

      <Segment>
        <Header element='h3'>Input with sizes</Header>

        {sizes.map( size => {
          return <div key={size}>
            <Input size={size} icon>
              <input type='text' placeholder={`Search ${size}`} />
              <i className='search icon' />
            </Input>
            <Divider />
          </div>
        })}
      </Segment>

    </div>
  )
}

export default InputDemo
