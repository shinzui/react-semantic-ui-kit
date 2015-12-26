import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Button extends Component {

  static propTypes = {
    primary: PropTypes.bool,
    secondary: PropTypes.bool
  }


  render() {
    const { primary, secondary } = this.props
    const classes = classNames('ui button', {'primary': primary}, {'secondary': secondary},  this.props.className)

    return <button className={classes}>{this.props.children}</button>
  }

}
