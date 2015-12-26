const spellNumber = (number) => {
  const intNumber = parseInt(number, 10)

  const nums = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen']

  return nums[intNumber - 1]
}

export default spellNumber
