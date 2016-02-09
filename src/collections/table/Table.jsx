import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import propsToClasses from '../../util/propsToClasses'

export default class Table extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    celled: PropTypes.bool,
    definition: PropTypes.bool,
    singleLine: PropTypes.bool,
    fixed: PropTypes.bool,
    selectable: PropTypes.bool,
    striped: PropTypes.bool
  }

  render() {
    const { className, singleLine } = this.props
    const classesFromProps = propsToClasses(['selectable', 'striped', 'celled', 'definition', 'fixed'], this.props)

    const classes = classNames('ui', classesFromProps,
                               {'single line': singleLine}, 'table', className)

    return(
      <table className={classes}>
        {this.props.children}
      </table>
    )
  }
}
