// Day 20: LocalStorage and SessionStorage

// Activity 1: Understanding LocalStorage

// Task 1: Save a string value to localStorage and retrieve it. Log the retrieved value.
localStorage.setItem('myKey', 'Hello, LocalStorage!');
const retrievedValue = localStorage.getItem('myKey');
console.log('Retrieved value:', retrievedValue);

// Task 2: Save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const myObject = { name: 'Omkar', age: 21 };
localStorage.setItem('myObject', JSON.stringify(myObject));
const retrievedObject = JSON.parse(localStorage.getItem('myObject'));
console.log('Retrieved object:', retrievedObject);

// Activity 2: Using LocalStorage

// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.
document.getElementById('localStorageForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('localName').value.trim();
    const email = document.getElementById('localEmail').value.trim();
    if (name && email) {
        localStorage.setItem('userData', JSON.stringify({ name, email }));
        displayLocalStorageData();
    }
});

function displayLocalStorageData() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const savedDataDiv = document.getElementById('localStorageData');
    savedDataDiv.innerHTML = userData
        ? `Name: ${userData.name}<br>Email: ${userData.email}`
        : 'No saved data';
}

displayLocalStorageData();

// Task 4: Remove an item from localStorage. Log the localStorage content before and after removal.
console.log('Before removal:', { ...localStorage });
localStorage.removeItem('myKey');
console.log('After removal:', { ...localStorage });

// Activity 3: Understanding SessionStorage

// Task 5: Save a string value to sessionStorage and retrieve it. Log the retrieved value.
sessionStorage.setItem('mySessionKey', 'Hello, SessionStorage!');
const retrievedSessionValue = sessionStorage.getItem('mySessionKey');
console.log('Retrieved session value:', retrievedSessionValue);

// Task 6: Save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const mySessionObject = { name: 'Omkar', age: 25 };
sessionStorage.setItem('mySessionObject', JSON.stringify(mySessionObject));
const retrievedSessionObject = JSON.parse(sessionStorage.getItem('mySessionObject'));
console.log('Retrieved session object:', retrievedSessionObject);

// Activity 4: Using SessionStorage

// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.
document.getElementById('sessionStorageForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('sessionName').value.trim();
    const email = document.getElementById('sessionEmail').value.trim();
    if (name && email) {
        sessionStorage.setItem('sessionUserData', JSON.stringify({ name, email }));
        displaySessionStorageData();
    }
});

function displaySessionStorageData() {
    const userData = JSON.parse(sessionStorage.getItem('sessionUserData'));
    const savedDataDiv = document.getElementById('sessionStorageData');
    savedDataDiv.innerHTML = userData
        ? `Name: ${userData.name}<br>Email: ${userData.email}`
        : 'No saved session data';
}

displaySessionStorageData();

// Task 8: Remove an item from sessionStorage. Log the sessionStorage content before and after removal.
console.log('Before session removal:', { ...sessionStorage });
sessionStorage.removeItem('mySessionKey');
console.log('After session removal:', { ...sessionStorage });

// Activity 5: Comparing LocalStorage and SessionStorage

// Task 9: Save a value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.
function saveToStorages(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    sessionStorage.setItem(key, JSON.stringify(value));
    console.log('LocalStorage value:', JSON.parse(localStorage.getItem(key)));
    console.log('SessionStorage value:', JSON.parse(sessionStorage.getItem(key)));
}

document.getElementById('saveToStoragesBtn').addEventListener('click', function () {
    saveToStorages('commonKey', { data: 'This is stored in both storages' });
});

// Task 10: Clear all data from both localStorage and sessionStorage. Verify that both storages are empty.
function clearAllStorages() {
    localStorage.clear();
    sessionStorage.clear();
    console.log('LocalStorage after clearing:', { ...localStorage });
    console.log('SessionStorage after clearing:', { ...sessionStorage });
    console.log('Storages are empty:', localStorage.length === 0 && sessionStorage.length === 0);
}

document.getElementById('clearStoragesBtn').addEventListener('click', clearAllStorages);


// Feature Request:

// LocalStorage Script: Write a script that saves, retrieves, and removes items from localStorage, and displays the saved data on page load.
// SessionStorage Script: Create a script that saves, retrieves, and removes items from sessionStorage, and displays the saved data on page load.
// Storage Comparison Script: Write a script that saves data to both localStorage and sessionStorage, retrieves the data, and compares the results.
// Clear Storage Script: Create a script that clears all data from both localStorage and sessionStorage, and verifies the operation.
// Achievement:

// By the end of these activities, students will:

// Understand how to use localStorage and sessionStorage for persistent and session-specific data storage.
// Save, retrieve, and remove data from both localStorage and sessionStorage.
// Implement form data storage using localStorage and sessionStorage.
// Compare and contrast the use cases for localStorage and sessionStorage.