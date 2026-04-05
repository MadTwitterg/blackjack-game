//define variables
let firstCard = 10
let secondCard = 6
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

//starts the game
function startGame() {
    renderGame()
}

//check the cards
function renderGame() {
    if (sum <= 20) {
    message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    //render cards
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ", "
    }

    //display messages
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
}

//new card
function newCard() {
    let card = 5
    sum += card
    cards.push(card)
    renderGame()
}