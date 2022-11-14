// write a function that takes string as paramater and makes all letters capital
/*function modify(greeting){
    return greeting.toUpperCase() + greeting.toLowerCase()
};
// assigned function call to variable
const result = modify("hello");
// console.log variable (result) for print out of "HELLO"
console.log(result);*/
// wrote variable for string
var greeter = "hello"
// write a variable for length of string
var indexOfHello = greeter.length
// write a fucntion that takes string as paramater and returns number half the strings length rounded down
function rounded(greeter){
    return indexOfHello / 2
}
// write a variable for result of function
const result = rounded(greeter)
// used Math.floor to returns rounded down number of half of strings lenght
console.log(Math.floor(2.5));