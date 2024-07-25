// Day 13: module

// Tasks/Activities

// Activity 1: Creating and Exporting module

// - Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
import { addNumbers } from './module/math.js';
console.log(addNumbers(5, 3));

// - Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
import { person } from './module/person.js';
console.log(person.name);
person.greet();

// Activity 2: Named and Default Exports

// - Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
import { capitalize, lowercase } from './module/strfunction.js';
console.log(capitalize('hello'));
console.log(lowercase('WORLD'));

// - Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
import defaultFunction from './module/defaultFunction.js';
console.log(defaultFunction('Hello, World!'));

// Activity 3: Importing Entire module

// - Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
import * as myModule from './module/constantsAndFunctions.js';
console.log(myModule.PI);
console.log(myModule.calculateCircumference(3));

// Activity 4: Using Third-Party module

// - Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
import _ from 'lodash';
console.log(_.chunk(['a', 'b', 'c', 'd'], 2));

// - Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
import axios from 'axios';
axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => console.log(response.data))
    .catch(error => console.error(error));

// Activity 5: Module Bundling (Optional)
// - Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.
// Additional Activities (Optional):
// - Task 9: Create a module that exports a class. Import and use this class in another script.


// Feature Request:

// 1. Basic Module Script: Write a script that creates a module exporting a function and imports it in another script.
// 2. Named and Default Exports Script: Create a script demonstrating both named and default exports and their usage.
// 3. Third-Party Module Script: Write a script that installs, imports, and uses functions from third-party module like lodash and axios.
// 4. Module Bundling Script: Create a script demonstrating how to bundle JavaScript files using a module bundler (optional).

// Achievement:

// By the end of these activities, students will:

// - Create and export functions, objects, and constants using module.
// - Import module using named and default imports.
// - Use third-party module installed via npm.
// - Understand the basics of module bundling (optional).