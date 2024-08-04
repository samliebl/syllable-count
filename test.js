// test.js

const countSyllables = require('./syllableCounter');

const testWords = [
    { word: 'syllable', expected: 3 },
    { word: 'word', expected: 1 },
    { word: 'beautiful', expected: 3 },
    { word: 'quickly', expected: 2 },
    { word: 'onomatopoeia', expected: 6 }
];

testWords.forEach(test => {
    const result = countSyllables(test.word);
    console.log(`Word: ${test.word}, Syllables: ${result}, Expected: ${test.expected}`);
});
