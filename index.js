class Formatter {
  //add static methods here
  static capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    let articles = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let words = string.split(' ')
    let bigWords = words.map(w => {
      if (articles.includes(w)) {
        return w
      } else {return this.capitalize(w)}  
    })
    return this.capitalize(bigWords[0]) + " " + bigWords.slice(1).join(" ")
    return bigWords.join(' ')
  }
}
