import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import propsToClasses from '../util/propsToClasses'
import SemanticUiPropTypes from '../common/SemanticUiPropTypes'

export default class Message extends Component {

  static propTypes = {
    children: PropTypes.node,
    size: PropTypes.oneOf(['small', 'large', 'huge', 'massive']),
    dismissible: PropTypes.bool,
    compact: PropTypes.bool,
    warning: PropTypes.bool,
    info: PropTypes.bool,
    positive: PropTypes.bool,
    success: PropTypes.bool,
    error: PropTypes.bool,
    success: PropTypes.bool,
    icon: PropTypes.bool,
    hidden: PropTypes.bool,
    visible: PropTypes.bool,
    floating: PropTypes.bool,
    color: SemanticUiPropTypes.color
  }

  constructor(props) {
    super(props)
    this.dismiss = this.dismiss.bind(this)
  }

  state = {
    dismissed: false
  }

  dismiss() {
    this.setState({dismissed: true})
  }

  render() {
    const { size, className, color } = this.props
    const { dismissed } = this.state

    const classesFromProps = propsToClasses(['hidden', 'visible', 'floating',
                                            'positive', 'success', 'negative', 'error',
                                            'compact', 'info', 'warning', 'icon'], this.props)

    let classes = classNames('ui', classesFromProps,
                             {'hidden': dismissed},
                             size, color, 'message', className)
    let dismissIcon = this.props.dismissible ? <i className='close icon' onClick={this.dismiss} /> : undefined

    return (
      <div {...this.props} className={classes}>
        {dismissIcon}
        {this.props.children}
      </div>)
  }
}
