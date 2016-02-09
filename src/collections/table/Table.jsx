import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'
import propsToClasses from '../../util/propsToClasses'

export default class Table extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    celled: PropTypes.bool,
    definition: PropTypes.bool,
    singleLine: PropTypes.bool,
    fixed: PropTypes.bool,
    selectable: PropTypes.bool,
    striped: PropTypes.bool,
    basic: PropTypes.bool,
    color: SemanticUiPropTypes.color,
    inverted: PropTypes.bool
  }

  render() {
    const { className, singleLine, color } = this.props
    const classesFromProps = propsToClasses(['selectable', 'striped', 'basic',
                                            'celled', 'definition', 'fixed', 'inverted'], this.props)

    const classes = classNames('ui', classesFromProps,
                               {'single line': singleLine}, color, 'table', className)

    return(
      <table className={classes}>
        {this.props.children}
      </table>
    )
  }
}
