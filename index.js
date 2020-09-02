class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(string) {
    let array = string.split(' ').map(
      word => {
      switch (word) {
        case 'the':
        case 'a':
        case 'an':
        case 'but':
        case 'of':
        case 'and':
        case 'for':
        case 'at':
        case 'by':
        case 'from':
          return word
        default:
          return Formatter.capitalize(word)
      }
    })

    // array[0].toUpperCase()
    return Formatter.capitalize(array.join(' '))
  }
}
