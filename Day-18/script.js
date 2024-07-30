// Day 18: Algorithms

// Tasks/Activities:

// Activity 1: Sorting Algorithms
// - Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

const bubblearr = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble Sort Result:", bubbleSort(bubblearr));

// - Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }
    return arr;
}

const selectarr = [64, 34, 25, 12, 22, 11, 90];
console.log("Selection Sort Result:", selectionSort(selectarr));

// - Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);

    return [...quickSort(left), ...middle, ...quickSort(right)];
}

const quickarr = [64, 34, 25, 12, 22, 11, 90];
console.log("Quicksort Result:", quickSort(quickarr));

// Activity 2: Searching Algorithms
// - Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

const linearSearcharr = [64, 34, 25, 12, 22, 11, 90];
const linearSearchtarget = 22;
console.log(`Linear Search: Index of ${linearSearchtarget} is ${linearSearch(linearSearcharr, linearSearchtarget)}`);

// - Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}

const arr = [11, 12, 22, 25, 34, 64, 90];
const target = 22;
console.log(`Binary Search: Index of ${target} is ${binarySearch(arr, target)}`);

// Activity 3: String Algorithms
// - Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
function countCharacters(sc) {
    const charCount = {};
    for (const char of sc) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}

const sc = "hello world";
console.log("Character counts:", countCharacters(sc));

// - Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
function longestSubstringWithoutRepeat(s) {
    const charIndex = new Map();
    let start = 0;
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        if (charIndex.has(s[i]) && start <= charIndex.get(s[i])) {
            start = charIndex.get(s[i]) + 1;
        } else {
            maxLength = Math.max(maxLength, i - start + 1);
        }
        charIndex.set(s[i], i);
    }

    return maxLength;
}

const s = "abcabcbb";
console.log("Length of longest substring without repeating characters:", longestSubstringWithoutRepeat(s));

// Activity 4: Array Algorithms
// - Task 8: Write a function to rotate an array by k positions. Log the rotated array.
function rotateArray(arr, k) {
    k = k % arr.length;
    return [...arr.slice(-k), ...arr.slice(0, -k)];
}

const rotatearr = [1, 2, 3, 4, 5];
const k = 2;
console.log(`Array rotated by ${k} positions:`, rotateArray(rotatearr, k));

// - Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            merged.push(arr1[i++]);
        } else {
            merged.push(arr2[j++]);
        }
    }

    return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
console.log("Merged sorted array:", mergeSortedArrays(arr1, arr2));

// Activity 5: Dynamic Programming (Optional)
// - Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
function fibonacci(n) {
    if (n <= 1) return n;

    const fib = new Array(n + 1);
    fib[0] = 0;
    fib[1] = 1;

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[n];
}

const n = 10;
console.log(`The ${n}th Fibonacci number is:`, fibonacci(n));

// - Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.
function knapsack(values, weights, capacity) {
    const n = values.length;
    const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][capacity];
}

const values = [60, 100, 120];
const weights = [10, 20, 30];
const capacity = 50;
console.log("Maximum value in knapsack:", knapsack(values, weights, capacity));

// Feature Request:
// 1. Sorting Algorithm Script: Write a script that implements bubble sort, selection sort, and quicksort algorithms to sort arrays.
// 2. Searching Algorithm Script: Create a script that implements linear search and binary search algorithms to find values in arrays.
// 3. String Algorithm Script: Write a script that counts character occurrences and finds the longest substring without repeating characters.
// 4. Array Algorithm Script: Create a script that rotates arrays and merges sorted arrays.
// 5. Dynamic Programming Script: Write a script that solves the Fibonacci sequence and knapsack problem using dynamic programming (optional).

// Achievement:
// By the end of these activities, students will:
// - Implement and understand common sorting algorithms.
// - Implement and understand common searching algorithms.
// - Solve string manipulation problems using algorithms.
// - Perform array operations using algorithms.
// - Apply dynamic programming to solve complex problems (optional).

