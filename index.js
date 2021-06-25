const button = document.getElementById('new-deck')
const drawBTN = document.getElementById('draw-cards')

let deckID = ''

const handleClick = () => {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckID = data.deck_id
        })
}

const drawCards = () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckID}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    console.log(deckID)
}

button.addEventListener('click', handleClick)
drawBTN.addEventListener('click', drawCards)



