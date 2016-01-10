import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Rail extends Component {

  static propTypes = {
    position: PropTypes.oneOf(['left', 'right']).isRequired,
    attached: PropTypes.bool,
    dividing: PropTypes.bool,
    internal: PropTypes.bool,
    close: PropTypes.bool
  }

  render() {
    const { position, close, internal, dividing, attached, className } = this.props
    const classes = classNames('ui', position, {'dividing': dividing}, {'internal': internal}, {'attached': attached}, {'close': close}, 'rail', className)

    return (
      <div className={classes}>{this.props.children}</div>
    )
  }
}
