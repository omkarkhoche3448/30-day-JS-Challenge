// Day 12: Error Handling

// Tasks/Activities:
function displayResult(taskId, message) {
    document.getElementById(taskId).innerText = message;
}

// Activity 1: Basic Error Handling with Try-Catch

// - Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
document.getElementById("task1").addEventListener("click", function () {
    function throwError() {
        throw new Error("This is an intentional error");
    }

    try {
        throwError();
    } catch (error) {
        displayResult("result1", "An error occurred: " + error.message);
    }
});

// - Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
document.getElementById("task2").addEventListener("click", function () {
    function divideNumbers(numerator, denominator) {
        if (denominator === 0) {
            throw new Error("Denominator cannot be zero");
        }
        return numerator / denominator;
    }

    try {
        const result = divideNumbers(10, 0);
        displayResult("result2", "Result: " + result);
    } catch (error) {
        displayResult("result2", "An error occurred: " + error.message);
    }
});

// Activity 2: Finally Block
// - Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
document.getElementById("task3").addEventListener("click", function () {
    try {
        const result = 10 / 10;
        displayResult("result3", "Try: Result: " + result);
    } catch (error) {
        displayResult("result3", "An error occurred: " + error.message);
    } finally {
        displayResult("result3", "Finally: This will always be executed.");
    }
});

// Activity 3: Custom Error Objects
// - Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
document.getElementById("task4").addEventListener("click", function () {
    class CustomError extends Error {
        constructor(message) {
            super(message);
            this.name = "CustomError";
        }
    }

    function throwError() {
        throw new CustomError("This is a custom error");
    }

    try {
        throwError();
    } catch (error) {
        if (error instanceof CustomError) {
            displayResult("result4", "Custom Error: " + error.message);
        } else {
            displayResult("result4", "An error occurred: " + error.message);
        }
    }
});

// - Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
document.getElementById("task5").addEventListener("click", function () {
    function validateInput(input) {
        if (input.trim() === "") {
            throw new Error("Input cannot be empty");
        }
    }

    try {
        validateInput("");
    } catch (error) {
        displayResult("result5", "An error occurred: " + error.message);
    }
});

// Activity 4: Error Handling in Promises
// - Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
document.getElementById("task6").addEventListener("click", function () {
    function randomPromise() {
        return new Promise((resolve, reject) => {
            const random = Math.random();
            if (random < 0.5) {
                resolve("Promise resolved");
            } else {
                reject(new Error("Promise rejected"));
            }
        });
    }

    randomPromise()
        .then((result) => {
            displayResult("result6", "Promise resolved: " + result);
        })
        .catch((error) => {
            displayResult("result6", "Promise rejected: " + error.message);
        });
});

// - Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
document.getElementById("task7").addEventListener("click", async function () {
    async function randomAsyncPromise() {
        try {
            const result = await new Promise((resolve, reject) => {
                const random = Math.random();
                if (random < 0.5) {
                    resolve("Promise resolved");
                } else {
                    reject(new Error("Promise rejected"));
                }
            });
            displayResult("result7", "Promise resolved: " + result);
        } catch (error) {
            displayResult("result7", "Promise rejected: " + error.message);
        }
    }

    randomAsyncPromise();
});

// Activity 5: Graceful Error Handling in Fetch
// - Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
document.getElementById("task8").addEventListener("click", function () {
    fetch("https://invalid.url")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            displayResult("result8", "Data: " + JSON.stringify(data));
        })
        .catch((error) => {
            displayResult("result8", "Fetch error: " + error.message);
        });
});


// - Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
document.getElementById("task9").addEventListener("click", async function () {
    async function fetchWithErrorHandling() {
        try {
            const response = await fetch("https://invalid.url");
            const data = await response.json();
            displayResult("result9", "Data: " + JSON.stringify(data));
        } catch (error) {
            displayResult("result9", "Fetch error: " + error.message);
        }
    }

    fetchWithErrorHandling();
});

// Feature Request:
// 1. Basic Error Handling Script: Write a script that demonstrates basic error handling using try-catch and finally blocks.
// 2. Custom Error Script: Create a script that defines and throws custom errors, handling them with try-catch blocks.
// 3. Promise Error Handling Script: Write a script that handles errors in promises using .catch() and try-catch within async functions.
// 4. Fetch Error Handling Script: Create a script that handles errors when using the fetch API to request data from invalid URLs.

// Achievement:
// By the end of these activities, students will:
// - Understand and implement basic error handling using try-catch blocks.
// - Use finally blocks to execute code regardless of the try-catch outcome.
// - Create and use custom error classes.
// - Handle errors in promises using .catch() and within async functions using try-catch.
// - Implement graceful error handling when making network requests with the fetch API.


