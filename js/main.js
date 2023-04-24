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

const underScore = document.getElementById('underscore')
underScore.innerText = Array(answer.length).join('_ ')




// function checkGuess() {
//     if 
// }





let winner
let spaceMan
let wrongGuesses
let guessedArray

/*-----------------------------------*/
/*----- cached element references -----*/
const guessesLeftEl = document.getElementById('guessLeft')

/*-----------------------------------*/
/*----- event listeners -----*/
document.querySelector('body').addEventListener('click', handleClick)



/*-----------------------------------*/
/*----- functions -----*/

function handleClick(e) {
    if (e.target.tagName !== 'BUTTON') return
    // console.log(e.target.innerText)
    let guessedArray = []
    // let guessTracker = guessedArray.push(e.target.innerText)
    guessedArray.push(e.target.innerText)
    console.log(guessedArray)
    if (answerArray.indexOf(e.target.innerText) !== -1) {
        console.log(true)
    } else {
        guessesLeftEl.innerText -=1
    }

    checkWin()
}

function checkWin() {

}

// function guessedLetters() {
//     let lettersClicked = []
//     lettersClicked.push(e.target.innerText)
//     console.log(lettersClicked)
// } 

