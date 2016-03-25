import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

export default class BreadcrumbSection extends Component {

  static propTypes = {
    active: PropTypes.bool,
    href: PropTypes.string,
    text: PropTypes.string
  }

  render() {
    const { active, href, text, children } = this.props
    const classes = classNames({'active': active}, 'section')

    const sectionBody = text ? text : children

    if(active || !href) {
      return <span className={classes}>{sectionBody}</span>
    } else {
      return <a href={href} className={classes}>{sectionBody}</a>
    }
  }
}
