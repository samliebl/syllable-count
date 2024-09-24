# syllable-count

## Description

Basically a simple interface for the actual [syllable](https://github.com/words/syllable) npm module.

## Usage

```sh
npm install syllable-count
```

```js
import {
    countSyllables,
    countSyllablesInSentence,
    countSyllablesInArray
} from 'syllable-count';

const textInput = `
The quick brown fox jumped over the lazy dog.
`

let logCountSyllables = countSyllables(textInput);

console.log(logCountSyllables)
```

## Acknowledgements

syllable  
[Website](https://words.github.io/syllable/)
[GitHub](https://github.com/words/syllable)