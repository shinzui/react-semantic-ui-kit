import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Header extends Component {

  static propTypes = {
    element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
    header: PropTypes.string,
    subheader: PropTypes.string
  }

  render() {
    const { className, element, header, subheader } = this.props
    const subheaderOnly = subheader && (header === undefined)
    const classes = classNames('ui', {'sub': subheaderOnly}, 'header', className)

    let subheaderEl
    let headerText = header

    if(header && subheader) {
      subheaderEl = <div className='sub header'>{subheader}</div>
    } else if(subheader) {
      headerText = subheader
    }

    if(element) {
      return <this.props.element className={classes}>{headerText}{this.props.children}{subheaderEl}</this.props.element>
    } else {
      return <div className={classes}>{headerText}{this.props.children}</div>
    }

  }
}
