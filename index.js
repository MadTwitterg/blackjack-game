//define variables
let firstCard = 11
let secondCard = 5
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

    //display messages
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Sum: " + cards[0] + ", " + cards[1] 
}

//new card
function newCard() {
    console.log("Drawing a new card from the deck!")
    let card = 5
    sum += card
    renderGame()
}