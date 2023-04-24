let player = {
    name: "Player",
    chips: 145
}
let cards = []
let dealerCards = []
let sum = 0
let dealerSum = 0
let hasBlackjack = false
let isAlive = false
let gameStarted = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")
let dealerCardsEl = document.getElementById("dealer-cards-el")
let dealerSumEl = document.getElementById("dealer-sum-el")

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
    if (gameStarted === false) {
        isAlive = true
        newCard()
        newCard()
        drawDealerCard()
        drawDealerCard()
        renderGame()
        gameStarted = true
    }
}

function renderGame(){
    playerEl.textContent = player.name + ": $" + player.chips
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Blackjack!"
        player.chips += 25
        hasBlackjack = true
    } else {
        message = "You're out of the game"
        player.chips -= 10
        isAlive = false
    }
    messageEl.textContent = message
}

function restartGame(){
    cards = []
    sum = ""
    dealerCardsEl.textContent = "Dealer Cards: "
    dealerSumEl.textContent = "Dealer Sum: "
    renderGame()
    messageEl.textContent = "Want to play a round?"
    gameStarted = false
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

function drawDealerCard(){
    let card = getRandomCard()
    dealerCards.push(card)
}

function calculateDealerMove() {
    let total = 0
    for (let i = 0; i < dealerCards.length; i++) {
        total += dealerCards[i]
    }
    dealerSum = total
    if (dealerSum < 17){
        drawDealerCard()
        return true
    }
    else {
        return false
    }
}

function stand(){
    if (isAlive && hasBlackjack === false) {
        isAlive = false
        let loop = true
        while (loop){
            loop = calculateDealerMove()
        }
        dealerCardsEl.textContent = "Dealer Cards: "
        for (let i = 0; i < dealerCards.length; i++){
            dealerCardsEl.textContent += dealerCards[i] + " "
        }
        dealerSumEl.textContent = "Dealer Sum: " + dealerSum

        if (dealerSum > 21) {
            message = "Dealer busts, you win!"
            player.chips += 20
        }
        else if (dealerSum === sum) {
            message = "Push!"
        }
        else if (dealerSum > sum) {
            message = "Dealer wins"
            player.chips -= 10
        }
        else if (dealerSum < sum) {
            message = "You beat the dealer!"
            player.chips += 20
        }
        messageEl.textContent = message
    }

}






