// The for...of loop in JavaScript is used to iterate over iterable objects like arrays, strings, maps, sets, and more.

/*
Syntax
for (variable of iterable) {
  // code block to be executed
}
*/

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x + ' ';
}
console.log(text);
console.log();


let language = "JavaScript";

let char = "";
for (let x of language) {
    char += x;
}
console.log(char);
console.log();


const uniqueNumbers = new Set([1, 2, 3, 3, 4]);
for (const number of uniqueNumbers) {
    console.log(number);
}
