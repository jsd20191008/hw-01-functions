/***********
Problem: Blackjack

Create a function named `blackJack()` that accepts two parameters:
playerCardScore (number)
dealerCardScore (number)

Return whichever value is nearest (or equal) to 21 without going over. Return 0 if both scores go over 21.

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. blackJack(19, 21)

   Result: 21

2. blackJack(22, 22)

   Result: 0

3. blackJack(19, 22)

   Result: 19

3. blackJack(21, 21)

   Result: 21

************/
console.log('Problem 1:')

// Add your code below this line


// Simulate blackjack hands and return the greatest valid
// result of the winner (or winners in a draw)
function blackJack(playerCardScore, dealerCardScore) {
  // If both players exceed 21 return 0 - no winners
  if (playerCardScore > 21 && dealerCardScore > 21) {
    return 0
  }
  // If player busts the dealer wins
  // If the dealer busts the player wins
  // If both numbers are valid, above zero, have not busted (above),
  // then return the highest number - the winner, otherwise indicate
  // an invalid entry
  if (playerCardScore > 21) {
    return dealerCardScore
  } else if (dealerCardScore > 21) {
    return playerCardScore
  } else if (playerCardScore > 0 && dealerCardScore > 0) {
      let highScore = Math.max(playerCardScore, dealerCardScore)
      return(highScore)
  } else {console.log('Invalid entry')}
}

// Log all Test Cases to the console
console.log(blackJack(19, 21))
console.log(blackJack(22, 22))
console.log(blackJack(19, 22))
console.log(blackJack(21, 21))


// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Word Counter

Create a function named `wordCount()` that accepts a parameter called "phrase" which counts the number of occurrences of each word in that phrase

For example, the phrase: "olly olly in come free" should result in output that looks similar to the following:

```
olly: 1
in: 1
come: 1
free: 1
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. wordCount("olly olly in come free")

   Result:

   olly: 2
   in: 1
   come: 1
   free: 1

2. wordCount("Baby shark, doo doo doo doo doo doo")

   Result:

   baby: 1
   shark: 1
   doo: 6

3. wordCount("Humpty Dumpty sat on a wall Humpty Dumpty had a great fall")

   Result:

   humpty: 2
   dumpty: 2
   sat: 1
   a: 2
   on: 1
   fall: 1
   great: 1
   had: 1
   wall: 1
************/
console.log('Problem 2:')

// Add your code below this line

function wordCount(phrase) {
  // Split phrase into an Array
  splitPhrase = phrase.split(" ")

  // Dedupe words in the Array
  const dedupedWords = splitPhrase.filter(function(i, index){
    return splitPhrase.indexOf(i) >= index;
  })

  // Convert deduped Array into an object and assign values of zero to each word
  const phraseObject = dedupedWords.reduce((o, key) => Object.assign(o, {[key]: 0}), {})
 
  // Count words in the array using the object
  splitPhrase.forEach(word => {
    phraseObject[word] = phraseObject[word] + 1
  });

  return phraseObject
}

// Test all the things
let wordOutput = wordCount("olly olly in come free")
console.log(wordOutput)

wordOutput = wordCount("Baby shark, doo doo doo doo doo doo")
console.log(wordOutput)

wordOutput = wordCount("Humpty Dumpty sat on a wall Humpty Dumpty had a great fall")
console.log(wordOutput)


// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Scrabble Scorer

Create a function named `scrabbleScore()` that accepts a parameter called "word". The function should use the following table to calculate the Scrabble score of a provided word:

```
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. scrabbleScore("cabbage")
   Note: c = 3, a = 1 (twice), b = 3 (twice), g = 2, e = 1

   Expected Result: 14

2. scrabbleScore("javascript")

   Expected Result: 24

3. scrabbleScore("function")

   Expected Result: 13

************/
console.log('Problem 3:')

// Add your code below this line

// Variables - Object for the Scoring Key for Scrabble [TM] & Final Score Tally
const scoringKey = {a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1, j: 8, k: 5, l: 1, m: 3, n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1, u: 1, v: 4, w: 4, x: 8, y: 4, z: 10}


// Tally the final word score for a given word
function scrabbleScore(word) {

  // Split the word into an array
  const wordArray = word.split('')
  let finalScore = 0

  // Loop through each letter and add value to Final Score
  wordArray.forEach(letter => {
    finalScore = finalScore + scoringKey[letter]
  });
  return finalScore
}

// Test Cases
console.log(scrabbleScore("cabbage"))
console.log(scrabbleScore("javascript"))
console.log(scrabbleScore("function"))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Palindromes

Palindromes are words which read the same forward as backwards. For example, "madam" and "noon" are both palindromes.

Create a function named `isPalindrome()` that accepts a parameter called "word". The function will return true if the word is a palindrome and false if it is not.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. isPalindrome("noon")

   Expected Result: true

2. isPalindrome("racecar")

   Expected Result: true

3. isPalindrome("moon")

   Expected Result: false

4. isPalindrome("run")

   Expected Result: false

************/
console.log('Problem 4:')

// Add your code below this line

function isPalindrome(word) {

  // Split the word's letters into an array and count its length
  wordArray = word.split('')
  wordLength = wordArray.length

  // Variables
  let wordStart = 0
  let wordEnd = wordLength - 1
  let palindrome = true

  // Loop through the word Array comparing each successive first & last character
  // and toggle palindrome to false if it is not one
  wordArray.forEach(palLetter => {

    if (wordArray[wordStart] !== wordArray[wordEnd]) {
      palindrome = false
      return false
    } else if (wordArray[wordStart] === wordArray[wordEnd] && wordStart === wordLength - 1) {
      return true
    }
    wordStart = wordStart + 1
    wordEnd = wordEnd - 1
  });
  return palindrome
}

// Test cases
let palResult = isPalindrome("noon")
console.log(palResult)
palResult = isPalindrome("racecar")
console.log(palResult)
palResult = isPalindrome("moon")
console.log(palResult)
palResult = isPalindrome("run")
console.log(palResult)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Double Letter Checker

Create a function that takes a "word" as a parameter and returns true if the word has two consecutive identical letters.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. doubleLetters("loop")

   Expected Result: true

2. doubleLetters("rune")

   Expected Result: false

3. doubleLetters("apple")

   Expected Result: true

************/
console.log('Problem 5:')

// Add your code below this line

// Returns true if there are two consecutive letters that are identical
function doubleLetters(word) {
  wordArray = word.split('')
  wordLength = wordArray.length
  let lastLetter = ''
  let isDoubleLetter = false

// Go through each letter in the word
// If the current letter matches the last letter
// toggle to true - otherwise it is false
wordArray.forEach(letter => {
  if (lastLetter === letter) {
    isDoubleLetter = true
  }
  lastLetter = letter
});
  return isDoubleLetter
}

// Test Cases
console.log(doubleLetters("loop"))
console.log(doubleLetters("rune"))
console.log(doubleLetters("apple"))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
