import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import propsToClasses from '../../util/propsToClasses'

export default class SegmentGroup extends Component {

  static propTypes = {
    horizontal: PropTypes.bool,
    raised: PropTypes.bool,
    stacked: PropTypes.bool,
    piled: PropTypes.bool
  }

  render() {

    const classesFromProps = propsToClasses(['horizontal', 'raised', 'stacked', 'piled'], this.props)
    const classes = classNames('ui', classesFromProps, 'segments', this.props.className)

    return <div className={classes}>{this.props.children}</div>
  }
}
