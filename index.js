
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

function getRandomCard(){
    return Math.floor((Math.random() * 11) + 1)
}

function startGame(){
    refreshGame()
}

function refreshGame(){
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

function newCard(){
    console.log("drawing a new card from the deck")
    let card = getRandomCard()
    cards.push(card)
    let total = 0
    for (let i = 0; i < cards.length; i++) {
        total += cards[i]
    }
    sum = total
    refreshGame()
}





