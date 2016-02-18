import React, { PropTypes } from 'react'

import classNames from 'classnames'

import SemanticUiPropTypes from '../../common/SemanticUiPropTypes'
import { floatedClasses } from '../../common/semanticClasses'

const MetaData = (props) => {
  const { className, children, floated } = props
  const classes = classNames(floatedClasses(props), 'metadata', className)

  return <div className={classes}>{children}</div>
}

MetaData.PropTypes = {
  floated: SemanticUiPropTypes.floated
}

export default MetaData
