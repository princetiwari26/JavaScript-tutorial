// JavaScript has dynamic typing, meaning variables can hold values of any data type without declaring a type.

/* JavaScript has 8 Datatypes
    String
    Number
    Bigint
    Boolean
    Undefined
    Null
    Symbol
    Object 
*/


// Primitive Data Types:
/* 1. Number:
    Represents both integer and floating-point numbers.
    Examples: 5, 3.14, -10.*/

    let age = 25;
    let price = 19.99;


/* 2. String:
    Represents a sequence of characters.
    Can be enclosed in single (' '), double (" "), or backticks (` `) for template literals. */

    let name = "John";
    let greeting = `Hello, ${name}`; // Template literal with embedded expression


/* 3. Boolean:
    Represents logical values: true or false. */
    let isAdult = true;
    let hasLicense = false;

/* 4. Null:
    Represents the intentional absence of any object value. */

    let emptyValue = null;

/* 5. Undefined:
    Represents a variable that has been declared but not yet assigned a value. */

    let notAssigned;
    console.log(notAssigned); // Outputs: undefined

/* 6. Symbol (ES6):
    Represents a unique and immutable value, often used as object property identifiers. */

    let sym = Symbol("description");

/* 7. BigInt (ES2020):
    Represents numbers larger than the Number type can safely store. */

    let bigNumber = 1234567890123456789012345678901234567890n;



// Non-Primitive Data Types:

/* 1. Object:
    Objects are collections of key-value pairs, where keys are strings (or Symbols) and values can be any data type. */
    let person = {
        firstName: "Jane",
        lastName: "Doe",
        age: 30
    };

/* 2. Array:
    A type of object used to store a list of values. */
    let colors = ["red", "green", "blue"];

/* 3. Function:
    Functions are objects that can be invoked to execute code. */
    function add(a, b) {
        return a + b;
    }


// Checking Data Types
    //To check the data type of a variable, you can use the typeof operator.
    console.log(typeof 42);        // "number"
    console.log(typeof "Hello");   // "string"
    console.log(typeof true);      // "boolean"
    console.log(typeof undefined); // "undefined"
    console.log(typeof null);      // "object" (a quirk in JS)
    console.log(typeof {});        // "object"
    console.log(typeof Symbol());  // "symbol"
    console.log(typeof 10n);       // "bigint"