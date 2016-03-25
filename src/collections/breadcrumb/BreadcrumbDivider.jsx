import React, { PropTypes } from 'react'

const BreadcrumbDivider = (props) => {
  const { divider } = props
  return (
    <span className='divider'>{divider}</span>
  )
}

BreadcrumbDivider.defaultProps = {
  divider: '/'
}

BreadcrumbDivider.propTypes = {
  divider: PropTypes.string.isRequired
}

export default BreadcrumbDivider
