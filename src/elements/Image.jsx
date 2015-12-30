import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import propsToClasses from '../util/propsToClasses'

export default class Image extends Component {

  static propTypes = {
    children: PropTypes.node,
    src: PropTypes.string,
    href: PropTypes.string,
    size: PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),
    wrapper: PropTypes.bool,
    avatar: PropTypes.bool,
    bordered: PropTypes.bool,
    fluid: PropTypes.bool,
    rounded: PropTypes.bool,
    circular: PropTypes.bool,
    centered: PropTypes.bool
  }

  static defaultProps = {
    wrapper: false
  }

  render() {
    const { wrapper, size, src, href, className } = this.props
    const classesFromProps = propsToClasses(['avatar', 'bordered', 'fluid', 'rounded', 'circular', 'centered' ], this.props)
    const classes = classNames('ui', size, classesFromProps, 'image', className)

    if(wrapper) {
      return <div className={classes}>{this.props.children}</div>
    } else if(href) {
      return <a href={href} className={classes}><img src={src} /></a>
    } else {
      return <img className={classes} src={src} />
    }
  }

}
