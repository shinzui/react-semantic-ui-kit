import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import propsToClasses from '../../util/propsToClasses'

const TableFooter = (props) => {
  const { className, fullWidth, children } = props
  const classes = classNames({'full-width': fullWidth}, className)

  return <tfoot className={classes}>{children}</tfoot>
}

TableFooter.propTypes = {
  fullWidth: PropTypes.bool
}

export default TableFooter
