// The Ternary Operator in JavaScript is a shortcut for writing simple if-else statements. 
// It’s also known as the Conditional Operator because it works based on a condition.

/* How Does the Ternary Operator Work?
    The ternary operator works with three parts:
    1. Condition: A statement that returns true or false.
    2. Value if True: What happens if the condition is true?
    3. Value if False: What happens if the condition is false? */

// Syntax -> condition ? trueExpression : falseExpression

function exam() {
    let PMarks = 40
    let result = (PMarks > 39) ?  "Pass" : "Fail";

    console.log(result);
}
exam();  

// Nested ternary operators
function test() {
    let marks = 95;
    let result = (marks < 40) ? "Unsatisfactory" :
        (marks < 60) ? "Average" :
            (marks < 80) ? "Good" : "Excellent";

    console.log(result);
}
test(); 