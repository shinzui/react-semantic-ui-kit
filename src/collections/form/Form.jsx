import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import propsToClasses from '../../util/propsToClasses'

export default class Form extends Component {

  static propTypes = {
    valid: PropTypes.bool,
    reply: PropTypes.bool,
    loading: PropTypes.bool,
    equalWidth: PropTypes.bool,
    inverted: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'large'])
  }

  render() {
    const { size, className } = this.props
    const classesFromProps = propsToClasses(['reply', 'equalWidth', 'loading', 'inverted'], this.props)
    const classes = classNames('ui', classesFromProps, size, 'form', {'error' : !this.props.valid}, className)

    return (
      <form className={classes}>
        {this.props.children}
      </form>
    )
  }
}
