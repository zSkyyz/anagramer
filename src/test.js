const anagramer = require("./functions/function");

var word = "Bulldog"

let anagrambuilder = anagramer.AnagramBuilder(word)
let anagramcount = anagramer.AnagramCount(word)
let anagramrandom = anagramer.AnagramRandom(word)

console.log("AnagramBuilder => " + anagrambuilder)
console.log("AnagramCount => " + anagramcount)
console.log("AnagramRandom => " + anagramrandom)