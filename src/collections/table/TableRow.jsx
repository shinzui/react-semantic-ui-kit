import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import propsToClasses from '../../util/propsToClasses'

export default class TableRow extends Component {

  static propTypes = {
    positive: PropTypes.bool,
    negative: PropTypes.bool,
    error: PropTypes.bool,
    warning: PropTypes.bool,
    active: PropTypes.bool,
    disabled: PropTypes.bool
  }

  render() {
    const { className } = this.props
    const classesFromProps = propsToClasses(['positive', 'negative',
                                  'error', 'warning', 'active', 'disabled'], this.props)

    const classes = classNames(classesFromProps, className)

    return <tr className={classes}>{this.props.children}</tr>
  }
}
