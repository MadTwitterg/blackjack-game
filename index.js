//define variables
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

//chooses random cards
function randomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

//starts the game
function startGame() {
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
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
    if (isAlive && hasBlackjack === false) {
        let card = randomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}