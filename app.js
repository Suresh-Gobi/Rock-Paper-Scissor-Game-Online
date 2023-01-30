const computer = document.getElementById('computer')
const user = document.getElementById('user')
const result = document.getElementById('result')
const possibleChoice = document.querySelectorAll('img')
let userChoice
let computerChoice
let geResult


possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChoice = e.target.id
    user.innerHTML = userChoice
    generate()
    getResult()
}))

function generate() {
    const randomNumber = Math.floor(Math.random() * 3 + 1)
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = 'Rock'
    }

    if (randomNumber === 2) {
        computerChoice = 'Paper'
    }

    if (randomNumber === 3) {
        computerChoice = 'Scissor'
    }

    computer.innerHTML = computerChoice

}

function getResult() {
    if (computerChoice == 'Rock' && userChoice == 'Paper'){
        geResult = 'You Win'
    }
    if (computerChoice == 'Paper' && userChoice == 'Rock'){
        geResult = 'You Lose'
    }
    if (computerChoice == 'Paper' && userChoice == 'Scissor'){
        geResult = 'You Win'
    }
    if (computerChoice == 'Scissor' && userChoice == 'Paper'){
        geResult = 'You Lose'
    }
    if (computerChoice == 'Scissor' && userChoice == 'Rock'){
        geResult = 'You Win'
    }
    if (computerChoice == 'Rock' && userChoice == 'Rock'){
        geResult = 'Draw'
    }
    if (computerChoice == 'Paper' && userChoice == 'Paper'){
        geResult = 'Draw'
    }
    if (computerChoice == 'Paper' && userChoice == 'Paper'){
        geResult = 'Draw'
    }
    result.innerHTML = geResult
}
