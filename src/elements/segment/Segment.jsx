import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import propsToClasses from '../../util/propsToClasses'

export default class Segment extends Component {

  static propTypes = {
    raised: PropTypes.bool,
    stacked: PropTypes.bool,
    piled: PropTypes.bool,
    vertical: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    inverted: PropTypes.bool,
    padded: PropTypes.bool,
    veryPadded: PropTypes.bool,
    compact: PropTypes.bool,
    secondary: PropTypes.bool,
    tertiary: PropTypes.bool,
    circular: PropTypes.bool,
    clearing: PropTypes.bool,
    attached: PropTypes.oneOf(['top', 'bottom', 'both']),
    aligned: PropTypes.oneOf(['right', 'left', 'center']),
    floated: PropTypes.oneOf(['right', 'left'])
  }

  attachedClasses() {
    const { attached } = this.props

    if(attached === 'top') {
      return 'top attached'
    } else if(attached === 'bottom') {
      return 'bottom attached'
    } else if(attached === 'both') {
      return 'attached'
    }
  }

  alignedClasses() {
    const { aligned } = this.props

    if(aligned === 'right') {
      return 'right aligned'
    } else if(aligned === 'left') {
      return 'left aligned'
    } else if(aligned === 'center') {
      return 'center aligned'
    }
  }

  floatedClasses() {
    const { floated } = this.props

    if(floated === 'right') {
      return 'right floated'
    } else if(floated === 'left') {
      return 'left floated'
    }
  }

  render() {
    const props = ['raised', 'stacked', 'piled', 'vertical', 'disabled', 'loading',
      'secondary', 'tertiary', 'inverted', 'padded', 'compact', 'circular', 'clearing']

    const classesFromProps = propsToClasses(props, this.props)
    const classes = classNames('ui', classesFromProps,
                               this.attachedClasses(), this.alignedClasses(), this.floatedClasses(),
                               'segment', this.props.className)

    return <div className={classes} style={this.props.style}>{this.props.children}</div>
  }
}
