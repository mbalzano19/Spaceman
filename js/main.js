/*----- constants -----*/
const words = ["KANGAROO", "GORILLA", "OTTER", "SLOTH", "ELEPHANT", "PLATYPUS", "GAZELLE", "ZEBRA", "CHIMPANZEE", "CHEETAH", "RHINOCEROS", "BISON", "ARMADILLO", "OCTOPUS", "WALRUS", "OSTRICH", "ORANGUTAN", "DOLPHIN", "LEMUR", "GIRAFFE", "HIPPOPOTAMUS", "FLAMINGO", "HEDGEHOG", "RACCOON", "SCORPION", "BADGER", "HYENA", "PENGUIN", "LLAMA", "GRIZZLY", "COUGAR", "JELLYFISH", "LOBSTER", "SALAMANDER", "GORILLA", "HUMMINGBIRD", "WOODPECKER", "PORCUPINE", "SNAIL", "VULTURE", "NARWHAL", "PLATYPUS", "MONGOOSE", "PELICAN", "REINDEER", "SEAL", "SPIDER", "SWORDFISH", "YAK", "TIGER"]
const MAX_GUESS = 7
/*-----------------------------------*/
/*----- app's state (variables) -----*/
let answer
let guessedArray = []
/*-----------------------------------*/
/*----- cached element references -----*/
const guessesLeftEl = document.getElementById('guessLeft')
const restartButtonEl = document.getElementById('restartButton')
const resultEl = document.getElementById('message')
const rocketManEl = document.getElementById('rocket')
const allButtonsEl = document.querySelectorAll('.buttons')
const letterButtons = document.querySelectorAll('.letterButton')
const restartEl = document.querySelector('.restart')
const roundWord = document.getElementById('wordAnswer');
const underScoreEl = document.getElementById('underscore')
/*-----------------------------------*/
/*----- event listeners -----*/
document.querySelector('body').addEventListener('click', handleClick)
restartButtonEl.addEventListener('click', init)
/*-----------------------------------*/
/*----- functions -----*/
// sets the initial state of the game
function init() {
    restartButtonEl.disabled = false
    guessedArray = []
    winner = null
    guess = null
    guessesLeftEl.innerText = 7
    resultEl.innerText = 'Try to guess the animal!'
    rocketManEl.className = 'start'
    answer = words[Math.floor(Math.random() * words.length)]
    answerArray = answer.split('')
    letterButtons.className = 'letterButton'
    spaceMan()
    render()
}

function render() {
    underscore()
    startGame()
    checkWin()
}

function underscore() {
    // creates the the same amount of underscores as there are letters in the answer word
    underScoreEl.innerText = Array(answer.length + 1).join('_ ')
    underScoreEl.style.letterSpacing = '5px'
}

function handleClick(e) {
    if (e.target.tagName !== 'BUTTON') return
    guessTracker(e)
    // if clicked letter is found in the answer array, nothing happens to wrong guess tracker
    if (answerArray.indexOf(e.target.innerText) !== -1) return
    else {
        // if clicked letter is not found in answer array, and clicked element is not the restart button,
        // the wrong guesses left tracker is reduced by 1
        // the spaceman function is then called to change the rocketship image displayed based on how many wrong guesses
        // have been made
        if (guessesLeftEl.innerText > 0 && e.target !== restartButtonEl) {
                guessesLeftEl.innerText -=1
                spaceMan()
    } 
    checkWin()
}}

// this function tracks the player guess
function guessTracker(e) {
    const guess = e.target.innerText
    // letter player clicks is pushed into an array to track the letters they have guessed
    guessedArray.push(guess)
    // letter player clicks is disabled after it is clicked once
    e.target.disabled = 'disabled'
    // if the guessed letter is in the answer word, the underscore for that letter is changed to a letter
    // if the guessed letter is not in the answer, the underscores remain the same
    const letterGuess = answer.split('').map(guess => (guessedArray.indexOf(guess) >= 0 ? guess : " _ ")).join('')
    underScoreEl.innerHTML = letterGuess
    checkWin()
    // if restart button is clicked, game is initialized
    if (e.target === restartButtonEl) {
        init()
    }
}

// this function sets the button for the start of the game
// sets all letter buttons to enabled, and restart button to hidden
function startGame() {
    letterButtons.forEach((button) => (button.disabled = false)),
    restartButtonEl.style.visibility = winner ? 'visible' : 'hidden'
}

// this function checks for a win
function checkWin() {
// If there are 0 wrong guesses left, player loses
    if (guessesLeftEl.innerText === '0') {
        restartButtonEl.style.visibility= "visible"
        resultEl.innerText = 'You lose! Try again.'
// If there arr no underscores left in underScoreEl, all letters have been guessed, and player wins
    } else if (underScoreEl.innerText.indexOf("_") === -1) {
        resultEl.innerText = 'You win! Well played.'
        restartButtonEl.style.visibility= "visible"
    }
}

// this function changes the rocketship image displayed on the screen
// the rocketship image changes based on how many wrong guesses the player has left
// once there are no wrong guesses left, the rocketship element class is changed to invoke the animation
function spaceMan() {
    if (guessesLeftEl.innerText === "7") {
        rocketManEl.src = "image/rocket_0.png" 
    } else if (guessesLeftEl.innerText === "6") {
        rocketManEl.src = "image/rocket_1.png"
    } else if (guessesLeftEl.innerText === "5") {
        rocketManEl.src = "image/rocket_2.png"
    } else if (guessesLeftEl.innerText === "4") {
        rocketManEl.src = "image/rocket_3.png"
    } else if (guessesLeftEl.innerText === "3") {
        rocketManEl.src = "image/rocket_4.png"
    } else if (guessesLeftEl.innerText === "2") {
        rocketManEl.src = "image/rocket_5.png"
    } else if (guessesLeftEl.innerText === "1") {
        rocketManEl.src = "image/rocket_6.png"
    } else if (guessesLeftEl.innerText === "0") {
        rocketManEl.src = "image/rocket_7.png" 
        rocketManEl.className = 'slide-out-blurred-top'  
    }
}

init()