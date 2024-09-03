// The assignment operators in JavaScript are used to assign values to the variables.
// These are binary operators.

// Following are the list of assignment operator are: 
/*
    Assignment Operator	            Example	    Equivalent To
= (Assignment)	                    a = b	    a = b
+= (Addition Assignment)	        a += b	    a = a + b
-= (Subtraction Assignment)	        a -= b	    a = a – b
*= (Multiplication Assignment)	    a *= b	    a = a * b
/= (Division Assignment)	        a /= b	    a = a / b
%= (Remainder Assignment)	        a %= b	    a = a % b
**= (Exponentiation Assignment)	    a **= b	    a = a ** b   */


/* ====== JavaScript Bitwise Assignment operators ====== */
/* A bitwise assignment operator performs bitwise operation on the operands and assign the result to a variable.

    Assignment Operator	            Example	    Equivalent To
    &= (Bitwise AND Assignment)	    a &= b	    a = a & b
    |= (Bitwise OR Assignment)	    a |= b	    a = a | b
    ^= (Bitwise XOR Assignment)	    a ^= b	    a = a ^ b       */


/*
   ================== JavaScript Shift Assignment Operators =========================
A shift assignment operator performs bitwise shift operation on the operands and assign the result to a variable (left operand).

    Assignment Operator	                    Example	    Equivalent To
    <<= (Left Shift Assignment)	            a <<= b	    a = a << b
    >>= (Right Shift Assignment)	        a >>= b	    a = a >> b
    >>>= (Unsigned Right Shift Assignment)	a >>>= b	a = a >>> b
 */


/*
================ JavaScript Logical Assignment operators =================
In JavaScript, a logical assignment operator performs a logical operation on the operands and assign the result to a variable (left operand).

    Assignment Operator	                Example	    Equivalent To
    &&= (Logical AND Assignment)	    a &&= b	    a = a && b
    ||= (Logical OR Assignment)	        a ||= b	    a = a || b
    ??= (Nullish Coalescing Assignment)	a ??= b	    a = a ?? b
 */



/* ----------- Addition Assignment Operator ----------- */
let a = 5;
a += 3;  // equivalent to a = a + 3
console.log(a);  // Output: 8

/* ----------- Subtraction Assignment Operator ----------- */
let b = 5;
b -= 2;  // equivalent to b = b - 2
console.log(b);  // Output: 3

/* ----------- Multiplication Assignment Operator ----------- */
let c = 5;
c *= 4;  // equivalent to c = c * 4
console.log(c);  // Output: 20

/* ----------- Division Assignment Operator ----------- */
let d = 20;
d /= 4;  // equivalent to d = d / 4
console.log(d);  // Output: 5

/* ----------- Modulus Assignment Operator ----------- */
let e = 10;
e %= 3;  // equivalent to e = e % 3
console.log(e);  // Output: 1

/* ----------- Exponentiation Assignment Operator ----------- */
let f = 2;
f **= 3;  // equivalent to f = f ** 3
console.log(f);  // Output: 8



/* ----------- Bitwise AND Assignment Operator ----------- */
let g = 7; 
g &= 5;
console.log(g);

/* ----------- Bitwise OR Assignment Operator ----------- */
let h = 7; 
h |= 5;
console.log(h);

/* ----------- Bitwise XOR Assignment Operator ----------- */
let i = 7; 
i ^= 5;
console.log(i);

/* ----------- Addition Assignment Operator ----------- */
/* ----------- Addition Assignment Operator ----------- */
