import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'

import Statistic from './Statistic'

export default class StatisticGroup extends Component {

  static propTypes = {
    style: PropTypes.object,
    children: (props, propName, componentName) => {
      const prop = props[propName]

      if(Array.isArray(prop)) {
        if(prop.some( p => p.type !== Statistic)) {
          return new Error(`${componentName} should only have Statistic as children`)
        }
      } else {
        if(prop.type !== Statistic) {
          return new Error(`${componentName} should only have Statistic as children`)
        }
      }
    }
  }

  render() {
    const { className, children, style } = this.props
    const classes = classNames('ui', 'statistics', className)

    return <div className={classes} style={style}>{children}</div>
  }

}
