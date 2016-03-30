import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import propsToClasses from '../../util/propsToClasses'

export default class Form extends Component {

  static propTypes = {
    valid: PropTypes.bool,
    reply: PropTypes.bool,
    loading: PropTypes.bool,
    equalWidth: PropTypes.bool
  }

  render() {
    const classesFromProps = propsToClasses(['reply', 'equalWidth', 'loading'], this.props)
    const classes = classNames('ui', classesFromProps, 'form', {'error' : !this.props.valid})

    return (
      <form className={classes}>
        {this.props.children}
      </form>
    )
  }
}
