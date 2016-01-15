import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import propsToClasses from '../util/propsToClasses'

export default class Divider extends Component {

  static propTypes = {
    element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
    horizontal: PropTypes.bool,
    inverted: PropTypes.bool,
    vertical: PropTypes.bool,
    header: PropTypes.bool,
    fitted: PropTypes.bool,
    hidden: PropTypes.bool,
    section: PropTypes.bool,
    clearing: PropTypes.bool
  }

  render() {
    const { header, element } = this.props
    const classesFromProps = propsToClasses(['vertical', 'horizontal', 'inverted', 'fitted', 'hidden', 'section', 'clearing'], this.props)
    const classes = classNames('ui', classesFromProps, 'divider', {'header': header})

    if(element) {
      return <this.props.element className={classes}>{this.props.children}</this.props.element>
    } else {
      return <div className={classes}>{this.props.children}</div>
    }
  }


}
