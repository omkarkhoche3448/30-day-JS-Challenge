// Day 5: Functions

// Activity 1: Function Declaration
// - Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkEvenOdd(n) {
    if (n % 2 == 0) {
        console.log(`${n} is an even number`);
    } else {
        console.log(`${n} is an odd number`);
    }
}
checkEvenOdd(10);
checkEvenOdd(11);

// - Task 2: Write a function to calculate the square of a number and return the result.
function square(n) {
    return n * n;
}
console.log(square(5));

// Activity 2: Function Expression
// - Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const findMax = function (a, b) {
    return a > b ? a : b;
};
findMax(20, 10);

// - Task 4: Write a function expression to concatenate two strings and return the result.
const concatStrings = function (str1, str2) {
    return str1 + str2;
};
console.log(concatStrings("Hello", "World"));


// Activity 3: Arrow Functions
// - Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sum = (a, b) => a + b;
sum(10, 20);

// - Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const containsChar = (str, char) => str.includes(char);
console.log(containsChar("Hello", "o"));


// Activity 4: Function Parameters and Default Values
// - Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
const product = (a, b = 1) => a * b;
console.log(product(10, 20));
// - Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greet(name, age = 20) {
    return `Hello, ${name}! You are ${age} years old.`;
}
console.log(greet("Omkar"));

// Activity 5: Higher-Order Functions
// - Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
const callFunctionNTimes = (func, n) => {
    for (let i = 0; i < n; i++) {
        func();
    }
};
console.log(callFunctionNTimes(() => console.log("Hello"), 5));

// - Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function applyFunctions(func1, func2, value) {
    return func2(func1(value));
}
console.log(applyFunctions((n) => n * 2, (n) => n + 10, 5));

// Feature Request:
// 1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.
// 2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.
// 3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.
// 4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
// 5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.

// Achievement:
// By the end of these activities, students will:
// - Understand and define functions using function declarations, expressions, and arrow functions.
// - Use function parameters and default values effectively.
// - Create and utilize higher-order functions.
// - Apply functions to solve common problems and perform calculations.
// - Enhance code reusability and organization using functions.
