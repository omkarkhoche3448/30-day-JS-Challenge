// Day 2: Operators

// Activity 1: Arithmetic Operations
// - Task 1: Write a program to add two numbers and log the result to the console.
function add(a, b) {
    let sum = a + b;
    return sum;
}
const Addition = add(10, 20);
console.log("Addition: " + Addition);


// - Task 2: Write a program to subtract two numbers and log the result to the console.
function sub(a, b) {
    let subt = a - b;
    return subt;
}
const subtraction = sub(10, 20);
console.log("subtraction: " + subtraction);

// - Task 3: Write a program to multiply two numbers and log the result to the console.
function mult(a, b) {
    let mult = a * b;
    return mult;
}
const multiplication = mult(10, 20);
console.log("Multiplication: " + multiplication);

// - Task 4: Write a program to divide two numbers and log the result to the console.
function div(a, b) {
    let div = a / b;
    return div;
}
const division = div(10, 20);
console.log("division: " + division);
// - Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
function mod(a, b) {
    let mod = a % b;
    return mod;
}
const modulus = mod(10, 20);
console.log("modulus: " + modulus);

// Activity 2: Assignment Operators
// - Task 6: Use the `+=` operator to add a number to a variable and log the result to the console.
let num = 10;
num += 20;
console.log("num: " + num);

// - Task 7: Use the `-=` operator to subtract a number from a variable and log the result to the console.
let num2 = 10;
num -= 20;
console.log("num2: " + num2);


// Activity 3: Comparison Operators
// - Task 8: Write a program to compare two numbers using `>` and `<` and log the result to the console.
function greater(a, b) {
    if (a > b) {
        return ` ${a} is greater than ${b}`;
    } else {
        return `${a} is less than ${b}`;
    }
}
const compare = greater(10, 20);
console.log("Result: " + compare + "\n");

// - Task 9: Write a program to compare two numbers using `>=` and `<=` and log the result to the console.
function greaterEqual(a, b) {
    if (a >= b) {
        return `${a} is greater than or equal to ${b}`;
    } else {
        return `${a} is less than ${b}`;
    }
}
console.log(greaterEqual(10, 5));   // 10 is greater than or equal to 5
console.log(greaterEqual(5, 10));   // 5 is less than 10
console.log(greaterEqual(7, 7));    // 7 is greater than or equal to 7


// - Task 10: Write a program to compare two numbers using `==` and `===` and log the result to the console.
function equal(a, b) {
    if (a === b) {
        return `${a} is strictly equal to ${b}`;
    } else if (a == b) {
        return `${a} is equal to ${b}`;
    } else {
        return `${a} is not equal to ${b}`;
    }
}
console.log(equal("20", 20));
console.log(equal(20, 20));
console.log(equal("20", "20"));


// Activity 4: Logical Operators
// - Task 11: Write a program that uses the `&&` operator to combine two conditions and log the result to the console.
let str = "Hello";
let str2 = "String";
if (str == "Hello" && str2 == "String") {
    console.log("Hello World");
} else {
    console.log("Not equal");
}

// - Task 12: Write a program that uses the `||` operator to combine two conditions and log the result to the console.
let str3 = "Hello";
let str4 = "String";
if (str3 === "Hello" || str4 == "Omkar") {
    console.log("Hello World");
} else {
    console.log("Not equal");
}

// - Task 13: Write a program that uses the `!` operator to negate a condition and log the result to the console.
let a = 12
let b = 10
if (a != b) {
    console.log("a is not equal to b")
} else {
    console.log("a is equal to b")
}

// Activity 5: Ternary Operator
// - Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

function checkNumber(n) {
    return n >= 0 ? `${n} is a positive number` : `${n} is a negative number`;
}
console.log(checkNumber(10));
console.log(checkNumber(-10));

// Feature Request:
// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
// 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
// 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.

// Achievement:
// By the end of these activities, students will:
// - Understand how to perform basic arithmetic operations.
// - Be able to use assignment operators to modify the value of a variable.
// - Know how to compare two values using comparison operators.
// - Be able to combine conditions using logical operators.
// - Understand how to use the ternary operator to simplify conditional expressions.
