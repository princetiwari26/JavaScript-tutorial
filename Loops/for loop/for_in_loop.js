// for in loop is used to iterate the properties of an object.

/*
Syntax -
for (key in object) {
  // code block to be executed
}
*/

const person = {
    fname:"John",
    lname:"Doe",
    age:25
};
let text = "";
for (let x in person) {
  text += person[x] + ' ';
}
console.log(text);
console.log();



const numbers = [45, 4, 9, 16, 25];
let num = "";
for (let x in numbers) {
    num += numbers[x] + ' ';
}
console.log(num);
console.log();



const student = {
    name: "Bob",
    grades: {
        math: 90,
        science: 85,
        history: 88
    }
};
for (let key in student) {
    if (typeof student[key] === "object") {
        console.log(`${key}:`);
        for (let subject in student[key]) {
            console.log(`  ${subject}: ${student[key][subject]}`);
        }
    } else {
        console.log(`${key}: ${student[key]}`);
    }
}
console.log();
