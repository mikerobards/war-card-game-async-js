const button = document.getElementById('new-deck')

const handleClick = () => {
    fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
        .then(res => res.json())
        .then(data => console.log(data))
}

button.addEventListener('click', handleClick)

// const timer = () => {
//     console.log("I finally ran!")
// }

// setTimeout(timer, 2000)




