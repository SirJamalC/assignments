const readline = require("readline-sync");//always @ top
//asking user to enter first number
var firstNumber = readline.questionInt("please enter your first number: ");
//asking user to enter second number 
var secondNumber = readline.questionInt("please enter your second number: ");
//asking user to user to enter operation to perform: add, sub, mul, div(store operation)
var enterOperator = readline.question("please enter the operation to perform: add, sub, mul, div ");
//function that adds 2 numbers
function addTwoNumbers(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}
//function that subtracks 2 numbers
function subtractTwoNumbers(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}
//function that multiplies 2 numbers
function multiplyTwoNumbers(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}
//function that divides 2 numbers 
function divideTwoNumbers(firstNumber, secondNumber){
    return firstNumber / secondNumber;
}
//function definitons for add,sub,multi,div
function myCalulator(firstNumber, secondNumber, enterOperator){
    if (enterOperator === "add"){
        console.log("if you add the first number: " +firstNumber+ " with the second number: " +secondNumber+ " you get the result of: " + 
        addTwoNumbers(firstNumber, secondNumber));
    }else if (enterOperator === "sub"){
        console.log("if you subtract the first number: " +firstNumber+ " with the second number: " +secondNumber+ " you get the result of; " +
        subtractTwoNumbers(firstNumber, secondNumber));
    }else if (enterOperator === "mul"){
        console.log("if you multiply the first number: " +firstNumber+ " with the second number: " +secondNumber+ " you get the result of: " +
        multiplyTwoNumbers(firstNumber, secondNumber));
    }else if (enterOperator === "div"){
        console.log("if you divide the first number: " +firstNumber+ " by the second number: " +secondNumber+ " you get the result of: " +
        divideTwoNumbers(firstNumber, secondNumber));
    }
}
myCalulator(firstNumber, secondNumber, enterOperator);