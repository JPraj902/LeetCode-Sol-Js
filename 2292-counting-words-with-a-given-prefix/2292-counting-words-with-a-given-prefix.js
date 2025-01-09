var prefixCount = function(words, pref) {
    return words.filter(word => word.startsWith(pref)).length;
};