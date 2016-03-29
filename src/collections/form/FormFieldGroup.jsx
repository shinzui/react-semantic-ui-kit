import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import spellNumber from '../../util/spellNumber'
import propsToClasses from '../../util/propsToClasses'
import FormField from './FormField'

export default class FormFieldGroup extends Component {

  static propTypes = {
    children: (props, propName, componentName) => {
      const prop = props[propName]
      if(Array.isArray(prop)) {
        if(prop.some( p => p.type !== FormField)) {
          return new Error(`${componentName} should only have FormField as children`)
        }
      } else {
        if(prop.type !== FormField) {
          return new Error(`${componentName} should only have FormField as children`)
        }
      }
    },
    fields: PropTypes.number,
    inline: PropTypes.bool
  }

  render() {
    const { className, children, fields } = this.props
    const classFromProps = propsToClasses(['inline'], this.props)
    const classes = classNames(spellNumber(fields), classFromProps, 'fields', className)

    return <div className={classes}>{children}</div>

  }

}
