import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'
import propsToClasses from '../../util/propsToClasses'

export default class Card extends Component {

  static propTypes = {
    children: PropTypes.node,
    fluid: PropTypes.bool,
    centered: PropTypes.bool,
    href: PropTypes.string,
    grouped: PropTypes.bool
  }

  render() {
    const { className, href, children, grouped } = this.props
    const classesFromProps = propsToClasses(['fluid', 'centered'], this.props)
    const classes = classNames({'ui': !grouped}, classesFromProps,
                               'card', className)


    if(href) {
      return <a href={href} className={classes}>{children}</a>
    } else {
      return <div className={classes}>{children}</div>
    }
  }
}

