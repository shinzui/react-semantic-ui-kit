import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import propsToClasses from '../../util/propsToClasses'

export default class ItemGroup extends Component {

  static proptypes = {
    divided: PropTypes.bool,
    relaxed: PropTypes.bool,
    link: PropTypes.bool,
  }

  render() {
    const propsFromClasses = propsToClasses(['divided', 'relaxed', 'link'], this.props)
    const classes = classNames('ui', propsFromClasses, 'items', this.props.className)

    return <div className={classes}>{this.props.children}</div>
  }
}
