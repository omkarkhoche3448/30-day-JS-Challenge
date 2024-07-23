// Day 11: Promises and Async/Await

// Tasks/Activities:

// Activity 1: Understanding Promises

// - Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
document.getElementById('promiseButton1').addEventListener('click', () => {
    const promise1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Message resolved after 2 seconds');
        }, 2000);
    });

    promise1.then((message) => console.log(message));
});

// - Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch()
document.getElementById('promiseButton2').addEventListener('click', () => {
    const promise2 = new Promise((_, reject) => {
        setTimeout(() => {
            reject('Error: Promise rejected after 2 seconds');
        }, 2000);
    });
    promise2.catch((error) => console.error(error));
});

// Activity 2: Chaining Promises

// - Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
document.getElementById('chainPromises').addEventListener('click', () => {
    const fetchData = (url) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Data fetched from ${url}`);
            }, 2000);
        });
    }
    fetchData('https://jsonplaceholder.typicode.com/posts/1')
        .then((data) => {
            console.log(data);
            return fetchData('https://jsonplaceholder.typicode.com/posts/2');
        })
        .then((data) => {
            console.log(data);
            return fetchData('https://jsonplaceholder.typicode.com/posts/1');
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => console.error(error));
});

// Activity 3: Using Async/Await

// - Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.\
document.getElementById('asyncFunctionButton').addEventListener('click', () => {
    const asyncFunction1 = async () => {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve('Async/Await resolved after 2 seconds');
            }, 2000);
        });
        const result = await promise;
        console.log(result);
    };
    asyncFunction1();
});

// - Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
document.getElementById('asyncFunctionWithErrorButton').addEventListener('click', () => {
    const asyncFunction2 = async () => {
        const promise = new Promise((_, reject) => {
            setTimeout(() => {
                reject('Async/Await rejected after 2 seconds');
            }, 2000);
        });
        try {
            const result = await promise;
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };
    asyncFunction2();
});

// Activity 4: Fetching Data from an API

// - Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
document.getElementById('fetchDataPromises').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
});

// - Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
document.getElementById('fetchDataAsync').addEventListener('click', () => {
    const fetchDataAsync = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };
    fetchDataAsync();
});

// Activity 5: Concurrent Promises

// - Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
document.getElementById('concurrentPromises').addEventListener('click', () => {
    const promise1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Promise 1 resolved');
        }, 2000);
    });
    const promise2 = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Promise 2 resolved');
        }, 1000);
    });
    Promise.all([promise1, promise2])
        .then((values) => console.log(values))
        .catch((error) => console.error(error));
});
// - Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
document.getElementById('promiseRace').addEventListener('click', () => {
    const promiseX = new Promise((resolve) => setTimeout(() => resolve('Promise X resolved first'), 1000));
    const promiseY = new Promise((resolve) => setTimeout(() => resolve('Promise Y resolved second'), 2000));

    Promise.race([promiseX, promiseY]).then((value) => console.log(value));
});


// Feature Request:
// 1. Promise Creation Script: Write a script that demonstrates creating and handling promises, including both resolved and rejected states.
// 2. Promise Chaining Script: Create a script that chains multiple promises and logs messages in a specific sequence.
// 3. Async/Await Script: Write a script that uses async/await to handle promises and includes error handling with try-catch.
// 4. API Fetch Script: Create a script that fetches data from an API using both promises and async/await, and logs the response data.
// 5. Concurrent Promises Script: Write a script that uses Promise.all and Promise.race to handle multiple promises concurrently and logs the results.

// Achievement:
// By the end of these activities, students will:
// - Understand and create promises, including handling resolved and rejected states.
// - Chain multiple promises to perform sequential asynchronous operations.
// - Use async/await to handle asynchronous code more readably.
// - Fetch data from public APIs using both promises and async/await.
// - Manage multiple concurrent promises using Promise.all and Promise.race.
