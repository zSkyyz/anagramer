  function Factorial(n) {
    if (n == 0) {
      return 1;
    } else {
      return n * Factorial(n - 1);
    }
  }

  function AnagramCount(word) {
    let count = 1;
    let freq = {};
    
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (freq[char]) {
        freq[char]++;
      } else {
        freq[char] = 1;
      }
    }
    
    for (let key in freq) {
      count *= Factorial(freq[key]);
    }
    
    return Factorial(word.length) / count;
  }

  function AnagramBuilder(word) {
    const anagrams = [];
  
    function generate(current, remaining) {
      if (!remaining) {
        anagrams.push(current);
      } else {
        for (let i = 0; i < remaining.length; i++) {
          generate(current + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
        }
      }
    }
  
    generate("", word);
    return anagrams;
  }
  
  function AnagramRandomizer(word) {
    const anagrams = AnagramBuilder(word);
    const randIndex = Math.floor(Math.random() * anagrams.length);
    return anagrams[randIndex];
  }


module.exports = { AnagramBuilder, AnagramRandomizer, AnagramCount }
