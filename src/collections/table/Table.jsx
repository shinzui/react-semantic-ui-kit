import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import propsToClasses from '../../util/propsToClasses'

export default class Table extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    celled: PropTypes.bool,
    definition: PropTypes.bool
  }

  render() {
    const { className } = this.props
    const classesFromProps = propsToClasses(['celled', 'definition'], this.props)

    const classes = classNames('ui', classesFromProps, 'table', className)

    return(
      <table className={classes}>
        {this.props.children}
      </table>
    )
  }
}
