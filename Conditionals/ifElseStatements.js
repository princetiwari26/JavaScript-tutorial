/* The JavaScript if-else statement is used to execute the code whether condition is true or false. There are three forms of if statement in JavaScript.

If Statement
If else statement
if else if statement

*/

/*
JavaScript if statement
The if statement is the fundamental control statement that allows JavaScript to make decisions and execute statements conditionally.

Syntax −
if (expression) {
   Statement(s) to be executed if expression is true
}
*/
let result;
let age = 20;
if (age > 18) {
    result = "Qualifies for driving";
}
console.log(result);


var hour = new Date().getHours();
if (hour < 18) {
    greeting = "Good day";
    console.log(greeting);
  }
/*
JavaScript if...else statement
The 'if...else' statement is the next form of control statement that allows JavaScript to execute statements in a more controlled way.

Syntax
if (expression) {
   Statement(s) to be executed if expression is true
} else {
   Statement(s) to be executed if expression is false
}
*/

let myage = 15;
if (myage > 18) {
    console.log("Qualifies for driving");
} else {
    console.log("Does not qualify for driving");
}

/*
JavaScript if...else if... statement
The if...else if... statement (also called as if...else ladder)is an advanced form of if…else that allows JavaScript to make a correct decision out of several conditions.

Syntax
The syntax of an if-else-if statement is as follows −

if (expression 1) {
   Statement(s) to be executed if expression 1 is true
} else if (expression 2) {
   Statement(s) to be executed if expression 2 is true
} else if (expression 3) {
   Statement(s) to be executed if expression 3 is true
} else {
   Statement(s) to be executed if no expression is true
}
*/

var time = new Date().getHours();
if (time < 10) {
  console.log("Good morning");
} else if (time < 20) {
  console.log("Good day");
} else {
  console.log("Good evening");
}