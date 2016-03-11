import { PropTypes } from 'react'

const size = PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'])
const attached = PropTypes.oneOf(['top', 'bottom', 'both'])
const labelAttachment = PropTypes.oneOf(['top', 'bottom', 'right', 'left', 'topLeft', 'bottomLeft', 'topRight', 'bottomRight'])
const aligned = PropTypes.oneOf(['right', 'left', 'center'])
const verticalAndHorizontalAlignment = PropTypes.oneOf(['right', 'left', 'center', 'top', 'bottom', 'center'])
const verticalAlignment = PropTypes.oneOf(['top', 'bottom', 'middle'])
const floated = PropTypes.oneOf(['right', 'left'])
const color = PropTypes.oneOf(['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue',
                              'violet', 'purple', 'pink', 'brown', 'grey', 'black'])
const social = PropTypes.oneOf(['facebook', 'twitter', 'googlePlus' , 'vk', 'linkedIn', 'instagram', 'youtube'])
const fitted = PropTypes.oneOf(['both', 'horizontally', 'vertically'])

const devices = PropTypes.arrayOf(PropTypes.oneOf(['computer', 'tablet', 'mobile', 'largeScreen']))

const SemanticUiPropTypes = {
  attached,
  aligned,
  color,
  devices,
  fitted,
  floated,
  social,
  verticalAlignment,
  verticalAndHorizontalAlignment,
  labelAttachment,
  size
}

export default SemanticUiPropTypes


