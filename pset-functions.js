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
//let playerCardScore = 22
//let dealerCardScore = 22
function blackJack(playerCardScore, dealerCardScore) {
  if (playerCardScore > 21 && dealerCardScore > 21) {
      return 0
  } else if (playerCardScore <= 21 && dealerCardScore <= 21) {
      let arrayOne = [playerCardScore, dealerCardScore];
      return Math.max(...arrayOne);
  } else if (playerCardScore > 21 && dealerCardScore <= 21) {
      return dealerCardScore;
  } else if (playerCardScore <= 21 && dealerCardScore > 21) {
      return playerCardScore;
  } else {
      return 'something is broken'
  }
}

//console.log(playerCardScore = 22)
//console.log(dealerCardScore = 22)
const result = blackJack(22, 22)
console.log(result)
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
  const words = phrase.split(' ');
  const result = {}
  //console.log(words)

  words.forEach((word) => {
    if (result[word] === undefined) {
      result[word] = 1
    } else {
      result[word] = result[word] + 1
    }
  })
  return result
}

console.log(wordCount("Humpty Dumpty sat on a wall Humpty Dumpty had a great fall"))
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

function scrabbleScore(word) {
  const letters = word.split('')
  let counter = 0
  for (let i = 0; i <= word.length; i++) {
    if (letters[i] === 'a' || letters[i] === 'e' || letters[i] === 'i' || letters[i] === 'o' || letters[i] === 'u' || letters[i] === 'l' || letters[i] === 'n' || letters[i] === 'r' || letters[i] === 's' || letters[i] === 't') {
    //console.log(1)
    counter += 1
    //console.log(counter)
  } else if (letters[i] === 'd' || letters[i] === 'g') {
    //console.log(2)
    counter += 2
    //console.log(counter)
  } else if (letters[i] === 'b' || letters[i] === 'c' || letters[i] === 'm' || letters[i] === 'p') {
    //console.log(3)
    counter += 3
    //console.log(counter)
  } else if (letters[i] === 'f' || letters[i] === 'h' || letters[i] === 'v' || letters[i] === 'w' || letters[i] === 'y') {
    //console.log(4)
    counter += 4
    //console.log(counter)
  } else if (letters[i] === 'k') {
    //console.log(5)
    counter += 5
    //console.log(counter)
  } else if (letters[i] === 'j' || letters[i] === 'x') {
    //console.log(8)
    counter += 8
    //console.log(counter)
  } else if (letters[i] === 'q' || letters[i] === 'z') {
    //console.log(10)
    counter += 10
    //console.log(counter)
  }
}
console.log(`counter is ${counter}`)
}

scrabbleScore('javascript')
//console.log(answer)

//assigns scores to letters
/*const letters = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
}
let sum
// function to assign score to letter

function assignScore(letter) {
  for (var index in letters) {
    if (Object.keys(letters).indexOf((letters[index].indexOf(letter) !== -1) ? index.toString() : '-1'))
	    !== -1) {
	    return parseInt(index);
    }
  }
}

function scrabbleScore(word) {
    sum = 0;
    if (word === null || word === "") {
	return 0;
    }

    word.toUpperCase().split("").forEach(function(elem, word, array) {
	sum += lettersToScore(elem);
    });
    return sum;

console.log(assignScoredb v ('apple'))


// function to calculate final score



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


isPalindrome = (word) => {
  //turn to all lowercase
  word = word.toLocaleLowerCase();
  // test for palindrome
  return Array.from(word).toString() === Array.from(word).reverse().toString()
}

let word = 'racecar'
console.log(isPalindrome(word))

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

function checkForDuplicates(str) {
  let repeats = /(.)\1/;
  return repeats.test(str)
}

 console.log(checkForDuplicates('anine'))
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
