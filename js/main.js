/*----- constants -----*/
const words = ["KANGAROO", "GORILLA", "OTTER", "SLOTH", "ELEPHANT", "PLATYPUS", "GAZELLE", "ZEBRA", "CHIMPANZEE", "CHEETAH", "RHINOCEROS", "BISON", "ARMADILLO", "OCTOPUS", "WALRUS", "OSTRICH", "ORANGUTAN", "DOLPHIN", "LEMUR", "GIRAFFE", "HIPPOPOTAMUS", "FLAMINGO", "HEDGEHOG", "RACCOON", "SCORPION", "BADGER", "HYENA", "PENGUIN", "LLAMA", "GRIZZLY BEAR", "COUGAR", "JELLYFISH", "LOBSTER", "SALAMANDER", "GORILLA", "HUMMINGBIRD", "WOODPECKER", "PORCUPINE", "SNAIL", "VULTURE", "NARWHAL", "PLATYPUS", "MONGOOSE", "PELICAN", "REINDEER", "SEAL", "SPIDER", "SWORDFISH", "YAK", "KANGAROO RAT"]
const MAX_GUESS = 7
/*-----------------------------------*/
/*----- app's state (variables) -----*/
// generate answer by randonmly selection word from words array
const answer = words[Math.floor(Math.random() * words.length)]
console.log(answer)

const answerArray = answer.split('')

console.log(answerArray)



const roundWord = document.getElementById('wordAnswer');
roundWord.innerText = answer
roundWord.style.letterSpacing = '10px'

const underScore = document.getElementById('underscore')
underScore.innerText = Array(answer.length + 1).join('_ ')
underScore.style.letterSpacing = '5px'





let winner
// let spaceMan
let wrongGuesses
let guessedArray = []
/*-----------------------------------*/
/*----- cached element references -----*/
const guessesLeftEl = document.getElementById('guessLeft')
const restartButtonEl = document.getElementById('restartButton')
const resultEl = document.getElementById('message')
const rocketManEl = document.getElementById('rocket')

/*-----------------------------------*/
/*----- event listeners -----*/
document.querySelector('body').addEventListener('click', handleClick)

/*-----------------------------------*/
/*----- functions -----*/

// function render() {
//     checkWin()
// }
function handleClick(e) {
    if (e.target.tagName !== 'BUTTON') return
    // console.log(e.target.innerText)
    // let guessTracker = guessedArray.push(e.target.innerText)
    guessTracker(e)
    console.log(guessedArray)
    if (answerArray.indexOf(e.target.innerText) !== -1) {
        console.log(true)
        checkWin()
    } else {
        if (guessesLeftEl.innerText > 0) {
        guessesLeftEl.innerText -=1
        spaceMan()
    } 
        
        // call function that displays loosing message, 
    
    // spaceMan()

}}

function guessTracker(e) {
    if (answerArray.includes(e.target.innerText)) {
        guessedArray.push(e.target.innerText)
    }
}
// && !guessedArray.includes(e.target.innerText)
function checkWin() {
    if (guessesLeftEl.innerText === 0) {
        restartButtonEl.style.visibility= "visible"
        // restart game, stop counter //
        console.log('game over')
        resultEl.innerText = 'You lose! Try again.'
        // winner === false
    } else if (answerArray.sort().join(',') === guessedArray.sort().join(',')){
        console.log('you win!')
        resultEl.innerText = 'You win! Well played.'
        
        // winner === true
    }
    // showResult()
}    
console.log(resultEl)
// function showResult() {
//     if (winner === true) {
//         resultEl.innerText = 'You win! Well played.'
//     } else if (winner === false) {
//         resultEl.innerText = 'You lose! Try again'
//     }
// }

// function changeRocket(e) {
//     if (guessTracker(e) = 6) {
//         rocketMan.src = "image/rocket_1.jpg"
//     }}


// console.log(rocketMan)




// function changeRocket() {
//     if (guessedArray.length = 1) {
//         rocketManEl.src = "image/rocket_1.jpg"
//     }} 

// changeRocket()
// console.log(rocketManEl)

// function spaceMan() {
// if (guessedArray.length = 0) {
//     rocketManEl.src = " "
// } else if (guessedArray.length = 1) {
//     rocketManEl.src = "image/rocket_1.jpg"
// } else if (guessedArray.length = 2) {
//     rocketManEl.src = "image/rocket_3.jpg"
// } else if (guessedArray.length = 3) {
//     rocketManEl.src = "image/rocket_4.jpg"
// } else if (guessedArray.length = 4) {
//     rocketManEl.src = "image/rocket_5.jpg"
// } else if (guessedArray.length = 5) {
//     rocketManEl.src = "image/rocket_6.jpg"
// } else if (guessedArray.length = 6) {
//     rocketManEl.src = "image/rocket_7.jpg"
// } else if (guessedArray.length = 7) {
//     rocketManEl.src = "image/rocket_2.jpg"
// }
// }


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