import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import propsToClasses from '../../util/propsToClasses'
import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'
import { attachedClasses, alignedClasses, floatedClasses } from '../../common/semanticClasses'

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
    basic: PropTypes.bool,
    color: SemanticUiPropTypes.color,
    attached: SemanticUiPropTypes.attached,
    aligned: SemanticUiPropTypes.aligned,
    floated: SemanticUiPropTypes.floated
  }

  render() {
    const props = ['basic', 'raised', 'stacked', 'piled', 'vertical', 'disabled', 'loading',
      'secondary', 'tertiary', 'inverted', 'padded', 'compact', 'circular', 'clearing']

    const classesFromProps = propsToClasses(props, this.props)
    const classes = classNames('ui', classesFromProps, this.props.color,
                               attachedClasses(this.props), alignedClasses(this.props), floatedClasses(this.props),
                               {'very padded': this.props.veryPadded},
                               'segment', this.props.className)

    return <div className={classes} style={this.props.style}>{this.props.children}</div>
  }
}
