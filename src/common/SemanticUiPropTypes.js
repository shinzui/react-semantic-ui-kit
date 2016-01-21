import { PropTypes } from 'react'

const size = PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'])
const attached = PropTypes.oneOf(['top', 'bottom', 'both'])
const aligned = PropTypes.oneOf(['right', 'left', 'center'])
const imageAlignment = PropTypes.oneOf(['top', 'bottom', 'middle'])
const floated = PropTypes.oneOf(['right', 'left'])
const color = PropTypes.oneOf(['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue',
                              'violet', 'purple', 'pink', 'brown', 'grey', 'black'])

const SemanticUiPropTypes = {
  size,
  attached,
  aligned,
  color,
  imageAlignment,
  floated
}

export default SemanticUiPropTypes


