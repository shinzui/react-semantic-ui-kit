import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Modal extends Component {

  render() {
    return (
      <div className='content'>
        {this.props.children}
      </div>
    )
  }
}
