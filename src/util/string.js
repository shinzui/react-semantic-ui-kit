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
