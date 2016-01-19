import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'
import { alignedClasses, floatedClasses } from '../../common/semanticClasses'
import propsToClasses from '../../util/propsToClasses'

export default class Image extends Component {

  static propTypes = {
    children: PropTypes.node,
    src: PropTypes.string,
    href: PropTypes.string,
    size: SemanticUiPropTypes.size,
    wrapper: PropTypes.bool,
    avatar: PropTypes.bool,
    bordered: PropTypes.bool,
    fluid: PropTypes.bool,
    rounded: PropTypes.bool,
    circular: PropTypes.bool,
    centered: PropTypes.bool,
    hidden: PropTypes.bool,
    disabled: PropTypes.bool,
    aligned: SemanticUiPropTypes.imageAlignment,
    floated: SemanticUiPropTypes.floated
  }

  static defaultProps = {
    wrapper: false
  }

  render() {
    const { wrapper, size, src, href, hidden, disabled, className } = this.props
    const classesFromProps = propsToClasses(['avatar', 'bordered', 'fluid', 'rounded', 'circular', 'centered' ], this.props)
    const classes = classNames({'hidden': hidden}, {'disabled': disabled}, 'ui',
                               alignedClasses(this.props), size, floatedClasses(this.props),
                               classesFromProps, 'image', className)

    if(wrapper && src) {
      return <div className={classes}><img src={src} /></div>
    } else if(wrapper) {
      return <div className={classes}>{this.props.children}</div>
    } else if(href) {
      return <a href={href} className={classes}><img src={src} /></a>
    } else {
      return <img className={classes} src={src} />
    }
  }

}