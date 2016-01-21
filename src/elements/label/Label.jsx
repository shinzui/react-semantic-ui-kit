import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import propsToClasses from '../../util/propsToClasses'
import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'

export default class Label extends Component {

  static propTypes = {
    basic: PropTypes.bool,
    tag: PropTypes.bool,
    circular: PropTypes.bool,
    image: PropTypes.bool,
    pointing: PropTypes.bool,
    size: SemanticUiPropTypes.size,
    pointingDirection: PropTypes.oneOf(['below', 'left', 'right']),
    color: SemanticUiPropTypes.color
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
    const { className, pointingDirection, color, size } = this.props

    const classesFromProps = propsToClasses(['basic', 'tag', 'circular', 'image'], this.props)

    const classes = classNames('ui', this.pointingClasses() , color, classesFromProps, size, 'label', className )

    return <div className={classes}>{this.props.children}</div>
  }
}

