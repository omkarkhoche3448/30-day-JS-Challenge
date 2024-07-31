// Day 19: Regular Expressions

// Tasks/Activities:

// Activity 1: Basic Regular Expressions

// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
const task1 = (str) => {
    const regex = /JavaScript/g;
    console.log("Task 1 matches:", str.match(regex));
};
task1("I love JavaScript. JavaScript is awesome!");

// Task 2: Write a regular expression to match all digits in a string. Log the matches.
const task2 = (str) => {
    const regex = /\d/g;
    console.log("Task 2 matches:", str.match(regex));
};
task2("There are 12345 numbers in this string.");

// Activity 2: Character Classes and Quantifiers

// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
const task3 = (str) => {
    const regex = /\b[A-Z][a-z]*\b/g;
    console.log("Task 3 matches:", str.match(regex));
};
task3("This is a sample string with words starting with Capital letters.");

// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
const task4 = (str) => {
    const regex = /\d+/g;
    console.log("Task 4 matches:", str.match(regex));
};
task4("The number 84567 is a sequence of digits 1234.");

// Activity 3: Grouping and Capturing

// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
const task5 = (str) => {
    const regex = /\((\d{3})\) (\d{3})-(\d{4})/;
    const match = str.match(regex);
    if (match) {
        console.log("Task 5 captures:", match.slice(1));
    } else {
        console.log("Task 5 no match found");
    }
};
task5("(123) 456-7890");

// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
const task6 = (email) => {
    const regex = /([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;
    const match = email.match(regex);
    if (match) {
        console.log("Task 6 captures:", match.slice(1));
    } else {
        console.log("Task 6 no match found");
    }
};
task6("user@gmail.com");
task6("user@example.com");

// Activity 4: Assertions and Boundaries

// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
const task7 = (str) => {
    const regex = /^\w+/;
    const match = str.match(regex);
    if (match) {
        console.log("Task 7 matches:", match[0]);
    } else {
        console.log("Task 7: No match found");
    }
};

task7("This is a sample string with words starting with capital letters."); // Should log: "This"
task7("Another example string"); // Should log: "Another"

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
const task8 = (str) => {
    const regex = /\b\w+\b$/;
    const match = str.match(regex);
    if (match) {
        console.log("Task 8 matches:", match[0]);
    } else {
        console.log("Task 8: No match found");
    }
};

task8("This is a sample string with words starting with capital letters."); // Should log: "letters"
task8("Another example string"); // Should log: "string"


// Activity 5: Practical Applications

// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
const task9 = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const valid = regex.test(password);
    console.log("Task 9 password is valid:", valid);
};
task9("P@ssw0rd!");
task9("password");

// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
const task10 = (url) => {
    const regex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/\w+)*\/?$/;
    const valid = regex.test(url);
    console.log("Task 10 URL is valid:", valid);
};
task10("https://www.example.com");
task10("invalid-url");
task10("https://example.com/page");


// Feature Request:
//1. Basic Regex Script: Write a script that uses regular expressions to match simple patterns and log the matches.
//2. Character Classes and Quantifiers Script: Create a script that uses regular expressions to match words with specific characteristics and log the matches.
//3. Grouping and Capturing Script: Write a script that uses regular expressions to capture parts of a string, such as phone numbers and email addresses, and log the captures.
//4. Assertions and Boundaries Script: Create a script that uses regular expressions to match words at specific positions in a string and log the matches.
//5. Validation Script: Write a script that uses regular expressions to validate passwords and URLs and log whether they are valid.

// Achievement:
// By the end of these activities, students will:
// - Understand and create basic regular expressions.
// - Use character classes and quantifiers in regular expressions.
// - Implement grouping and capturing in regular expressions.
// - Apply assertions and boundaries in regular expressions.
// - Use regular expressions for practical applications like validating passwords and URLs.

