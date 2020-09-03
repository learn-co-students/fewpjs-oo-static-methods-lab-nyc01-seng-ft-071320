class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z- ']+/g, '')
  }

  static titleize(title){
    const exception = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let splitTitle = title.split(" ")
    let formattedTitle = this.capitalize(splitTitle.shift())
    for(let word of splitTitle){
      if(!(exception.includes(word))){
        formattedTitle += " "+this.capitalize(word)
      }else 
      formattedTitle += " "+word
    }
    return formattedTitle
  }
}