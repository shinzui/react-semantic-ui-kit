import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

export default class Breadcrumb extends Component {

  static propTypes = {
    size: PropTypes.oneOf(['small', 'large', 'huge']),
    children: PropTypes.node.isRequired
  }

  render() {
    const { size, children } = this.props
    const classes = classNames('ui', size, 'breadcrumb')

    return (
      <div className={classes}>
        {children}
      </div>
    )
  }

}
