import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import propToClasses from '../util/propsToClasses'
import SemanticUiPropTypes from '../common/SemanticUiPropTypes'
import { attachedClasses, alignedClasses, floatedClasses } from '../common/semanticClasses'

export default class Header extends Component {

  static propTypes = {
    element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
    header: PropTypes.string,
    subheader: PropTypes.string,
    icon: PropTypes.bool,
    disabled: PropTypes.bool,
    dividing: PropTypes.bool,
    block: PropTypes.bool,
    inverted: PropTypes.bool,
    justified: PropTypes.bool,
    attached: SemanticUiPropTypes.attached,
    aligned: SemanticUiPropTypes.aligned,
    floated: SemanticUiPropTypes.floated
  }

  render() {
    const { className, element, header, subheader } = this.props
    const subheaderOnly = subheader && (header === undefined)
    const classesFromProps = propToClasses(['icon', 'disabled', 'dividing', 'justified', 'block', 'inverted'], this.props)
    const classes = classNames('ui', classesFromProps, {'sub': subheaderOnly},
                               attachedClasses(this.props), alignedClasses(this.props), floatedClasses(this.props),
                               'header', className)

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
