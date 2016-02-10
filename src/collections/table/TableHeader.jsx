import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

import propsToClasses from '../../util/propsToClasses'

const TableHeader = (props) => {
  const { className, fullWidth, children } = props
  const classes = classNames({'full-width': fullWidth}, className)

  return <thead className={classes}>{children}</thead>
}

TableHeader.propTypes = {
  fullWidth: PropTypes.bool
}

export default TableHeader
