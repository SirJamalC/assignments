function max(array){
    return array.reduce((prev, curr) => prev > curr ? prev : curr, undefined)
}
console.log(max([6, 13, 250, 3]));
console.log(max([3, 5, 2, 8, 1]));
console.log(max([-13, 40, 3, 0, 19, 22]));
