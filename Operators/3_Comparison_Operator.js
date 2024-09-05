// They are used to evaluate whether a condition is true or false by comparing variables or values.

/*
Comparison Operators List

        OPERATOR                     NAME           USAGE OPERATION
    Equality Operator	            a == b	    Compares the equality of two operators
    Inequality Operator	            a != b	    Compares inequality of two operators
    Strict Equality Operator	    a === b	    Compares both the value and type of the operand
    Strict Inequality Operator	    a !== b	    Compares inequality with type
    Greater than Operator	        a > b	    Checks if the left operator is greater than the right operator
    Greater than or equal Operator 	a >= b	    Checks if the left operator is greater than or equal to the right operator
    Less than Operator	            a < b	    Checks if the left operator is smaller than the right operator
    Less than or equal Operator	    a <= b	    Checks if the left operator is smaller than or equal to the right operator
 */

/* ================ Equality Operator ================ */
console.log('Equality Operator');
// Illustration of (==) operator
let val1 = 5;
let val2 = '5';

// Checking of operands
console.log(val1 == 5);
console.log(val2 == 5);        
console.log(val1 == val1);

// Check against null and boolean value
console.log(0 == false);   
console.log(0 == null);


/* ================ Inequality Operator ================ */
console.log('Inequality Operator');
// Illustration of (!=) operator
let val3 = 5;
let val4 = '5';

// Checking of operands
console.log(val3 != 6);
console.log(val4 != '5');        
console.log(val3 != val4);

// Check against null and boolean value
console.log(0 != false);   
console.log(0 != null);




/* ================ Strict equality Operator ================ */
console.log('Strict equality Operator');
// Illustration of (===) operator
let val5 = 5;
let val6 = '5';

// Checking of operands
console.log(val5 === 6);
console.log(val6 === '5');        
console.log(val5 === val6);

// Check against null and boolean value
console.log(0 === false);   
console.log(0 === null);




/* ================ Strict inequality Operator ================ */
console.log('Strict inequality Operator');
// Illustration of (!==) operator
let val7 = 5;
let val8 = '5';

// Checking of operands
console.log(val7 !== 6);
console.log(val8 !== '5');        
console.log(val7 !== val8);

// Check against null and boolean value
console.log(0 !== false);   
console.log(0 !== null);



/* ================ Greater than Operator ================ */
console.log('Greater than Operator');
// Illustration of (>) operator
let val9 = 5;
let val10 = "5";

// Checking of operands
console.log(val9 > 0);
console.log(val10 > "10");        
console.log(val9 > "10");
console.log(val10 > 0);




/* ================ Greater than or equal Operator ================ */
console.log('Greater than or equal Operator');
// Illustration of (>=) operator
let val11 = 5;
let val12 = "5";

// Checking of operands
console.log(val11 >= 5);
console.log(val12 >= "15");        
console.log(val11 >= "5");
console.log(val12 >= 15);



/* ================ Less than Operator ================ */
console.log('Less than Operator');
// Illustration of (<) operator
let val13 = 5;
let val14 = "5";

// Checking of operands
console.log(val13 < 15);
console.log(val14 < "0");        
console.log(val13 < "0");
console.log(val14 < 15);



/* ================ Less than or equal Operator ================ */
console.log('Less than or equal Operator');
// Illustration of (<=) operator
let val15 = 5;
let val16 = "5";

// Checking of operands
console.log(val15 <= 15);
console.log(val16 <= "0");        
console.log(val15 <= "0");
console.log(val16 <= 15);
