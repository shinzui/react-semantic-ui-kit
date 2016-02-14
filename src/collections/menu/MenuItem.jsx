import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'
import propsToClasses from '../../util/propsToClasses'

export default class MenuItem extends Component {

  static propTypes = {
    active: PropTypes.bool,
    href: PropTypes.string,
    header: PropTypes.bool
  }

  render() {
    const { className, href, children } = this.props
    const classesFromProps = propsToClasses(['active', 'header'], this.props)
    const classes = classNames(classesFromProps, 'item', className)

    if(href) {
      return <a href={href} className={classes}>{children}</a>
    } else {
      return <div className={classes}>{children}</div>
    }
  }
}
