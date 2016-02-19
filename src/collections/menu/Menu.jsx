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
        if(prop.some( p => (p.type !== MenuItem && p.type !== Menu))) {
          return new Error(`${componentName} should only have MenuItem or Menu as children`)
        }
      } else {
        if(prop.type !== MenuItem && prop.type !== Menu) {
          return new Error(`${componentName} should only have MenuItem or Menu as children`)
        }
      }
    },
    items: PropTypes.number,
    vertical: PropTypes.bool,
    basic: PropTypes.bool,
    tabular: PropTypes.bool,
    text: PropTypes.bool,
    right: PropTypes.bool,
    parentMenu: PropTypes.bool,
    secondary: PropTypes.bool,
    pointing: PropTypes.bool,
    pagination: PropTypes.bool,
    compact: PropTypes.bool,
    stackable: PropTypes.bool
  }

  render() {
    const { className, parentMenu } = this.props
    const classesFromProps = propsToClasses(['secondary', 'right', 'vertical',
                                            'compact', 'pointing', 'pagination',
                                            'text', 'basic', 'tabular', 'stackable'], this.props)
    const classes = classNames({'ui': !parentMenu}, itemClasses(this.props), classesFromProps, 'menu', className)

    const children = React.Children.map(this.props.children, (child) => {
      if(child.type === MenuItem) {
        return child
      } else if(child.type === Menu) {
        return React.cloneElement(child, { parentMenu: true })
      }
    })
    return <div className={classes}>{children}</div>
  }
}
