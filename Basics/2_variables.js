// A variable is a container for storing data values. In JavaScript, variables are declared using the var, let, or const keywords.

// JavaScript Variables can be declared in 3 ways:

// Using var
// Using let
// Using const

/* 1. var:
    var is the oldest way to declare variables in JavaScript.
    Variables declared with var are function-scoped.
    Can be re-assigned and re-declared. */

    var x = 10;
    x = 20; // Re-assignment is allowed
    var x = 30; // Re-declaration is allowed
    console.log(x);
    

/* 2. let:
    let is block-scoped, meaning it only exists within the block it is defined in.
    Can be re-assigned but not re-declared within the same scope. */

    let y = 10;
    y = 20; // Re-assignment is allowed
    // let y = 30; // Re-declaration would cause an error
    console.log(y);


/* 3. const:
    const is also block-scoped.
    Variables declared with const cannot be re-assigned or re-declared.
    The value of a const variable cannot change through reassignment, but if the value is an object or array, the contents of the object or array can still be modified. */

    const z = 10;
    // z = 20; // Re-assignment would cause an error
    const arr = [1, 2, 3];
    arr.push(4); // Allowed, because the contents of the array are mutable
    console.log(arr);


/* Variable Naming Rules:
    Must start with a letter, underscore (_), or dollar sign ($).
    Can contain letters, digits, underscores, and dollar signs.
    JavaScript is case-sensitive, so varName and varname are different. */


/* When to Use var, let, or const?
    1. Always declare variables
    2. Always use const if the value should not be changed
    3. Always use const if the type should not be changed (Arrays and Objects)
    4. Only use let if you can't use const
    5. Only use var if you MUST support old browsers. */