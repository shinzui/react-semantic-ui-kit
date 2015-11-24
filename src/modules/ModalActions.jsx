import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class ModalActions extends Component {

  static propTypes = {
    submitHandler: PropTypes.func.isRequired,
    cancelHandler: PropTypes.func.isRequired
  }

  static defaultProps = {
    cancelText: 'Cancel',
    submitText: 'Submit'
  }

  render() {

    return (
      <div className='actions'>
        <div className='ui black deny button' onClick={this.props.cancelHandler}>
          {this.props.cancelText}
        </div>
        <div className='ui positive right labeled icon button' onClick={this.props.submitHandler}>
          {this.props.submitText}
          <i className='checkmark icon'></i>
        </div>

      </div>
    )
  }

}
