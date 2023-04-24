# Planning for Spaceman

## Analyze the app's functionality

As a user...
- I want to be able to play Spaceman
- I want to be able to guess letters that are in the word and know if the guesses are correct or not
- I want to know that I got the word right if I clicked the included letters
- If I guess a letter correctly, I want the letter to display in the world field, so that I know where in the word that letter is
- After guessing a letter, I want the button for that letter I guessed to change so that I can no longer click it
- I want to know if I made too many incorrect guesses and therefore lost the game
- If I win or lose the game, I want to be able to restart the game and play again
- I want to see a graphic of a spaceman (hangman) that changes when I guess incorrectly
- I want to be able to see how many guesses I have made, and how many guesses I have left before the game is over

## App's functionality continued

- A word will be chosen at random from an array of predetermined words
- The user will be able to click any of the letter buttons on the screen to make a guess
- If the letter is in the word, it will then appear down on word section, filling the section with the letter in its correct place in the word
- If the letter is not in the word, the number of wrong guesses will increase by 1
- After clicking a letter, it cannot be clicked again
- If the user clicks all of the correct letters in the word, they win the game
- If the user makes too many incorrect guesses, they lose
- After the user wins or loses the game, they will have the option to restart by clicking the restart button that will appear
- If they restart the game, a new word will be selected, and their number of incorrect guesses will be reset to 0

## Think about the overall design (look & feel) of the app

- I want the game to have a minimilist design
- There will be a board that includes every alphabet letter, and the user will be able to click on every one of these letters
- There will be a section where correctly guessed letters will be displayed
- There will be a section that includes the spaceman/hangman graffic 
- There will be a restart button that will appear once the game is over
- There will be a counter feature that will show the number of guesses made and the number of max guesses

- Font
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Teko&display=swap" rel="stylesheet">
```
```css
font-family: 'Teko', sans-serif;
```


## Wireframe the UI

![Imgur](https://imgur.com/HaVap0w)
https://imgur.com/HaVap0w

<img src=".image/wireframe.jpeg"/>
<img src="https://imgur.com/HaVap0w"/>
![alt text](.image/wireframe.jpeg)

## Psuedocode

1) Define required constants:
  1.1) Define the max number of guesses allowed for each round of the game. This number will not change
  1.2) Define an array that includes all of the possible words that can be chosen for the round

2.) Define required variables used to track the state of the game:
    2.1) Use an answer variable to track the correct word for the round
    2.2) Use a guess variable to track what buttons the player has clicked
    2.3) Use a numGuesses variable to track how many buttons the user has clicked
    2.4) Use a wrongGuesses variable to track how many incorrect guesses player has made
    2.5) Use a winner variable to track the conditions of a win - correctly guessed word before running out of guesses
    2.6) Use a spaceMan variable to track the status of the spaceMan image that is being displayed. With each wrong guess, the image of the     spaceMan changes and becomes more developed

3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant:
  3.1) answer variable
  3.2) guess variable
  3.2) numGuesses variable
  3.3) array of random words

  4) Upon loading the app should:
  4.1) Initialize the state variables:
    4.1.1) Initialize the answer word by choosing a random word from the array of possible words
    4.1.2) Initialize the spaceman graphic to its initial state before any wrong guesses have been made
    4.1.3) Initialize the guess counter to 0 to show that no wrong guesses have been made
    4.1.4) Initialize the guess section to show empty spaces for the answer word of the round
    4.1.5) Initialize winner to null to represent that there is no winner yet. Winner will hold true or false as there is only one player, and there will be no ties.
  4.2) Render those state variables to the page:
    4.2.1) Render the board:
      4.2.1.1) Loop over the object that contains the buttons and their corresponding letters, and for each iteration:
        4.2.1.1.2) Use the index of the iteration to access the mapped value from the object.
        4.2.1.1.3) Check to see object value (letter) is in the answer
        4.3.1.1.3) Change the color of the clicked button and make it so it no longer can be clicked
  4.3) Wait for the user to click a square

5) Handle a player clicking a square:
    5.1) Obtain the letter of the clicked square by either:
        5.1.1) "Extracting" the letter from an id assigned to the element in the HTML, or
        5.1.2) Looping through the cached letter elements using a for loop and breaking out when the current square element equals the event object's target.
    5.2) Change the color of the letter square and remove the ability to click it again in the game
    5.3) Check to see if the selected letter is included within the chosen answer word for the round
        5.3.1) If the letter is included withoin the answer word, insert the letter into the empty word section in the corresponding position the letter in that word is in
        5.3.2) If the letter is not in the answer word, update the wrong guess tracker to the current number of wrong guesses show that the player guessed incorrectly
    5.4) If every letter in the word is guessed while the number of incorrect guesses is below the max number of incorrect guesses, end the game and show a message that tells the player they won
    5.5) If the number of incorrect guesses reaches the max number of incorrect guesses and every letter in the word has not been correctly guessed, end the game and tell the player that they lost

6) Handle a player clicking the replay button:
  6.1) Do steps 4.1 (initialize the state variables) and 4.2 (render).

## Identify the application's state (data)

- answer - contains randomly chosen word from words array
```js
let answer
```
 - Winner var - null || true || false
 ```js
 let winner
 ```
 - spaceMan var - spaceman image will chance based on number of wrong guesses by player
 ```js
 let spaceMan
```
- wrongGuesses - number of wrong guesses by player, which will be used to update counter and spaceman
```js
let wrongGuesses
```