// iterates the elements for the fixed number of times.

/*
Syntax- 
for (initialization; condition; increment)  
{  
    code to be executed  
}  
*/

for (i = 1; i <= 5; i++) {
    console.log(i , '\n')
}  
console.log();

/*
Initialization: let i = 1 - This sets up a counter variable i starting at 1.
Condition: i <= 5 - The loop will continue to run as long as i is less than or equal to 5.
Increment: i++ - After each iteration, i is increased by 1
*/

const fruits = ['apple', 'banana', 'cherry'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
console.log();


for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
console.log();


for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.log();


for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Skip the number 5
    }
    if (i === 8) {
        break; // Stop the loop when reaching 8
    }
    console.log(i); // Logs 1, 2, 3, 4, 6, 7
}
console.log();


let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i; // Add i to sum
}
console.log(sum); // Outputs 5050
console.log();
