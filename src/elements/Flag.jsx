import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Flag extends Component {

  static propTypes = {
    countryName: PropTypes.string,
    countryCode: PropTypes.string
  }

  render() {
    const { className, countryName, countryCode } = this.props
    const classes = classNames(countryName, countryCode, 'flag')


    return <i className={classes} />
  }
}
