/*----- constants -----*/
const words = ["KANGAROO", "GORILLA", "OTTER", "SLOTH", "ELEPHANT", "PLATYPUS", "GAZELLE", "ZEBRA", "CHIMPANZEE", "CHEETAH", "RHINOCEROS", "BISON", "ARMADILLO", "OCTOPUS", "WALRUS", "OSTRICH", "ORANGUTAN", "DOLPHIN", "LEMUR", "GIRAFFE", "HIPPOPOTAMUS", "FLAMINGO", "HEDGEHOG", "RACCOON", "SCORPION", "BADGER", "HYENA", "PENGUIN", "LLAMA", "GRIZZLY", "COUGAR", "JELLYFISH", "LOBSTER", "SALAMANDER", "GORILLA", "HUMMINGBIRD", "WOODPECKER", "PORCUPINE", "SNAIL", "VULTURE", "NARWHAL", "PLATYPUS", "MONGOOSE", "PELICAN", "REINDEER", "SEAL", "SPIDER", "SWORDFISH", "YAK", "TIGER"]
const MAX_GUESS = 7
/*-----------------------------------*/
/*----- app's state (variables) -----*/
// generate answer by randonmly selection word from words array
const answer = words[Math.floor(Math.random() * words.length)]
console.log(answer)

const answerArray = answer.split('')

console.log(answerArray)



const roundWord = document.getElementById('wordAnswer');
// roundWord.innerText = answer
roundWord.style.letterSpacing = '10px'
// roundWord.visibility = "hidden"

const underScoreEl = document.getElementById('underscore')
underScoreEl.innerText = Array(answer.length + 1).join('_ ')
// underScoreEl.innerText = Array(answer.length).fill('_').join(' ')
underScoreEl.style.letterSpacing = '5px'

// const underscoreArray = Array(answer.length).fill(' ')




let winner
// let spaceMan
let wrongGuesses
let guess
let guessedArray = []
let letterGuess = ''
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
// init()
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
        console.log('true')
        // checkWin()
    } else {
        if (guessesLeftEl.innerText > 0) {
        guessesLeftEl.innerText -=1
        console.log('false')
        spaceMan()
    } 
        checkWin()
        // call function that displays loosing message, 
    
    // spaceMan()

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










// function guessTracker(e) {
//     const guess = e.target.innerText

//     underScoreEl.innerHTML = letterGuess
//     console.log(letterGuess)
//     const letterGuess = answer.split('').map(guess => (guessedArray.indexOf(guess) >= 0 ? guess : " _ ")).join('')
//     for (let i = 0; i < answerArray.length; i++) {
//         if (answerArray[i] === e.target.innerText) {
//                guessedArray.push(e.target.innerText)
//                e.target.disabled = 'disabled'
            //    for (let j = 0; j < answerArray.length; j++) {
                // roundWord.style.visibility = 'visible'

            //    }

            
            //    underScoreEl.innerText.indexOf[i] = e.target.innerText
            //    underScoreEl.innerText.splice(e.target.innerText[i], 1, e.target.innerText)
    // }
    // }


// function guessTracker(e) {
//     const guessedLetter = e.target.innerText;
//     let foundLetter = false;
    
//     for (let i = 0; i < answerArray.length; i++) {
//         if (answerArray[i] === guessedLetter) {
//             guessedArray.push(guessedLetter);
//             foundLetter = true;
//         }
//     }
    
//     if (foundLetter) {
//         e.target.disabled = true;
//         updateRoundWord();
//     } else {
//         // handle wrong guess
//     }
// }

// function updateRoundWord() {
//     let roundWordString = '';
//     for (let i = 0; i < answerArray.length; i++) {
//         if (guessedArray.includes(answerArray[i])) {
//             roundWordString += answerArray[i];
//         } else {
//             roundWordString += '_';
//         }
//     }
//     roundWord.textContent = roundWordString;
//     console.log(answerArray)
// }

// function guessTracker(e) {
//     const guessedLetter = e.target.innerText
//     let correctLetter = false

//     for (let i = 0; i < answer.length; i++) {
//         if (answerArray[i] === guessedLetter) {
//             answerArray[i] = guessedLetter
//             correctLetter = true
//         }
//     }
//     if (correctLetter) {
//         const showLetter = underscoreArray.join('_ ')
//         underScoreEl.innerText = showLetter
//     }
//     e.target.disabled = true

//     guessedArray.push(guessedLetter)
// }






// for (let i = 0; i < answerArray.length; i++) {
//     if (answerArray.includes(e.target.innerText)) {
//     underScoreEl.innerText.replace('_ ', answerArray[i])
// }
// }


// function showLetter() {

//     for (let i = 0; i < answerArray.length; i++) {
//     if (answerArray.includes(e.target.innerText)) {
//         underScoreEl.innerText = e.target.innerText[i]
//     }
// }

// if (answerArray.includes(e.target.innerText)) {
//     guessedArray.push(e.target.innerText)

// && !guessedArray.includes(e.target.innerText)


// checkWin()

function checkWin() {
    if (guessesLeftEl.innerText === '0') {
        restartButtonEl.style.visibility= "visible"
        // restart game, stop counter //
        console.log('game over')
        resultEl.innerText = 'You lose! Try again.'
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
