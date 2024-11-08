"use strict";
function countWordOccurrences(sentence, word) {
    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();
    const wordsArray = lowerCaseSentence.split(" ");
    const occurrences = wordsArray.filter((w) => w === lowerCaseWord).length;
    return occurrences;
}
console.log(countWordOccurrences("I love typescript", "typescript"));
