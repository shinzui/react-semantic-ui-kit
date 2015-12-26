import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Container extends Component {

  render() {
    let classes = classNames('ui container', this.props.classname)

    return <div className={classes}>{this.props.children}</div>
  }

}
