const readline = require("readline-sync");
const name = readline.question("What is your name? ");
// create variables for game
let youLose = false;
let key = false;
// write loop that runs only when condition is met
while (!youLose){
    let answer = readline.question(`Hello ${name}! Would you like to try to escape the room?
    If so, please choose from the options below. You must find the key and open the door. Here are your options
    [A] Put your hand in the hole?
    [B] Open the door?
    [C] Look for the key?`)
    if (answer === "A"){
        console.log("You bled to death for putting your arm in a wood chipper!1 You're DEAD!!")
    }else if (answer === "B"){
        console.log("You found the key, but now you have to use it")
    }else if (answer === "C" && key === true){
        console.log("The door has been opened!! CONGRATULATIONS ON YOUR ESCAPE!!!")
    }else if (answer === "B"){
        console.log("The door is locked!! Do you have the key?")
    }else{
        console.log("Better Luck Next Time!!!")
    }
};

