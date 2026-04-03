let firstCard = 11
let secondCard = 11

sum = firstCard + secondCard

if (sum < 21) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo, you've got Blackjack! 🥳")
} else {
    console.log("You're lost the game! 😭")
}