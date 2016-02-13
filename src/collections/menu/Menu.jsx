import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'
import propsToClasses from '../../util/propsToClasses'
import { itemClasses } from '../../common/semanticClasses'

import MenuItem from './MenuItem'

export default class Menu extends Component {

  static propTypes = {
    children: (props, propName, componentName) => {
      const prop = props[propName]

      if(Array.isArray(prop)) {
        if(prop.some( p => p.type !== MenuItem)) {
          return new Error(`${componentName} should only have MenuItem as children`)
        }
      } else {
        if(prop.type !== MenuItem) {
          return new Error(`${componentName} should only have MenuItem as children`)
        }
      }
    },
    items: PropTypes.number,
    vertical: PropTypes.bool,
    basic: PropTypes.bool
  }

  render() {
    const { className, children } = this.props
    const classesFromProps = propsToClasses(['vertical', 'basic'], this.props)
    const classes = classNames('ui', itemClasses(this.props), classesFromProps, 'menu', className)

    return <div className={classes}>{children}</div>
  }
}
