import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import propsToClasses from '../../util/propsToClasses'
import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'

import Step from './Step'

export default class StepGroup extends Component {

  static propTypes = {
    ordered: PropTypes.bool,
    vertical: PropTypes.bool,
    children: (props, propName, componentName) => {
      const prop = props[propName]

      if(Array.isArray(prop)) {
        if(prop.some( p => p.type !== Step)) {
          return new Error(`${componentName} should only have Step as children`)
        }
      } else {
        if(prop.type !== Step) {
          return new Error(`${componentName} should only have Step as children`)
        }
      }
    }
  }

  render() {
    const { className }  = this.props
    const classesFromProps = propsToClasses(['ordered', 'vertical'], this.props)
    const classes = classNames('ui', classesFromProps, 'steps', className)

    return <div className={classes}>{this.props.children}</div>
  }
}
