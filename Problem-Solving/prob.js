/*function max(array){
    return array.reduce((prev, curr) => prev > curr ? prev : curr, undefined)
}
console.log(max([6, 13, 250, 3]));
console.log(max([3, 5, 2, 8, 1]));
console.log(max([-13, 40, 3, 0, 19, 22]));*/

const req = ["$hello!", "%%^%%", "test!"];
const req2 = ["#3", "$$$", "C%4!", "Hey!"];
const req3 = ["yellow", "green", "^up^", "down", "dog"];

const result = req.filter(element => element.includes("!", "$"), "!");
console.log(result);

const result2 = req2.filter(element => element.includes("!", "%"), "!");
console.log(result2);

const result3 = req3.filter(element => element.includes("!", "%", "#", "$"), "!");
console.log(result3);
