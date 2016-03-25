import React from 'react'

import { Segment, Breadcrumb, BreadcrumbDivider, BreadcrumbSection, Icon } from '../src/index'

const BreadcrumbDemo = (props) => {
  return (
    <Segment>
      <Breadcrumb>
        <BreadcrumbSection href='#home' text='Home'/>
        <BreadcrumbDivider />
        <BreadcrumbSection href='#products' active text='Products' />
      </Breadcrumb>
    </Segment>
  )
}

export default BreadcrumbDemo
