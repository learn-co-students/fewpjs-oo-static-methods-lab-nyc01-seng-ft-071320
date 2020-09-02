class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    const exceptions = ["the", "a", "an","but", "of","and","for","at","by","from"];
    let words = string.split(' ');
    words[0] = words[0][0].toUpperCase() + words[0].slice(1);
    words = words.map(word => {
        if (!exceptions.includes(word)) {
            word = word[0].toUpperCase() + word.slice(1);
        };
        return word;
    });
    return words.join(' ');
};
}