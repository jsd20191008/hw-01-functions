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


function blackJack(playerCardScore,dealerCardScore){
  if (playerCardScore <= 21 && playerCardScore > dealerCardScore){
    return playerCardScore
  }else if (dealerCardScore <= 21 && dealerCardScore > playerCardScore){
    return dealerCardScore
  }else if (playerCardScore <= 21 && dealerCardScore >21 ){
     return playerCardScore
  } else if (dealerCardScore <=21 && playerCardScore >21){
     return dealerCardScore
  }else if (dealerCardScore === playerCardScore){
     return dealerCardScore
  }else {
    return 0
  }
  
}

const result = blackJack (22,22)

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
  const words = phrase.split(" ")
  const occurrence = []

 words.forEach((word) => {
   if (occurrence[word] === undefined) {
    occurrence[word] = 1
  } else {
    occurrence[word] = occurrence[word] + 1
  }

})
  return occurrence
 }

 console.log(wordCount("olly olly in come free"))


// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Scrabble Scorer

Create a function named `scrabbleScore()` that accepts a parameter called "word". The function
should use the following table to calculate the Scrabble score of a provided word:

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

function scrabbleScore(word){
const letters = word.split("")
const onePoint = ["a","e","i","o","u","l", "n", "r", "s", "t"] 
const twoPoints = ["d","g"] 
const threePoints = ["b","c","m","p"] 
const fourPoints = ["f","h","v","w","y"] 
const fivePoints = ["k"] 
const eightPoints = ["j","x"] 
const tenPoints = ["q","z"] 

let finalScore = 0

letters.forEach((letter) => {
  if(onePoint.includes(letter)){
    finalScore+=1
  }else if (twoPoints.includes(letter)){
    finalScore+=2
  }else if (threePoints.includes(letter)){
    finalScore+=3
  }else if (fourPoints.includes(letter)){
    finalScore+=4
  }else if (fivePoints.includes(letter)){
    finalScore+=5 
  }else if (eightPoints.includes(letter)){
    finalScore+=8
  }else if (tenPoints.includes(letter)){
    finalScore+=10
  }
})

console.log(finalScore)
}

scrabbleScore("javascript")



// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Palindromes

Palindromes are words which read the same forward as backwards. For example, "madam" and "noon" are both palindromes.

Create a function named `isPalindrome()` that accepts a parameter called "word". The function will return true 
if the word is a palindrome and false if it is not.

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

function isPalindrome(word){
const reverseWord = word.split("").reverse().join("")
console.log(reverseWord)

if(word === reverseWord){
  return true
}else {
return false}
}

console.log(isPalindrome("noon"))
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



function doubleLetters(word){
  const letters = word.split("")
  console.log(letters)
  
  let result = false

  letters.forEach((letter, index) => {
    if (letter === letter[index ++]) {
      result = true

    }
  })

  return result
}


console.log(doubleLetters("loop"))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
