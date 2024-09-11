// The JavaScript switch statement is used to execute one code from multiple expressions.
// The switch statement is used to perform different actions based on different conditions.

/*
Syntax -
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
*/

// Example - The getDay() method returns the weekday as a number between 0 and 6.(Sunday=0, Monday=1, Tuesday=2 ..)

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
console.log(day);

// The break Keyword =====
// When JavaScript reaches a break keyword, it breaks out of the switch block.

// The default Keyword =====
// The default keyword specifies the code to run if there is no case match:

let grade = 'B';
let result;
switch (grade) {
    case 'A':
        result = "A (Excellent)";
        break;
    case 'B':
        result = "B (Average)";
        break;
    case 'C':
        result = "C (Below than average)";
        break;
    default:
        result = "No Grade";
}
console.log(result);
