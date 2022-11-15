var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
// Remove last item from vegetables array
vegetables.pop();
//console.log("vegetables:", vegetables);
// Remove 1st item from fruit array
fruit.shift();
//console.log("fruit;", fruit);
// Find the index of orange
var orangeindex =fruit.indexOf("orange");
//console.log(orangeindex);
// Add index of orange to end of fruit array
fruit.push(orangeindex);
//console.log("fruit:", fruit);
// Use length property to find length of vegetables array
let veglength = vegetables.length;
//console.log(veglength);
// Add length of veg array to the end of vegtables array
vegetables.push(veglength);
//console.log("vegetables:", vegetables);
// Place both array into one and name it food 
// Remove 2 elements from array starting @ index 4
food = fruit.concat(vegetables);
//console.log("food:", food);
var foodArray = food.splice(4, 2);
//console.log("food:", food);
var reveresed = food.reverse();
//console.log(reveresed);
// Join array into string
joined = food.join(",")
console.log(joined);

