import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Label extends Component {

  static propTypes = {
    type: PropTypes.oneOf(['basic', 'tag', 'circular']),
    pointing: PropTypes.bool,
    pointingDirection: PropTypes.oneOf(['below', 'left', 'right'])
  }

  render() {
    let classes = classNames('ui label', this.props.type, this.props.className, {'pointing': this.props.pointing})

    return <div className={classes}>{this.props.children}</div>
  }
}

