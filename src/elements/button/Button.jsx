import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'
import propsToClasses from '../../util/propsToClasses'
import { floatedClasses } from '../../common/semanticClasses'

export default class Button extends Component {

  static propTypes = {
    basic: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    fluid: PropTypes.bool,
    floated: SemanticUiPropTypes.floated,
    labeledIcon: PropTypes.bool
  }

  render() {
    const { labeledIcon, className } = this.props
    const classesFromProps = propsToClasses(['primary', 'secondary', 'basic', 'fluid'], this.props)
    const classes = classNames('ui', classesFromProps, {'labeled icon': labeledIcon}, floatedClasses(this.props),
                               'button', className)

    return <button className={classes}>{this.props.children}</button>
  }

}
