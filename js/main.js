/*----- constants -----*/
const words = ["KANGAROO", "GORILLA", "OTTER", "SLOTH", "ELEPHANT", "PLATYPUS", "GAZELLE", "ZEBRA", "CHIMPANZEE", "CHEETAH", "RHINOCEROS", "BISON", "ARMADILLO", "OCTOPUS", "WALRUS", "OSTRICH", "ORANGUTAN", "DOLPHIN", "LEMUR", "GIRAFFE", "HIPPOPOTAMUS", "FLAMINGO", "HEDGEHOG", "RACCOON", "SCORPION", "BADGER", "HYENA", "PENGUIN", "LLAMA", "GRIZZLY", "COUGAR", "JELLYFISH", "LOBSTER", "SALAMANDER", "GORILLA", "HUMMINGBIRD", "WOODPECKER", "PORCUPINE", "SNAIL", "VULTURE", "NARWHAL", "PLATYPUS", "MONGOOSE", "PELICAN", "REINDEER", "SEAL", "SPIDER", "SWORDFISH", "YAK", "TIGER"]
const MAX_GUESS = 7
/*-----------------------------------*/
/*----- app's state (variables) -----*/
// generate answer by randonmly selection word from words array
let answer
let guessedArray = []
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
    resultEl.innerText = 'Try to guess the animal!',
    rocketManEl.className = 'start'
    answer = words[Math.floor(Math.random() * words.length)]
    console.log(answer)
    answerArray = answer.split('')
    letterButtons.className = 'letterButton'
    spaceMan()
    render()
}

function render() {
    // addClass()
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
// function addClass() {
//     letterButtons.forEach(button => {
//         button.classList.add('letterButton')
//     })}

function guessTracker(e) {
    const guess = e.target.innerText
    guessedArray.push(guess)
    console.log(guessedArray)
    e.target.disabled = 'disabled'

    const letterGuess = answer.split('').map(guess => (guessedArray.indexOf(guess) >= 0 ? guess : " _ ")).join('')
    underScoreEl.innerHTML = letterGuess
    checkWin()
    if (e.target === restartButtonEl) {
        init()
    }
    console.log(letterGuess)
}


function startGame() {
    letterButtons.forEach((button) => (button.disabled = false)),
    restartButtonEl.style.visibility = winner ? 'visible' : 'hidden'
    // for (let i = 0; i < letterButtons.length; i++) {
    //     letterButtons[i].classList.add('letterButton')
    // }
    // if (restartButtonEl.click === true) {
    //     init()
    // }
}


function checkWin() {
    if (guessesLeftEl.innerText === '0') {
        restartButtonEl.style.visibility= "visible"

        console.log('game over')
        resultEl.innerText = 'You lose! Try again.'

        // letterButtons.forEach(button => {
        //     button.classList.add('hidden')
        // })
        // letterButtons.className = 'hidden'
        // allButtonsEl.disabled = 'disabled'


    } else if (underScoreEl.innerText.indexOf("_") === -1) {
        console.log('you win!')
        resultEl.innerText = 'You win! Well played.'
        restartButtonEl.style.visibility= "visible"
        // letterButtons.disabled = 'disabled'
    }

}
console.log(resultEl)

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
        // startGame()
// } startGame()
    }
}
init()