import { PropTypes } from 'react'

const size = PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'])
const attached = PropTypes.oneOf(['top', 'bottom', 'both'])
const aligned = PropTypes.oneOf(['right', 'left', 'center'])
const floated = PropTypes.oneOf(['right', 'left'])

const SemanticUiPropTypes = {
  size,
  attached,
  aligned,
  floated
}

export default SemanticUiPropTypes


