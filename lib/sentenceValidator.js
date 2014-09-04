"use strict";

// Write a function that takes two arguments as input:
// "words" - an array of English words, e.g. ['dog', 'golf', 'friend', 'do', 'go']
// "sentence" - a string, e.g. 'godoggo'
// and return true or false if the "sentence" can be constructed by
// concatenating words from the array together.
// Ex: 'bigdog' -> false,
// 'doggo' -> true,
// 'dogo' -> true (do and go),
// 'dogolf' -> true,
// 'friendo' -> false
// 'dododododog' -> true

function validateSentence(words, sentence) {
  try {
    isConstructable(words, sentence);
  }
  catch (t){
    return true;
  }

  // no combination of words was able to reduce the string to ''
  return false;
}

function isConstructable(words, sentence) {
  if(sentence.length === 0) {
    // base case:
    // we've chipped away the whole string using
    // some combination of our available words
    throw true;
  }
  words.forEach(function(word) {
    checkWordFit(word, words, sentence);
  });
}

function checkWordFit(word, words, sentence) {
  // this is where you might console.log(sentence);
  if(sentence.indexOf(word) === 0) {
    // recursive case
    var newSentence = sentence.substring(word.length);
    return isConstructable(words, newSentence);
  }else {
    // do nothing
  }
}

