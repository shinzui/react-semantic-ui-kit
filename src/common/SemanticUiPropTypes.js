import { PropTypes } from 'react'

const size = PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'])
const attached = PropTypes.oneOf(['top', 'bottom', 'both'])
const labelAttachment = PropTypes.oneOf(['top', 'bottom', 'right', 'left', 'topLeft', 'bottomLeft', 'topRight', 'bottomRight'])
const aligned = PropTypes.oneOf(['right', 'left', 'center'])
const verticalAlignment = PropTypes.oneOf(['top', 'bottom', 'middle'])
const floated = PropTypes.oneOf(['right', 'left'])
const color = PropTypes.oneOf(['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue',
                              'violet', 'purple', 'pink', 'brown', 'grey', 'black'])

const SemanticUiPropTypes = {
  attached,
  aligned,
  color,
  floated,
  verticalAlignment,
  labelAttachment,
  size
}

export default SemanticUiPropTypes


