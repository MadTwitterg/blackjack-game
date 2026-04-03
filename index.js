let firstCard = 10
let secondCard = 9

sum = firstCard + secondCard

if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo, you've got Blackjack! 🥳")
} else {
    console.log("You're out of the game! 😭")
}