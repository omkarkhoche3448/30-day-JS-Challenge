// Day 21: LeetCode Easy

// Activity 1: Two Sum

// Task 1: Solve the "Two Sum" problem on LeetCode.
// Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
// Log the indices for a few test cases.
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

// Log Two Sum test cases
console.log('Two Sum Test Cases:');
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]

// Activity 2: Reverse Integer

// Task 2: Solve the "Reverse Integer" problem on LeetCode.
// Write a function that takes an integer and returns it with its digits reversed.
// Handle edge cases like negative numbers and numbers ending in zero.
// Log the reversed integers for a few test cases.
function reverseInteger(num) {
    const sign = Math.sign(num);
    const reversed = parseInt(Math.abs(num).toString().split('').reverse().join(''), 10);
    return sign * reversed;
}

// Log Reverse Integer test cases
console.log('Reverse Integer Test Cases:');
console.log(reverseInteger(123)); // 321
console.log(reverseInteger(-123)); // -321
console.log(reverseInteger(120)); // 21

// Activity 3: Palindrome Number

// Task 3: Solve the "Palindrome Number" problem on LeetCode.
// Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
// Log the result for a few test cases, including edge cases like negative numbers.
function isPalindromeNumber(num) {
    if (num < 0) return false;
    const str = num.toString();
    return str === str.split('').reverse().join('');
}

// Log Palindrome Number test cases
console.log('Palindrome Number Test Cases:');
console.log(isPalindromeNumber(121)); // true
console.log(isPalindromeNumber(-121)); // false
console.log(isPalindromeNumber(10)); // false

// Activity 4: Merge Two Sorted Lists

// Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
// Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
// Create a few test cases with linked lists and log the merged list.
function mergeTwoSortedLists(l1, l2) {
    const dummy = { val: 0, next: null };
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 === null ? l2 : l1;
    return dummy.next;
}

// Helper function to convert linked list to array for logging
function linkedListToArray(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Log Merge Two Sorted Lists test cases
console.log('Merge Two Sorted Lists Test Cases:');
const list1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
const list2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };
console.log(linkedListToArray(mergeTwoSortedLists(list1, list2))); // [1, 1, 2, 3, 4, 4]

// Activity 5: Valid Parentheses

// Task 5: Solve the "Valid Parentheses" problem on LeetCode.
// Write a function that takes a string containing just the characters '(', ')', '{', '}', '[' and ']', and determines if the input string is valid.
// A string is valid if open brackets are closed in the correct order.
// Log the result for a few test cases.
function isValidParentheses(s) {
    const stack = [];
    const map = { ')': '(', '}': '{', ']': '[' };

    for (const char of s) {
        if (map[char]) {
            if (stack.pop() !== map[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}

// Log Valid Parentheses test cases
console.log('Valid Parentheses Test Cases:');
console.log(isValidParentheses('()')); // true
console.log(isValidParentheses('([)]')); // false
console.log(isValidParentheses('{[]}')); // true

// Feature Request:

// Two Sum Script: Write a script that includes a function to solve the "Two Sum" problem and logs the indices of the two numbers.
// Reverse Integer Script: Create a script that includes a function to reverse an integer and handles edge cases.
// Palindrome Number Script: Write a script that includes a function to check if an integer is a palindrome and logs the result.
// Merge Two Sorted Lists Script: Create a script that includes a function to merge two sorted linked lists and logs the merged list.
// Valid Parentheses Script: Write a script that includes a function to check if a string of parentheses is valid and logs the result.
// Achievement:

// By the end of these activities, students will:

// Solve common LeetCode problems.
// Apply problem-solving skills to implement algorithms.
// Understand and handle edge cases in algorithmic solutions.
// Gain confidence in solving easy-level coding challenges on LeetCode.