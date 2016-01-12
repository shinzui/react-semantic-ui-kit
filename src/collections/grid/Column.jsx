import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'
import spellNumber from '../../util/spellNumber'

export default class Column extends Component {

  static propTypes = {
    width: PropTypes.number
  }

  widthClasses() {
    const { width } = this.props

    if(width) return `${spellNumber(width)} wide`
  }

  render() {
    let classes = classNames('column', this.props.className, this.widthClasses())
    return <div className={classes}>{this.props.children}</div>
  }
}
