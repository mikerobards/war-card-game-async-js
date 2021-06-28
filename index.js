const button = document.getElementById('new-deck')
const drawBTN = document.getElementById('draw-cards')
const card1 = document.querySelector('.card-1')
const card2 = document.querySelector('.card-2')
const winnerText = document.querySelector('.winner')
const numCardsText = document.querySelector('.num-cards')
const PCScoreText = document.querySelector('.pc-score')
const myScoreText = document.querySelector('.my-score')
const cardValue = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'QUEEN', 'KING', 'ACE']
let deckID = ''
let PCScore = 0
let myScore = 0

const newDeck = () => {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckID = data.deck_id
            numCardsText.innerText = `Cards Remaining: ${data.remaining}`
        })
    drawBTN.disabled = false
    card1.innerHTML = ''
    card2.innerHTML = ''
    winnerText.innerText = 'Game of WAR!!!'
    PCScore = 0
    myScore = 0
    PCScoreText.innerText = ''
    myScoreText.innerText = ''
}

// async function newDeck() {
//     const response = await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
//     const data = await response.json()
//     remainingText.textContent = `Remaining cards: ${data.remaining}`
//     deckId = data.deck_id
//     console.log(deckId)
// }

const drawCards = () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckID}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            card1.innerHTML = `<img src=${data.cards[0].image}>`
            card2.innerHTML = `<img src=${data.cards[1].image}>`
            scoreCards(data.cards[0].value, data.cards[1].value)
            numCardsText.innerText = `Cards Remaining: ${data.remaining}`
            if (data.remaining === 0) {
                drawBTN.disabled = true
                if (PCScore > myScore) {
                    winnerText.innerText = "Computer Wins!"
                } else {
                    winnerText.innerText = "You Win!"
                }
            }
        })
    console.log(deckID)

}

const scoreCards = (a, b) => {
    if (cardValue.indexOf(a) > cardValue.indexOf(b)) {
        msg = `Computer Wins!`
        PCScore++
    } else if (cardValue.indexOf(b) > cardValue.indexOf(a)) {
        msg = `You Win!`
        myScore++
    } else {
        msg = 'WAR!'
    }
    winnerText.innerText = msg
    PCScoreText.innerText = `Computer: ${PCScore}`
    myScoreText.innerText = `Me: ${myScore}`
}


button.addEventListener('click', newDeck)
drawBTN.addEventListener('click', drawCards)