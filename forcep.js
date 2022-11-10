// Write a function that accepts 2 arrays as paramaters
// Use a for loop within a for loop to create a new array
// created variables for array 1 and used split method to create 2nd array from alphabet string
let people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
let alphabet = "abcdefghijklmnopqrstuvwxyz"
let alpArray = alphabet.split("");
function forception(people, alpArray){
    let newArr = []
    for(let i = 0; i < people.length; i++){
        newArr.push(people[i]);
        for(let j = 0; j < alpArray.length; j++){
            newArr.push(alpArray[j].toUpperCase());
        }
    }return newArr
}
console.log(forception(people, alpArray));

