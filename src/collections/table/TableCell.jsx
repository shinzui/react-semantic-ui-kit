import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import propsToClasses from '../../util/propsToClasses'
import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'
import { alignedClasses } from '../../common/semanticClasses'

export default class TableCell extends Component {

  static propTypes = {
    positive: PropTypes.bool,
    negative: PropTypes.bool,
    error: PropTypes.bool,
    warning: PropTypes.bool,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    collapsing: PropTypes.bool,
    aligned: SemanticUiPropTypes.aligned,
    header: PropTypes.bool
  }

  render() {
    const { className, header } = this.props
    const classesFromProps = propsToClasses(['positive', 'negative', 'error',
                                            'warning', 'active', 'disabled', 'collapsing'], this.props)

    const classes = classNames(classesFromProps, alignedClasses(this.props), className)

    if(header) {
      return <th className={classes}>{this.props.children}</th>
    } else {
      return <td className={classes}>{this.props.children}</td>
    }
  }
}
