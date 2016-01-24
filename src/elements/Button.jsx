import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import SemanticUiPropTypes from '../common/SemanticUiPropTypes'
import { floatedClasses } from '../common/semanticClasses'

export default class Button extends Component {

  static propTypes = {
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    fluid: PropTypes.bool,
    floated: SemanticUiPropTypes.floated
  }

  render() {
    const { primary, secondary, fluid } = this.props
    const classes = classNames('ui', {'primary': primary},
                               {'secondary': secondary},  {'fluid': fluid}, floatedClasses(this.props),
                               'button', this.props.className)

    return <button className={classes}>{this.props.children}</button>
  }

}
