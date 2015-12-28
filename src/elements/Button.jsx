import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Button extends Component {

  static propTypes = {
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    fluid: PropTypes.bool
  }

  render() {
    const { primary, secondary, fluid } = this.props
    const classes = classNames('ui button', {'primary': primary},
                               {'secondary': secondary},  {'fluid': fluid}, this.props.className)

    return <button className={classes}>{this.props.children}</button>
  }

}
