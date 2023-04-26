/*----- constants -----*/
const words = ["KANGAROO", "GORILLA", "OTTER", "SLOTH", "ELEPHANT", "PLATYPUS", "GAZELLE", "ZEBRA", "CHIMPANZEE", "CHEETAH", "RHINOCEROS", "BISON", "ARMADILLO", "OCTOPUS", "WALRUS", "OSTRICH", "ORANGUTAN", "DOLPHIN", "LEMUR", "GIRAFFE", "HIPPOPOTAMUS", "FLAMINGO", "HEDGEHOG", "RACCOON", "SCORPION", "BADGER", "HYENA", "PENGUIN", "LLAMA", "GRIZZLY", "COUGAR", "JELLYFISH", "LOBSTER", "SALAMANDER", "GORILLA", "HUMMINGBIRD", "WOODPECKER", "PORCUPINE", "SNAIL", "VULTURE", "NARWHAL", "PLATYPUS", "MONGOOSE", "PELICAN", "REINDEER", "SEAL", "SPIDER", "SWORDFISH", "YAK", "TIGER"]
const MAX_GUESS = 7
/*-----------------------------------*/
/*----- app's state (variables) -----*/
// generate answer by randonmly selection word from words array
let answer

// console.log(getAnswer)
// console.log(answer)



// console.log(answerArray)

const roundWord = document.getElementById('wordAnswer');

roundWord.style.letterSpacing = '10px'

const underScoreEl = document.getElementById('underscore')

underScoreEl.style.letterSpacing = '5px'

/*-----------------------------------*/
/*----- cached element references -----*/
const guessesLeftEl = document.getElementById('guessLeft')
const restartButtonEl = document.getElementById('restartButton')
const resultEl = document.getElementById('message')
const rocketManEl = document.getElementById('rocket')
const allButtonsEl = document.querySelectorAll('.buttons')
const letterButtons = document.querySelectorAll('.letterButton')
const restartEl = document.querySelector('.restart')

/*-----------------------------------*/
/*----- event listeners -----*/
document.querySelector('body').addEventListener('click', handleClick)
restartButtonEl.addEventListener('click', init)

/*-----------------------------------*/
/*----- functions -----*/

function init() {
    restartButtonEl.disabled = false,
    guessedArray = [],
    winner = null,
    guess = null,
    guessesLeftEl.innerText = 7,
    resultEl.innerText = 'Try to guess the word!',
    answer = words[Math.floor(Math.random() * words.length)]
    console.log(answer)
    answerArray = answer.split('')
    // restartButtonEl.style.visibility= "hidden"

    // document.getElementById('A', 'B', 'C', 'D').disabled = false,
    // document.querySelector('.buttons').setAttribute('disabled', false);
    // document.querySelectorAll('buttons').disabled = false
    render()
}

function render() {
    underscore()
    startGame()
    checkWin()
    // restartGame()

}

function underscore() {
    underScoreEl.innerText = Array(answer.length + 1).join('_ ')
}


function handleClick(e) {
    if (e.target.tagName !== 'BUTTON') return
    // console.log(e.target.innerText)
    // let guessTracker = guessedArray.push(e.target.innerText)
    guessTracker(e)
    console.log(guessedArray)
    let answerArray = []
    if (answerArray.indexOf(e.target.innerText) !== -1) {
        console.log('true')
        // checkWin()
    } else {
        if (guessesLeftEl.innerText > 0 && e.target !== restartButtonEl) {
        guessesLeftEl.innerText -=1
        console.log('false')
        spaceMan()
    } 
        checkWin()
}}

function guessTracker(e) {
    const guess = e.target.innerText
    guessedArray.push(guess)
    console.log(guessedArray)
    e.target.disabled = 'disabled'

    const letterGuess = answer.split('').map(guess => (guessedArray.indexOf(guess) >= 0 ? guess : " _ ")).join('')
    underScoreEl.innerHTML = letterGuess
    checkWin()
    console.log(letterGuess)
}


function startGame() {
    letterButtons.forEach((button) => (button.disabled = false)),
    restartButtonEl.style.visibility = winner ? 'visible' : 'hidden'
    if (restartButtonEl.click === true) {
        init()
    }
}

// function restartGame() {

    
// } 


function checkWin() {
    if (guessesLeftEl.innerText === '0') {
        restartButtonEl.style.visibility= "visible"
        // restart game, stop counter //
        console.log('game over')
        resultEl.innerText = 'You lose! Try again.'
        allButtonsEl.disabled = 'disabled'

        // winner === false
    // } else if (answerArray.sort().join(',') === guessedArray.sort().join(',')){
    } else if (underScoreEl.innerText.indexOf("_") === -1) {
        console.log('you win!')
        resultEl.innerText = 'You win! Well played.'
        restartButtonEl.style.visibility= "visible"
        
        // winner === true
    }
    // showResult()
}
console.log(resultEl)

function spaceMan() {
    if (guessesLeftEl.innerText === "7") {
        rocketManEl.src = blank
    } else if (guessesLeftEl.innerText === "6") {
        rocketManEl.src = "image/rocket_1.jpg"
    } else if (guessesLeftEl.innerText === "5") {
        rocketManEl.src = "image/rocket_2.jpg"
    } else if (guessesLeftEl.innerText === "4") {
        rocketManEl.src = "image/rocket_3.jpg"
    } else if (guessesLeftEl.innerText === "3") {
        rocketManEl.src = "image/rocket_4.jpg"
    } else if (guessesLeftEl.innerText === "2") {
        rocketManEl.src = "image/rocket_5.jpg"
    } else if (guessesLeftEl.innerText === "1") {
        rocketManEl.src = "image/rocket_6.jpg"
    } else if (guessesLeftEl.innerText === "0") {
        rocketManEl.src = "image/rocket_7.jpg"        
}
}
// console.log(spaceMan)

// console.log(rocketManEl)
// render()
init()