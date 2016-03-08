import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'
import { widthClasses, floatedClasses } from '../../common/semanticClasses'
import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'

export default class Column extends Component {

  static propTypes = {
    width: PropTypes.number,
    floated: SemanticUiPropTypes.floated
  }

  render() {
    const { className, style } = this.props
    const classes = classNames(widthClasses(this.props), floatedClasses(this.props), 'column', className)

    return <div className={classes} style={style}>{this.props.children}</div>
  }
}
