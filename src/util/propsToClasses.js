import { splitAndLowerCamelCase } from './string'

const propToClasses = (propNames, props) => {
  let classes = []

  propNames.forEach( (prop) => {
    if(props[prop]) {
      classes.push(splitAndLowerCamelCase(prop))
    }
  })

  return classes
}

export default propToClasses
