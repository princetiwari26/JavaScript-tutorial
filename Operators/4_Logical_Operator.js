// The logical operators in JavaScript are generally used with Boolean operands and return a boolean value.

// logical operator is mostly used to make decisions based on conditions specified for the statements.

/*
In the below table, we have given the logical operators with its description and example. Let’s assume: x = true, y = false.

  Operator	     Description	       Example
    &&	        Logical AND	        (x && y) is false.
    ||	        Logical OR	        (x || y) is true.
    !	        Logical NOT	        !(x) is false.
 */

/* =============== Logical AND (&&) Operator ============== */
console.log('Logical AND (&&) Operator');
// for a set of Boolean operands, it will return true if both operands are true else it returns false.
console.log(true && true);  // returns true
console.log(true && false); // returns false
console.log(false && true); // returns false
console.log(false && false); // returns false

// For number operands, the && operator will return the first operand if it is flasy values (0, -0, and 0n), otherwise second operand.
console.log(0 && 10);; // returns 0
console.log(10 && 20); // returns 20
console.log(20 && 0); // returns 0

// Let's look how && operator works for null and undefined −
console.log(null && true) // return null
console.log(undefined && true) // returns undefined


/* =============== Logical OR (||) Operator ============== */
console.log('Logical OR (||) Operator');
// for a set of Boolean operands, it will return flase if both operands are false else it returns true.
console.log(true || true); // returns true
console.log(true || false); // returns true
console.log(false || true); // returns true
console.log(false || false); // returns false

// For number operands, the || operator will return the first operand if it is truthy values (other than 0, -0, and 0n), otherwise second operand.
console.log(0 || 10); // returns 10
console.log(10 || 20); // returns 10
console.log(20 || 0); // returns 20

// Let's look how && operator works for null and undefined −
console.log(null || true); // returns true
console.log(undefined || true); // returns true


/* =============== Logical NOT (!) Operator ============== */
console.log('Logical NOT (!) Operator');

let coding = 1; 
console.log(!coding);  // returns false