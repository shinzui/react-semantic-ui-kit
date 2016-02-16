import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import propsToClasses from '../../util/propsToClasses'
import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'
import { alignedClasses, widthClasses, sortedClasses } from '../../common/semanticClasses'

export default class TableCell extends Component {

  static propTypes = {
    positive: PropTypes.bool,
    negative: PropTypes.bool,
    error: PropTypes.bool,
    warning: PropTypes.bool,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    collapsing: PropTypes.bool,
    aligned: SemanticUiPropTypes.verticalAndHorizontalAlignment,
    header: PropTypes.bool,
    selectable: PropTypes.bool,
    width: PropTypes.number,
    sorted: PropTypes.oneOf(['ascending', 'descending'])
  }

  render() {
    const { className, header } = this.props
    const classesFromProps = propsToClasses(['selectable', 'positive', 'negative', 'error',
                                            'warning', 'active', 'disabled', 'collapsing'], this.props)

    const classes = classNames(widthClasses(this.props), classesFromProps, alignedClasses(this.props),
                               sortedClasses(this.props),className)

    if(header) {
      return <th className={classes}>{this.props.children}</th>
    } else {
      return <td className={classes}>{this.props.children}</td>
    }
  }
}
