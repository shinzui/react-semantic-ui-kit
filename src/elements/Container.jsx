import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import SemanticUiPropTypes from '../common/SemanticUiPropTypes'
import { alignedClasses }from '../common/semanticClasses'

export default class Container extends Component {

  static propTypes = {
    text: PropTypes.bool,
    fluid: PropTypes.bool,
    justified: PropTypes.bool,
    aligned: SemanticUiPropTypes.aligned
  }

  render() {
    const { text, fluid, justified, className } = this.props
    const classes = classNames('ui', {'fluid': fluid}, {'text': text},
                             alignedClasses(this.props), {'justified': justified},
                             'container', className)

    return <div className={classes}>{this.props.children}</div>
  }

}
