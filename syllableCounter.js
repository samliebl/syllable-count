// syllableCounter.js

function countSyllables(word) {
    word = word.toLowerCase().trim();
    if (word.length <= 3) { return 1; } // Handling short words

    const vowels = 'aeiouy';
    let syllableCount = 0;
    let lastCharWasVowel = false;

    // Iterate through each character in the word
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            if (!lastCharWasVowel) {
                syllableCount++;
                lastCharWasVowel = true;
            }
        } else {
            lastCharWasVowel = false;
        }
    }

    // Remove silent 'e' at the end
    if (word.endsWith('e')) {
        syllableCount--;
    }

    // Ensure at least one syllable
    syllableCount = Math.max(syllableCount, 1);

    // Special cases
    const specialCases = {
        'beautiful': 3,
        'queue': 1,
        'people': 2,
        'chocolate': 3,
        'fire': 1,
        'forever': 3,
        'onomatopoeia': 6
    };
    if (specialCases[word]) {
        return specialCases[word];
    }

    return syllableCount;
}

module.exports = countSyllables;
