let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

let player = {
    name: "Player",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let number = Math.floor(Math.random() * 13) + 1
    if (number > 10) {
        return 10
    }
    else if (number === 1) {
        return 11
    }
    else {return number}
}
function startGame(){
    isAlive = true
    newCard()
    newCard()
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function restartGame(){
    cards = []
    sum = ""
    renderGame()
}

function newCard(){
    if (isAlive && hasBlackjack === false) {
        let card = getRandomCard()
        cards.push(card)
        let total = 0
        for (let i = 0; i < cards.length; i++) {
            total += cards[i]
        }
        sum = total
        renderGame()
    }

}





