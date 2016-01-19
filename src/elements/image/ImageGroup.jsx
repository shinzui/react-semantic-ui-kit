import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'

export default class ImageGroup extends Component {

  static propTypes = {
    size: SemanticUiPropTypes.size
  }

  render() {
    const { size, className } = this.props

    const classes = classNames('ui', size, 'images', className)

    return <div className={classes}>{this.props.children}</div>
  }
}
