const propToClasses = (propNames, props) => {
  let classes = []

  propNames.forEach( (prop) => {
    if(props[prop]) {
      classes.push(prop)
    }
  })

  return classes
}

export default propToClasses
