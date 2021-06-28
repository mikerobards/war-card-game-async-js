const button = document.getElementById('new-deck')
const drawBTN = document.getElementById('draw-cards')
const card1 = document.querySelector('.card-1')
const card2 = document.querySelector('.card-2')
const winnerText = document.querySelector('.winner')
const numCardsText = document.querySelector('.num-cards')
const scoreText = document.querySelector('.score-el')
const cardValue = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'QUEEN', 'KING', 'ACE']
let deckID = ''
let score = 0

const handleClick = () => {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckID = data.deck_id
            numCardsText.innerText = `Cards Remaining: ${data.remaining}`
        })
}

const drawCards = () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckID}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            card1.innerHTML = `<img src=${data.cards[0].image}>`
            card2.innerHTML = `<img src=${data.cards[1].image}>`
            winnerText.innerText = scoreCards(data.cards[0].value, data.cards[1].value)
            numCardsText.innerText = `Cards Remaining: ${data.remaining}`
            if (data.remaining === 0) {
                drawBTN.disabled = true
                drawBTN.style.display = 'none'
            }
        })
    console.log(deckID)

}

const scoreCards = (a, b) => {
    if (cardValue.indexOf(a) > cardValue.indexOf(b)) {
        return `Computer Wins!`
    } else if (cardValue.indexOf(b) > cardValue.indexOf(a)) {
        return `You Win!`
    } else {
        return 'WAR!'
    }
}


button.addEventListener('click', handleClick)
drawBTN.addEventListener('click', drawCards)