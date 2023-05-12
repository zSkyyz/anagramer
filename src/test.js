const { AnagramBuilder, AnagramRandomizer, AnagramCount } = require("./functions/function");

var word = "Banana"

var anagrambuilder = AnagramBuilder(word)
var anagramcount = AnagramCount(word)
var anagramrandomizer = AnagramRandomizer(word)

console.log("AnagramBuilder => " + anagrambuilder)
console.log("AnagramCount => " + anagramcount)
console.log("AnagramRandomizer => " + anagramrandomizer)
