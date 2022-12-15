const readline = require("readline-sync");
// Southside Chicago RPG
console.log("Welocme to the southside homie!\nHere life can be rough\nYou need to make your way out the hood\nBUT YOU MIGHT HAVE TO GET YOUR HANDS DIRTY!!");

let playerName = readline.question("Whats up homie!\nWhat they call you out in these streets?");
//Define name
let player = {
    name: playerName,
    hp: 100,
    attack: 25,
    defense: 25 
} 
// Initial Stash
let stashSpot = {
    money: 0
}
// Define enemy
let randoGangsta = [{
    name: babyG,
    hp: 50,
    attack: 10,
    defense: 10
}, {
    name: gangsta,
    hp:75,
    attack: 15,
    defense: 15
}, {
    name: ogBobby,
    hp: 100,
    attack: 20,
    defense: 20
}];
// Get the game started 
console.log("Whats poppin" + player.name + "Are you ready to hit the block?");

function menu() {
    startGame = readline.question("If you have the heart\nPress (y) and take your chances\n or press (r) to run back home!!");
    if(startGame === "y"){
        console.log(+ player.name + "Lets get to it !!")
        play()
    } else if (startGame === "r"){
        console.log("GO HOME TO MOMMA!!")
    } else {
        console.log("You must enter (y) to start the game!!")
    }
};

function walk(){
    
}


