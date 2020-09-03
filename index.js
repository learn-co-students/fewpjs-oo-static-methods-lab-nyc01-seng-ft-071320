class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let words = string.split(' ')
    let array = words.map(word => {
      if (exceptions.includes(word)) {
        return word;
      } else {
        return this.capitalize(word);
      }
    })
    return this.capitalize(array[0]) + " " + array.slice(1).join(" ")
    return array.join(' ')
  }
}