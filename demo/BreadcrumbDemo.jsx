import React from 'react'

import { Segment, Breadcrumb, BreadcrumbDivider, BreadcrumbSection, Divider, Icon } from '../src/index'

const BreadcrumbDemo = (props) => {
  const sizes = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']

  return (
    <div>
      <Segment>
        <Breadcrumb>
          <BreadcrumbSection href='#home' text='Home'/>
          <BreadcrumbDivider />
          <BreadcrumbSection href='#products' active text='Products' />
        </Breadcrumb>
      </Segment>

      <Segment>
        <Breadcrumb>
          <BreadcrumbSection href='#home' text='Home'/>
          <Icon type='rightAngle' divider />
          <BreadcrumbSection href='#registration' text='Registration'/>
          <Icon type='rightAngle' divider />
          <BreadcrumbSection href='#info' active text='Personal Information' />
        </Breadcrumb>
      </Segment>

      <Segment>
        <Breadcrumb>
          <BreadcrumbSection href='#home' text='Home' />
          <BreadcrumbDivider />
          <BreadcrumbSection active>
            Search for: <a href='#search'>properties</a>
          </BreadcrumbSection>
        </Breadcrumb>
      </Segment>

      <Segment>
        {sizes.map( size => {
          return (
            <div key={size}>
              <Breadcrumb size={size}>
                <BreadcrumbSection href='#home' text='Home'/>
                <BreadcrumbDivider />
                <BreadcrumbSection href='#registration' text='Registration'/>
                <BreadcrumbDivider />
                <BreadcrumbSection href='#info' active text='Personal Information' />
              </Breadcrumb>
              <Divider />
            </div>
          )
        })}
      </Segment>
    </div>

  )
}

export default BreadcrumbDemo
