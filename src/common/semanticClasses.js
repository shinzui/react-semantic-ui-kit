import spellNumber from '../util/spellNumber'

export const attachedClasses = (props) => {
  const { attached } = props

  if(attached === 'top') {
    return 'top attached'
  } else if(attached === 'bottom') {
    return 'bottom attached'
  } else if(attached === 'both') {
    return 'attached'
  } else if(attached === 'topRight') {
    return 'top right attached'
  } else if(attached === 'topLeft') {
    return 'top left attached'
  } else if(attached === 'bottomRight') {
    return 'bottom right attached'
  } else if(attached === 'bottomLeft') {
    return 'bottom left attached'
  }
}

export const alignedClasses = (props) => {
  const { aligned } = props

  if(aligned === 'right') {
    return 'right aligned'
  } else if(aligned === 'left') {
    return 'left aligned'
  } else if(aligned === 'center') {
    return 'center aligned'
  } else if(aligned === 'middle') {
    return 'middle aligned'
  } else if(aligned === 'top') {
    return 'top aligned'
  } else if(aligned === 'bottom') {
    return 'bottom aligned'
  }
}

export const floatedClasses = (props) => {
  const { floated } = props

  if(floated === 'right') {
    return 'right floated'
  } else if(floated === 'left') {
    return 'left floated'
  }
}

export const columnClasses = (props) => {
  const { columns } = props

  if(columns) return `${spellNumber(columns)} column`
}
