import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'
import propsToClasses from '../../util/propsToClasses'
import { itemClasses } from '../../common/semanticClasses'
import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'

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
    borderless: PropTypes.bool,
    tabular: PropTypes.bool,
    text: PropTypes.bool,
    right: PropTypes.bool,
    parentMenu: PropTypes.bool,
    secondary: PropTypes.bool,
    pointing: PropTypes.bool,
    pagination: PropTypes.bool,
    compact: PropTypes.bool,
    stackable: PropTypes.bool,
    inverted: PropTypes.bool,
    icon: PropTypes.bool,
    labeledIcon: PropTypes.bool,
    fluid: PropTypes.bool,
    color: SemanticUiPropTypes.color,
    size: PropTypes.oneOf(['small', 'large'])
  }

  render() {
    const { className, parentMenu, color, labeledIcon, size } = this.props
    const classesFromProps = propsToClasses(['secondary', 'right', 'vertical',
                                            'borderless', 'compact', 'pointing', 'pagination',
                                            'icon', 'text', 'basic', 'fluid',
                                            'tabular', 'stackable', 'inverted'], this.props)
    const classes = classNames({'ui': !parentMenu}, color, size, itemClasses(this.props),
                               {'labeled icon': labeledIcon}, classesFromProps, 'menu', className)

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
