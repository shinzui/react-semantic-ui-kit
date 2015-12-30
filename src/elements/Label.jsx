import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import propsToClasses from '../util/propsToClasses'

export default class Label extends Component {

  static propTypes = {
    basic: PropTypes.bool,
    tag: PropTypes.bool,
    circular: PropTypes.bool,
    pointing: PropTypes.bool,
    pointingDirection: PropTypes.oneOf(['below', 'left', 'right'])
  }

  pointingClasses() {
    const { pointing, pointingDirection } = this.props

    if(pointingDirection) {
      if(pointingDirection === 'below') {
        return 'pointing below'
      } else {
        return `${pointingDirection} pointing`
      }
    }

    if(pointing) {
      return 'pointing'
    }

  }

  render() {
    const { className, pointingDirection } = this.props
    const classesFromProps = propsToClasses(['basic', 'tag', 'circular'], this.props)
    const classes = classNames('ui', this.pointingClasses() ,classesFromProps, 'label', className )

    return <div className={classes}>{this.props.children}</div>
  }
}

