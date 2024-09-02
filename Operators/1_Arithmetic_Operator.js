// Arithmetic operators in JavaScript perform mathematical calculations on numeric values (operands)

/* Some Arithmetic operators are:-

   Operator	   Description
        +	    Addition
        -	    Subtraction
        *	    Multiplication
        **	    Exponentiation (ES2016)
        /	    Division
        %	    Modulus (Remainder)
        ++	    Increment
        --	    Decrement
*/

/* ============ Addition =========== */
console.log("Addition");
// JavaScript arithmetic addition operator is capable of performing two types of operation that is addition and concatenation.
console.log(1+2); 
console.log(NaN +1); 
console.log(true+1); 
console.log(false+1);

console.log("1"+2); 
console.log("Hello " +"Geek");
console.log();


/* ============ Subtraction =========== */
console.log("Subtraction");
// JavaSscript arithmetic subtraction operator is used to find the difference between operators after subtracting them.
console.log(200-100); 
console.log("10"-2); 
console.log("Hello" - 3);
// subtraction operation on the BigInt data type.
console.log(200n-100n); 
// console.log(200n-100);  gives-error=Cannot mix BigInt and other types, use explicit conversions
console.log();


/* ============ Multiplication =========== */
console.log("Multiplication");
// JavaScript arithmetic multiplication operator is used to find the product of operands.
console.log(100*20); 
console.log(Infinity*100); 
console.log(Infinity*0); 
console.log(NaN*100);
// we will perform multiplication on string/non-numbers.
console.log("hello"*20); 
console.log("100"*100);
console.log();


/* ============ Division =========== */
console.log("Division");
// JavaScript airthmetic division operator is used to find the quotient of operands.
console.log(100/20); 
console.log(Infinity/0); 
console.log(Infinity/-0);
// we will perform a division operation on a string/non-numbers.
console.log("100"/20); 
console.log("Hello"/0);
console.log();


/* ============ Modulus =========== */
console.log("Modulus");
// The modulus (%) arithmetic operator in JavaScript returns the remainder after dividing one number by another.
console.log(100%23);
console.log(Infinity%20);
// we will use the modulus operator on the negative number and NaN 
console.log(-100%23);
console.log(NaN%20);


/* ============ Exponentiation =========== */
console.log("Exponentiation");
// JavaScript exponentiation(**) operator in JavaScript is represented by “**” and is used to find the power of the first operator raised to the second operator.
let a=4; 
let b=3; 
let c=-2 
console.log(a**b); 
console.log(b**a); 
console.log(c**a); 
console.log(a**c)
// we will try to find the powers of a negative number before assigning it to a variable
// console.log(-2**3) - give error
console.log();


/* ============ Increment =========== */
console.log("Increment");
// JavaScript increment(+ +) operator is used to increase the value of the variable by one.
// Example 1: In this example, we will see the value returned when the increment operator is applied after the operand(postfix increment).
let x = 10;
console.log(x++);
console.log(x);
// In this example, we will see the values returned when the operator is applied before the operand(prefix increment).
let y = 10;
console.log(++y);
console.log(y);
console.log();


/* ============ Decrement =========== */
console.log("Decrement");
// JavaScript decrement operator is used to decrease the value of the variable by one.
// Example 1: In this example, we will see the value returned when the decrement operator is applied after the operand(postfix decrement).
let p = 10; 
console.log(p--); 
console.log(p);
// Example 2: In this example, we will see the values returned when the operator is applied before the operand(prefix decrement).
let q = 10; 
console.log(--q); 
console.log(q);