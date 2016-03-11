export const capitalize = (string) => {
  if(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
}

export const lowercase = (string) => {
  if(string) {
    return string.charAt(0).toLowerCase() + string.slice(1)
  }
}

export const splitAndLowerCamelCase = (string) => {
  const upperToSpaceLower = (match) => {
    return ` ${match.toLowerCase()}`
  }

  if(string) {
    return string.replace(/[A-Z]/g, upperToSpaceLower).trim()
  }
}

