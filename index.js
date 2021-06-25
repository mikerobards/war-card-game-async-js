const button = document.getElementById('new-deck')
const drawBTN = document.getElementById('draw-cards')
const card1 = document.querySelector('.card-1')
const card2 = document.querySelector('.card-2')
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
            card1.innerHTML = `<img src=${data.cards[0].image}>`
            card2.innerHTML = `<img src=${data.cards[1].image}>`
        })
    console.log(deckID)

}


button.addEventListener('click', handleClick)
drawBTN.addEventListener('click', drawCards)



