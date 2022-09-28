const numgrid = document.querySelector('.numgrid')
const nums = [100, 450, 56, 45, 39, 689, 235, 2, 1000, 3490]

nums.forEach(num => {
    let btn = `<button class="num">${num}</button>`
    numgrid.innerHTML += btn
})

const numbtns = document.querySelectorAll('.num')
const msg = document.querySelector('.msg')
const yourScoreCard = document.querySelector('.yours h2')
const computerScoreCard = document.querySelector('.computers h2')

let yourScore = 0
let computerScore = 0
let yourChosenNum = null
let computerChosenNum = null


function chooseRandomNum () {
    computerChosenNum = nums[Math.floor(Math.random() * nums.length)]
}

chooseRandomNum() // Computer chooses a number from the array

function determineWinner () {
    if (yourChosenNum === computerChosenNum) {
        yourScore += 50
        nums.splice(nums.indexOf(yourChosenNum), 1)
        chooseRandomNum()
        msg.textContent = 'Correct'
        return true
    } else {
        computerScore += 50
        msg.textContent = 'Wrong'
        return false
    }
}

function handleGameOver () {
    if (nums.length === 0) {
        let whoWon = computerScore > yourScore ? 'Computer Wins' : 'You Win'
        alert(`Game Over!\n ${whoWon}`)
    }
}

numbtns.forEach(btn => {
    btn.onclick = function () {
        yourChosenNum = Number(btn.textContent)
        let youWonThisRound = determineWinner()
        if (youWonThisRound) {
            btn.remove()
        }
        yourScoreCard.textContent = yourScore
        computerScoreCard.textContent = computerScore
        handleGameOver()
    }
})