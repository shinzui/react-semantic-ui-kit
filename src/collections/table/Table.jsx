import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'
import propsToClasses from '../../util/propsToClasses'

export default class Table extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    celled: PropTypes.bool,
    definition: PropTypes.bool,
    structured: PropTypes.bool,
    singleLine: PropTypes.bool,
    fixed: PropTypes.bool,
    selectable: PropTypes.bool,
    striped: PropTypes.bool,
    basic: PropTypes.bool,
    color: SemanticUiPropTypes.color,
    inverted: PropTypes.bool,
    compact: PropTypes.bool,
    veryCompact: PropTypes.bool,
    padded: PropTypes.bool,
    veryPadded: PropTypes.bool
  }

  render() {
    const { className, singleLine, color, veryCompact, veryPadded } = this.props
    const classesFromProps = propsToClasses(['selectable', 'structured', 'striped', 'basic',
                                            'celled', 'definition', 'fixed',
                                            'inverted', 'compact', 'padded'], this.props)

    const classes = classNames('ui', classesFromProps,
                               {'single line': singleLine}, {'very compact': veryCompact}, {'very padded': veryPadded},
                               color, 'table', className)

    return(
      <table className={classes}>
        {this.props.children}
      </table>
    )
  }
}
