// Comma Operator mainly evaluates its operands from left to right sequentially and returns the value of the rightmost operand.

// Syntax -> Expression1, Expression2, Expression3, ...so on

// Example 1
function Func1() {
    console.log('one');
    return 'one';
}
function Func2() {
    console.log('two');
    return 'two';
}
function Func3() {
    console.log('three');
    return 'three';
}

// Three expressions are
// given at one place
let x = (Func1(), Func2(), Func3());

console.log(x);


// Example 2
// The most useful application of the comma operator is in loops. In loops, it is used to update multiple variables in the same expression.
console.log('Example 2 ---- ');
for (let a = 0, b =5; a <= 5; a++, b--) {
    console.log(a, b);
}
