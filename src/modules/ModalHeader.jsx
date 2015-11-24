import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class ModelHeader extends Component {

  render() {
    const classes = classNames('header', this.props.className)
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    )
  }
  
}
