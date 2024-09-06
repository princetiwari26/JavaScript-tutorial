// The bitwise operators in JavaScript perform operations on the integer values at the binary level. They are used to manipulate each bit of the integer values.
// Bitwise operators are similar to logical operators but they work on individual bits.
// JavaScript bitwise operators works on 32-bits operands.


/*
    OPERATOR NAME	            USAGE	    DESCRIPTION
    Bitwise AND(&)	            a & b	    Returns true if both operands are true
    Bitwise OR(|)	            a | b	    Returns true even if one operand is true
    Biwise XOR(^)	            a ^ b	    Returns true if both operands are different
    Bitwise NOT(~)	            ~ a         Flips the value of the operand
    Bitwise Left Shift(<<)	    a << b	    Shifts the bit toward the left
    Bitwise Right Shift(>>)	    a >> b	    Shifts the bit towards the right
    Zero Fill Right Shift(>>>)  a >>> b	    Shifts the bit towards the right but adds 0 from left
*/



let a = 4; 
let b = 1; 

console.log("A & B = " + (a & b)); 
console.log("A | B = " + (a | b)); 
console.log("~A = " + (~a));
