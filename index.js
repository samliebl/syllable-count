import { syllable } from 'syllable';
import { exceptions } from './syllableExceptions.js';

// Function to count syllables in a word with custom corrections
const customSyllableCount = (word) => {
    return exceptions[word.toLowerCase()] || syllable(word);
};

// Function to count syllables in a sentence
const countSyllablesInSentence = (sentence) => {
    const words = sentence.split(/\s+/);
    return words.reduce((total, word) => total + customSyllableCount(word), 0);
};

// Function to count syllables in an array of sentences
const countSyllablesInArray = (sentences) => {
    return sentences.map(sentence => ({
        sentence,
        syllables: countSyllablesInSentence(sentence)
    }));
};


// Export the functions to use them in other modules
export {
    customSyllableCount as countSyllables,
    countSyllablesInSentence,
    countSyllablesInArray
};