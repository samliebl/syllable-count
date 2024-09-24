import {
    countSyllables,
    countSyllablesInSentence,
    countSyllablesInArray
} from './index.js';

const textInput = `
The quick brown fox jumped over the lazy dog.
`

let logCountSyllables = countSyllables(textInput);

console.log(logCountSyllables)