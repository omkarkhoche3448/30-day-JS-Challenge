// Day 23: LeetCode Hard

// Tasks/Activities:

// Activity 1: Median of Two Sorted Arrays
// Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
// Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
// Log the median for a few test cases, including edge cases.
function findMedianSortedArrays(nums1, nums2) {
    const merge = [...nums1, ...nums2].sort((a, b) => a - b);
    const len = merge.length;
    if (len % 2 === 0) {
        return (merge[Math.floor(len / 2) - 1] + merge[Math.floor(len / 2)]) / 2;
    } else {
        return merge[Math.floor(len / 2)];
    }
}

console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2.00000    
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.50000


// Activity 2: Merge k Sorted Lists
// Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
// Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.
// Create a few test cases with linked lists and log the merged list.

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    if (lists.length === 0) return null;

    let mergeTwoLists = (l1, l2) => {
        let dummy = new ListNode();
        let current = dummy;
        while (l1 && l2) {
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }
        current.next = l1 || l2;
        return dummy.next;
    }

    while (lists.length > 1) {
        let a = lists.shift();
        let b = lists.shift();
        let merged = mergeTwoLists(a, b);
        lists.push(merged);
    }

    return lists[0];
}

function arrayToList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

function listToArray(list) {
    let arr = [];
    while (list) {
        arr.push(list.val);
        list = list.next;
    }
    return arr;
}

let lists = [arrayToList([1, 4, 5]), arrayToList([1, 3, 4]), arrayToList([2, 6])];
console.log(listToArray(mergeKLists(lists))); // Output: [1, 1, 2, 3, 4, 4, 5, 6]

lists = [arrayToList([]), arrayToList([])];
console.log(listToArray(mergeKLists(lists))); // Output: []

// Activity 3: Trapping Rain Water
// Task 3: Solve the "Trapping Rain Water" problem on LeetCode.
// Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining.
// Log the amount of trapped water for a few test cases.
function trap(height) {
    let left = 0, right = height.length - 1, leftMax = 0, rightMax = 0, water = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            height[left] >= leftMax ? (leftMax = height[left]) : water += (leftMax - height[left]);
            left++;
        } else {
            height[right] >= rightMax ? (rightMax = height[right]) : water += (rightMax - height[right]);
            right--;
        }
    }
    return water;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
console.log(trap([4, 2, 0, 3, 2, 5])); // Output: 9


// Activity 4: N-Queens
// Task 4: Solve the "N-Queens" problem on LeetCode.
// Write a function that places n queens on an nxn chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens puzzle.
// Log the distinct solutions for a few test cases.
function solveNQueens(n) {
    let result = [];
    solve([], 0);
    return result;

    function solve(queens, row) {
        if (row === n) {
            result.push(generateBoard(queens));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isValid(queens, row, col)) {
                queens.push(col);
                solve(queens, row + 1);
                queens.pop();
            }
        }
    }

    function isValid(queens, row, col) {
        for (let r = 0; r < row; r++) {
            let c = queens[r];
            if (c === col || c - r === col - row || c + r === col + row) {
                return false;
            }
        }
        return true;
    }

    function generateBoard(queens) {
        return queens.map(col => '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1));
    }
}

console.log(solveNQueens(4));


// Activity 5: Word Ladder
// Task 5: Solve the "Word Ladder" problem on LeetCode.
// Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word, such that only one letter can be changed at a time and each transformed word must exist in the word list.
// Log the length of the shortest transformation sequence for a few test cases.
function ladderLength(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    let queue = [[beginWord, 1]];
    while (queue.length) {
        let [word, len] = queue.shift();
        if (word === endWord) return len;
        for (let i = 0; i < word.length; i++) {
            for (let c = 97; c <= 122; c++) { // 'a' to 'z'
                let newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
                if (wordSet.has(newWord)) {
                    queue.push([newWord, len + 1]);
                    wordSet.delete(newWord);
                }
            }
        }
    }
    return 0;
}

console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // Output: 5
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // Output: 0

// Feature Request:
// 1. Median of Two Sorted Arrays Script: Write a script that includes a function to find the median of two sorted arrays and logs the median.
// 2. Merge k Sorted Lists Script: Create a script that includes a function to merge k sorted linked lists and logs the merged list.
// 3. Trapping Rain Water Script: Write a script that includes a function to calculate the amount of trapped rainwater and logs the result.
// 4. N-Queens Script: Create a script that includes a function to solve the N-Queens problem and logs the distinct solutions.
// 5. Word Ladder Script: Write a script that includes a function to find the shortest transformation sequence in a word ladder and logs the sequence length.

// Achievement:
// By the end of these activities, students will:
// - Solve complex LeetCode problems.
// - Apply advanced problem-solving skills to implement efficient algorithms.
// - Understand and handle edge cases in hard algorithmic solutions.
// - Gain confidence in solving hard-level coding challenges on LeetCode.
