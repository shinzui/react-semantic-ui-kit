import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import propsToClasses from '../util/propsToClasses'

export default class Menu extends Component {

  static propTypes = {
    vertical: PropTypes.bool,
    basic: PropTypes.bool
  }

  render() {
    const { className } = this.props
    const classesFromProps = propsToClasses(['vertical', 'basic'], this.props)
    const classes = classNames('ui', classesFromProps, 'menu', className)

    return <div className={classes}>{this.props.children}</div>
  }

}
