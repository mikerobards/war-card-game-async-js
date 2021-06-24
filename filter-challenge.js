// // filter challenge
// const people = [
//     { name: "Jack", hasPet: true },
//     { name: "Jill", hasPet: false },
//     { name: "Alice", hasPet: true },
//     { name: "Bob", hasPet: false },
// ]

// const hasPet = person => person.hasPet
// // const peopleWithPets = people.filter(hasPet)
// // console.log(peopleWithPets)


// function filterArray(array, callback) {
//     const resultingArray = []
//     // Write your filtering logic here
//     array.forEach(item => {
//         if (callback(item)) {
//             resultingArray.push(item)
//         }
//     })
//     return resultingArray
// }

// let petArr = filterArray(people, hasPet)



// const hasPets = (arr) => {
//     arr.forEach(i => {
//         console.log(i.name)
//     })
// }

// console.log(hasPets(petArr))

// Given the array below, chain the `.filter` and `.map` array methods 
// together to turn the array into an array of string email addresses of 
// only the people in the array who voted. Log the array of email addresses to the console
// Final result: ["joe@joe.com", "jane@jane.com"]
const voters = [
    { name: "Joe", email: "joe@joe.com", voted: true },
    { name: "Jane", email: "jane@jane.com", voted: true },
    { name: "Bo", email: "bo@bo.com", voted: false },
    { name: "Bane", email: "bane@bane.com", voted: false }
]

console.log(voters.filter(voter => voter.voted).map(voter => voter.email))