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


/* =============== Bitwise AND (&) =============== */
console.log('Bitwise AND');
let a = 5;  // Binary: 0101
let b = 3;  // Binary: 0011
let result = a & b;  // Binary: 0001
console.log(result); // Output: 1


/* ===============  Bitwise OR (|) =============== */
console.log('Bitwise OR');
let c = 5;  // Binary: 0101
let d = 3;  // Binary: 0011
let result2 = c | d;  // Binary: 0111
console.log(result2); // Output: 7


/* ===============  Bitwise XOR (^) =============== */
console.log('Bitwise XOR');
let e = 5;  // Binary: 0101
let f = 3;  // Binary: 0011
let result3 = e ^ f;  // Binary: 0110
console.log(result3); // Output: 6


/* ===============  Bitwise NOT (~) =============== */
console.log('Bitwise NOT');
let g = 5;  // Binary: 0101
let result4 = ~g;     // Binary: 1010 (2's complement, result is -6)
console.log(result4); // Output: -6


/* ===============   Left Shift (<<) =============== */
console.log(' Left Shift');
let h = 5;  // Binary: 0101
let result5 = h << 1; // Binary: 1010
console.log(result5); // Output: 10


/* ===============  Right Shift (>>) =============== */
console.log('Right Shift');
let i = 5;  // Binary: 0101
let result6 = i >> 1; // Binary: 0010
console.log(result6); // Output: 2



/* ===============  Unsigned Right Shift (>>>) =============== */
console.log('Unsigned Right Shift');
let j = -5; // Binary: 11111111111111111111111111111011 (2's complement)
let result7 = j >>> 1; // Binary: 01111111111111111111111111111101
console.log(result7);  // Output: 2147483645
