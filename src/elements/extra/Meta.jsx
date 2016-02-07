import React, { PropTypes } from 'react'

import classNames from 'classnames'

import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'
import { floatedClasses } from '../../common/semanticClasses'

const Meta = (props) => {
  const { className, children, floated } = props
  const classes = classNames(floatedClasses(props), 'meta', className)

  return <div className={classes}>{children}</div>
}

Meta.PropTypes = {
  floated: SemanticUiPropTypes.floated
}

export default Meta
