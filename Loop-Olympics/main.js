//Pre:
//for loop that logs 0-9
/*for(var i = 0; i < 10; i++){
    console.log(i);
}
//for loop that logs 9-0 
for(var i = 9; i >= 0; i--){
    console.log(i);
}
//fruit array
const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
//for lop that logs fruit from array
for(var i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}*/

//Bronze:
// create a array variable
/*var narray = [];
//for loop that pushes numbers 0-9 to array
for (var i = 0; i < 10; i++){
    narray.push(i);
}
console.log(narray);
//for loop that logs even numbers 0-100
for (var i = 0; i <= 100; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}*/
//create a var for an array and use a for loop to push every other fruit from exisiting array to new 
/*var larray = [];
const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
for (var i = 0; i < fruit.length; i++){
    if ( i % 2 == 0){
        larray.push(fruit[i]);
    }
}
console.log(larray);*/

//Silver:
//for loop that logs names from array below
const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  //for loop that logs names
  /*for (var i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name);
  }*/
  //create variable for both arrays (names & occupations) also create for loop to push to each
  var names = [];
  var occupations = [];

  for (var i = 0; i < peopleArray.length; i++){
    names.push(peopleArray[i].name);
    occupations.push(peopleArray[i].occupation)
  }
  console.log(names, occupations);