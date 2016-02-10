import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import propsToClasses from '../../util/propsToClasses'

export default class TableCell extends Component {

  static propTypes = {
    positive: PropTypes.bool,
    negative: PropTypes.bool,
    error: PropTypes.bool,
    warning: PropTypes.bool,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    collapsing: PropTypes.bool
  }

  render() {
    const { className } = this.props
    const classesFromProps = propsToClasses(['positive', 'negative', 'error',
                                            'warning', 'active', 'disabled', 'collapsing'], this.props)

    const classes = classNames(classesFromProps, className)

    return <td className={classes}>{this.props.children}</td>
  }
}
