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
    floated: SemanticUiPropTypes.floated,
    aligned: SemanticUiPropTypes.aligned
  }

  render() {
    const { className, style } = this.props
    const classes = classNames(widthClasses(this.props), deviceWidthClasses(this.props),
                               alignedClasses(this.props), floatedClasses(this.props),
                               'column', className)

    return <div className={classes} style={style}>{this.props.children}</div>
  }
}
