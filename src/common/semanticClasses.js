import spellNumber from '../util/spellNumber'
import { splitAndLowerCamelCase } from '../util/string'

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
  } else if(attached === 'left') {
    return 'left attached'
  } else if(attached === 'right') {
    return 'right attached'
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

export const fittedClasses = (props) => {
  const { fitted } = props

  if(fitted === 'both') {
    return 'fitted'
  } else if(fitted === 'horizontally') {
    return 'horizontally fitted'
  } else if(fitted === 'vertically') {
    return 'vertically fitted'
  }
}

export const itemClasses = (props) => {
  const { items } = props

  if(items) return `${spellNumber(items)} item`
}

export const widthClasses = (props) => {
  const { width } = props

  if(width) return `${spellNumber(width)} wide`
}

export const buttonClasses = (props) => {
  const { buttons } = props

  if(buttons) return spellNumber(buttons)
}

export const sortedClasses = (props) => {
  const { sorted } = props

  if(sorted === 'ascending') {
    return 'sorted ascending'
  } else if(sorted === 'descending') {
    return 'sorted descending'
  }
}

export const socialClasses = (props) => {
  const { social } = props

  if(social === 'googlePlus') {
    return 'google plus'
  } else if(social === 'linkedIn') {
    return 'linkedin'
  } else if(social) {
    return social
  }
}

export const deviceClasses = (props) => {
  const { devices } = props

  if(devices) {
    const classes = []

    devices.forEach( (device) => {
      classes.push(splitAndLowerCamelCase(device))
    })

    return `${classes.join(' ')} only`
  }
}
