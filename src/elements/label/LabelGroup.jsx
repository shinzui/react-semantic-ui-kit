import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import propsToClasses from '../../util/propsToClasses'
import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'

export default class LabelGroup extends Component {

  static propTypes = {
    tag: PropTypes.bool,
    circular: PropTypes.bool,
    size: SemanticUiPropTypes.size,
    color: SemanticUiPropTypes.color
  }

  render() {
    const { className, color, size } = this.props

    const classesFromProps = propsToClasses(['tag', 'circular'], this.props)

    const classes = classNames('ui', color, classesFromProps, size, 'labels', className)

    return <div className={classes}>{this.props.children}</div>
  }
}
