// write a function that takes string as paramater and makes all letters capital
/*function modify(greeting){
    return greeting.toUpperCase() + greeting.toLowerCase()
};
// assigned function call to variable
const result = modify("hello");
// console.log variable (result) for print out of "HELLO"
console.log(result);*/
// wrote variable for string
/*var greeter = "hello"
// write a variable for length of string
var indexOfHello = greeter.length
// write a fucntion that takes string as paramater and returns number half the strings length rounded down
function rounded(greeter){
    return indexOfHello / 2
}
// write a variable for result of function
const result = rounded(greeter)
// used Math.floor to returns rounded down number of half of strings lenght
console.log(Math.floor(2.5));*/
// write a varaible for string
//var string = "Hello World"
// wirte a fucntion that returns 1st half of string
/*function myString(string){
    return string.slice(0, 5)
}
console.log(myString(string));*/
// write variable for first and second part of string 
/*var first = string.slice(0, 5).toUpperCase()
var last = string.slice(6, 11).toLowerCase()
// write a function that returns first half Upper second half Lower
function modify(string){
    return first + " " + last
}
console.log(modify(string));*/
// write variables for bleow function
const mySentence = "hey friends! practice practice practice!"
// split string with spaces
const words = mySentence.split(" ");
// write a function that capitalizes every first letter after space
 for(var i = 0; i < words.length; i++){
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
 } 
 const strg = words.join(" ");
 console.log(strg);