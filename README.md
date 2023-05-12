# Anagramer
"Anagramer" is a JavaScript library that allows you to generate anagrams for a given word, as well as count the number of possible anagrams for a word. With "anagramer", you can easily create a random anagram from any word and explore the countless possible combinations of letters that can be made. This library is designed for developers looking to add anagram functionality to their projects and is an excellent resource for games, puzzles, and word-based applications.

# Installation
To install "anagramer", simply clone the repository and add the anagramer.js file to your project.

# Usage
To use "anagramer", call the AnagramBuilder(word) function with a string argument word that represents the word for which you want to generate anagrams. The function returns an array of all possible anagrams for that word. You can also use the AnagramRandomizer(word) function to generate a random anagram for the word.

```const { AnagramBuilder, AnagramRandomizer } = require('./anagramer');

// Generate all anagrams for the word "banana"
const allAnagrams = AnagramBuilder('banana');

// Generate a random anagram for the word "banana"
const randomAnagram = AnagramRandomizer('banana');```
Examples
Here are some examples of how you can use "anagramer" in your projects:

# Word Game
```const { AnagramBuilder } = require('./anagramer');

const word = 'apple';
const allAnagrams = AnagramBuilder(word);

// Check if the player's guess is a valid anagram
const playerGuess = 'papel';
const isValidGuess = allAnagrams.includes(playerGuess);```
# Anagram Puzzle
```const { AnagramRandomizer } = require('./anagramer');

const word = 'elephant';
const anagram = AnagramRandomizer(word);

// Present the player with the anagram to solve
console.log(`Solve this anagram: ${anagram}`);

// Check if the player's guess is correct
const playerGuess = 'elephant';
const isCorrectGuess = playerGuess === word;```
# License
This library is available under the MIT License.
