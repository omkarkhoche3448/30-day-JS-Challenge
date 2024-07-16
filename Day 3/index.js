// Activity 1: If-Else Statements
// - Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
function checkNumber(n) {
    if (n > 0) {
        console.log(`${n} is a positive number`);
    } else if (n < 0) {
        console.log(`${n} is a negative number`);
    } else {
        console.log(`${n} is zero`);
    }
}
checkNumber(10);
checkNumber(-10);
checkNumber(0);

// - Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
function checkAge(age) {
    if (age >= 18) {
        console.log("Eligible to Vote");
    } else {
        console.log("Not Eligible to Vote");
    }
}
checkAge(18);
checkAge(17);
checkAge(10);

// Activity 2: Nested If-Else Statements
// - Task 3: Write a program to find the largest of three numbers using nested if-else statements.
function findLargest(a, b, c) {
    if (a > b && a > c) {
        console.log(`${a} is the largest number`);
    } else if (b > a && b > c) {
        console.log(`${b} is the largest number`);
    } else {
        console.log(`${c} is the largest number`);
    }
}
findLargest(10, 20, 30);
findLargest(20, 10, 30);
findLargest(20, 30, 10);

// Activity 3: Switch Case
// - Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
function checkDay(day) {
    switch (day) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid Day");
    }
}
checkDay(1);
checkDay(2);
checkDay(3);
checkDay(4);
checkDay(5);
checkDay(6);
checkDay(7);
checkDay(8);

// - Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
function checkGrade(score) {
    switch (true) {
        case score >= 90:
            console.log("A");
            break;
        case score >= 80:
            console.log("B");
            break;
        case score >= 70:
            console.log("C");
            break;
        case score >= 60:
            console.log("D");
            break;
        default:
            console.log("F");
    }
}
checkGrade(90);
checkGrade(80);
checkGrade(70);
checkGrade(60);
checkGrade(50);

// Activity 4: Conditional (Ternary) Operator
// - Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
function checkEvenOdd(n) {
    console.log(n % 2 == 0 ? "Even" : "Odd");
}
checkEvenOdd(10);
checkEvenOdd(11);
checkEvenOdd(12);
checkEvenOdd(13);
checkEvenOdd(14);
checkEvenOdd(15);
checkEvenOdd(16);

// Activity 5: Combining Conditions
// - Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
function checkLeapYear(year) {
    console.log(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0) ? "Leap Year" : "Not a Leap Year");
}
checkLeapYear(2000);
checkLeapYear(2020);
checkLeapYear(2021);
checkLeapYear(2022);
checkLeapYear(2023);
checkLeapYear(2024);
checkLeapYear(2025);
checkLeapYear(2026);
checkLeapYear(2027);

// Feature Request:
// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.

// Achievement:
// By the end of these activities, students will:
// - Implement and understand basic if-else control flow.
// - Use nested if-else statements to handle multiple conditions.
// - Utilize switch cases for control flow based on specific values.
// - Apply the ternary operator for concise condition checking.
// - Combine multiple conditions to solve more complex problems.
