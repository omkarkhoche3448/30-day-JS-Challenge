
// Day 15: Closures
// Tasks/Activities:
// Activity 1: Understanding Closures
// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outer() {
    const outerVariable = 'I am from the outer function!';
    function inner() {
        console.log(outerVariable);
    }
    return inner;
}

var inner = outer();
inner();

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function createCounter() {
    let counter = 0;

    return {
        increment: function () {
            counter++;
        },
        getValue: function () {
            return counter;
        }
    };
}

const counter = createCounter();
counter.increment();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());


// Activity 2: Practical Closures
// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function uniqueIdMaker() {
    var lastId = 0;
    return function () {
        lastId++;
        return lastId++;
    };
}

const generateID = uniqueIdMaker();
console.log("Id:", generateID());
console.log("Id:", generateID());

// Task 4: Create a closure that captures a user’s name and returns a function that greets the user by name.
function greeterMaker(name) {
    return function () {
        console.log("Hello, " + name + "!");
    };
}

const greet = greeterMaker("John");
greet();


// Activity 3: Closures in Loops
// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

function createFunctionsArray() {
    const array = [];

    for (let i = 0; i < 5; i++) {
        array.push(((index) => {
            return function () {
                console.log(index);
            };
        })(i));
    }

    return array;
}

const functionsArray = createFunctionsArray();
functionsArray[0]();
functionsArray[1]();
functionsArray[2]();


// Activity 4: Module Pattern
// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

function createModule() {
    let items = [];
    return {
        add: function (item) {
            items.push(item);
        },
        remove: function (item) {
            const index = items.indexOf(item);
            items.splice(index, 1);
        },
        list: function () {
            console.log(items);
        }
    };

}

const module2 = createModule();
module2.add("Item 1");
module2.add("Item 2");
module2.add("Item 3");
module2.list();
module2.remove("Item 2");
module2.list();


// Activity 5: Memoization
// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

// Memoization function
function memoize(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args); // Create a unique key for the arguments
        if (cache[key]) {
            return cache[key]; // Return the cached result if it exists
        }
        const result = fn(...args); // Call the original function
        cache[key] = result; // Store the result in the cache
        return result;
    };
}

function add(a, b) {
    return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2)); // 3 (calculated and stored in cache)
console.log(memoizedAdd(1, 2)); // 3 (retrieved from cache)


// Task 8: Create a memoized version of a function that calculates the factorial of a number.
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);


console.log(memoizedFactorial(5)); // 120 (calculated and stored in cache)
console.log(memoizedFactorial(5)); // 120 (retrieved from cache)
console.log(memoizedFactorial(6)); // 720 (calculated, uses cached value of factorial(5))


// Feature Request:
// Basic Closure Script: Write a script that demonstrates a basic closure with a function returning another function that accesses the outer function's variable.
// Counter Closure Script: Create a script that uses a closure to maintain a private counter with increment and get functions.
// Unique ID Generator Script: Write a script that generates unique IDs using a closure to keep track of the last generated ID.
// Loop Closure Script: Create a script that demonstrates closures in loops to ensure functions log the correct index.
// Memoization Script: Write a script that memoizes the results of a function and demonstrates it with a factorial calculation.
// Achievement:
// By the end of these activities, students will:

// Understand and create closures in JavaScript.
// Use closures to maintain private state and create encapsulated modules.
// Apply closures in practical scenarios like generating unique IDs and memoization.
// Use closures in loops to capture and use variables correctly.