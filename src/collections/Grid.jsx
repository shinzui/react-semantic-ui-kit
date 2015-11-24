import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

export default class Grid extends Component {

  static propTypes = {
    children: PropTypes.node
  }

  render() {
    let classes = classNames('ui', this.props.className, 'grid')

    return <div {...this.props} className={classes}>{this.props.children}</div>
  }

}
