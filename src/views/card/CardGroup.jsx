import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import propsToClasses from '../../util/propsToClasses'
import spellNumber from '../../util/spellNumber'
import Card from './Card'

export default class CardGroup extends Component {

  static propTypes = {
    columns: PropTypes.number,
    stackable: PropTypes.bool,
    doubling: PropTypes.bool,
    children: (props, propName, componentName) => {
      const prop = props[propName]

      if(Array.isArray(prop)) {
        if(prop.some( p => p.type !== Card)) {
          return new Error(`${componentName} should only have Card as children`)
        }
      } else {
        if(prop.type !== Card) {
          return new Error(`${componentName} should only have Card as children`)
        }
      }
    }
  }

  render() {
    const { className, children, columns } = this.props
    const classFromProps = propsToClasses(['stackable', 'doubling'], this.props)
    const classes = classNames('ui', spellNumber(columns), classFromProps, 'cards', className)

    return (
      <div className={classes}>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { grouped: true})
        })}
      </div>
    )
  }
}
