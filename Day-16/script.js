//  Day 16: Recursion

// # Tasks/Activities:

// Activity 1: Basic Recursion
// - Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}

console.log("factorial of 0", factorial(0));
console.log("factorial of 1", factorial(1));
console.log("factorial of 5", factorial(5));

// - Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
function fibonacci(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci of 0:", fibonacci(0));
console.log("Fibonacci of 1:", fibonacci(1));
console.log("Fibonacci of 2:", fibonacci(2));
console.log("Fibonacci of 4:", fibonacci(4));
console.log("Fibonacci of 6:", fibonacci(6));


// Activity 2: Recursion with Arrays
// - Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumArray(arr.slice(1));
}

console.log("Sum of arr [1, 2, 3, 4, 5]:", sumArray([1, 2, 3, 4, 5]));

// - Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function maxArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return Math.max(arr[0], maxArray(arr.slice(1)));
}

console.log("Max of arr [1, 2, 3, 4, 5]:", maxArray([1, 2, 3, 4, 5]));

// Activity 3: String Manipulation with Recursion
// - Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseString(str) {
    if (str.length === 0) {
        return "";
    }
    return reverseString(str.slice(1)) + str[0];
}

console.log("Reverse of 'abc':", reverseString("abc"));

// - Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindrome(str) {
    if (str.length === 0) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.slice(1, str.length - 1));
}

console.log("Is 'abc' a palindrome:", isPalindrome("abc"));
console.log("Is 'abcba' a palindrome:", isPalindrome("abcba"));
console.log("Is 'abccba' a palindrome:", isPalindrome("abccba"));


// Activity 4: Recursive Search
// - Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    }
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
        return mid;
    }
    if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1);
    }
    return binarySearch(arr, target, mid + 1, right);
}

console.log("Index of 5 in arr [1, 2, 3, 4, 5, 6]:", binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log("Index of 7 in arr [1, 2, 3, 4, 5, 6]:", binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1


// - Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function countOccurrences(arr, target) {
    if (arr.length === 0) {
        return 0;
    }
    if (arr[0] === target) {
        return 1 + countOccurrences(arr.slice(1), target);
    }
    return countOccurrences(arr.slice(1), target);
}

console.log("Count of 5 in arr [1, 2, 3, 4, 5, 6]:", countOccurrences([1, 2, 3, 4, 5, 6], 5));
console.log("Count of 7 in arr [1, 2, 3, 4, 5, 6]:", countOccurrences([1, 2, 3, 4, 5, 6], 7));

// Activity 5: Tree Traversal (Optional)
// - Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(node) {
    if (node === null) {
        return;
    }
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
}

let root = new BinaryTreeNode(1);
root.left = new BinaryTreeNode(2);
root.right = new BinaryTreeNode(3);
root.left.left = new BinaryTreeNode(4);
root.left.right = new BinaryTreeNode(5);
console.log("In-order traversal:");
inOrderTraversal(root);


// - Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
function depth(node) {
    if (node === null) {
        return 0;
    }
    return 1 + Math.max(depth(node.left), depth(node.right));
}

console.log("Depth of root:", depth(root));

// # Feature Request:
// 1. Factorial and Fibonacci Script: Write a script that includes recursive functions to calculate the factorial and Fibonacci numbers.
// 2. Array Recursion Script: Create a script that includes recursive functions to find the sum and maximum element of an array.
// 3. String Recursion Script: Write a script that includes recursive functions to reverse a string and check if a string is a palindrome.
// 4. Recursive Search Script: Create a script that includes recursive functions for binary search and counting occurrences in an array.
// 5. Tree Traversal Script: Write a script that includes recursive functions for in-order traversal and depth calculation of a binary tree (optional).

// # Achievement:
// By the end of these activities, students will:
// - Understand and implement basic recursion.
// - Apply recursion to solve problems with arrays and strings.
// - Use recursion for searching and counting elements in arrays.
// - Perform tree traversal and calculate tree depth using recursion (optional).
