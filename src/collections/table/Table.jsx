import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'
import propsToClasses from '../../util/propsToClasses'
import { columnClasses } from '../../common/semanticClasses'

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
    veryPadded: PropTypes.bool,
    columns: PropTypes.number,
    stackable: PropTypes.bool,
    unstackable: PropTypes.bool,
    collapsing: PropTypes.bool,
    sortable: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'large'])
  }

  render() {
    const { className, singleLine, color, veryCompact, veryPadded, size } = this.props
    const classesFromProps = propsToClasses(['selectable', 'structured', 'striped', 'basic',
                                            'celled', 'definition', 'fixed', 'sortable',
                                            'collapsing', 'inverted', 'compact', 'padded',
                                            'stackable', 'unstackable'], this.props)

    const classes = classNames('ui', columnClasses(this.props), size, classesFromProps,
                               {'single line': singleLine}, {'very compact': veryCompact}, {'very padded': veryPadded},
                               color, 'table', className)

    return(
      <table className={classes}>
        {this.props.children}
      </table>
    )
  }
}
