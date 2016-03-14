import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'
import { deviceWidthClasses, widthClasses,
         floatedClasses, alignedClasses } from '../../common/semanticClasses'
import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'

export default class Column extends Component {

  static propTypes = {
    width: PropTypes.number,
    mobileWidth: PropTypes.number,
    tabletWidth: PropTypes.number,
    computerWidth: PropTypes.number,
    color: SemanticUiPropTypes.color,
    floated: SemanticUiPropTypes.floated,
    aligned: SemanticUiPropTypes.aligned,
    style: PropTypes.object
  }

  render() {
    const { className, style, color } = this.props
    const classes = classNames(widthClasses(this.props), deviceWidthClasses(this.props),
                               alignedClasses(this.props), floatedClasses(this.props),
                               color, 'column', className)

    return <div className={classes} style={style}>{this.props.children}</div>
  }
}
