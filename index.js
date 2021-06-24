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

// filter challenge
const people = [
    { name: "Jack", hasPet: true },
    { name: "Jill", hasPet: false },
    { name: "Alice", hasPet: true },
    { name: "Bob", hasPet: false },
]

const hasPet = person => person.hasPet
// const peopleWithPets = people.filter(hasPet)
// console.log(peopleWithPets)


function filterArray(array, callback) {
    const resultingArray = []
    // Write your filtering logic here
    array.forEach(item => {
        if (callback(item)) {
            resultingArray.push(item)
        }
    })
    return resultingArray
}

let petArr = filterArray(people, hasPet)



const hasPets = (arr) => {
    arr.forEach(i => {
        console.log(i.name)
    })
}

console.log(hasPets(petArr))




