// Day 22: LeetCode Medium

// Tasks/Activities:

// Activity 1: Add Two Numbers

// Task 1: Solve the "Add Two Numbers" problem on LeetCode.
// Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.
// Create a few test cases with linked lists and log the sum as a linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(0);
    let p = l1, q = l2, curr = dummy;
    let carry = 0;

    while (p !== null || q !== null) {
        let x = (p !== null) ? p.val : 0;
        let y = (q !== null) ? q.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return dummy.next;
}

// Test cases
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
let result = addTwoNumbers(l1, l2);
let arr = [];
while (result !== null) {
    arr.push(result.val);
    result = result.next;
}
console.log(arr); // [7, 0, 8]

// Activity 2: Longest Substring Without Repeating Characters

// Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.
// Write a function that takes a string and returns the length of the longest substring without repeating characters.
// Log the length for a few test cases, including edge cases.
function lengthOfLongestSubstring(s) {
    let map = new Map();
    let left = 0, right = 0, maxLength = 0;

    while (right < s.length) {
        if (map.has(s[right])) {
            left = Math.max(map.get(s[right]) + 1, left);
        }
        map.set(s[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
        right++;
    }

    return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3

// Activity 3: Container With Most Water

// Task 3: Solve the "Container With Most Water" problem on LeetCode.
// Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water.
// Log the maximum amount of water for a few test cases.
function maxArea(height) {
    let left = 0, right = height.length - 1, maxWater = 0;

    while (left < right) {
        const width = right - left;
        const h = Math.min(height[left], height[right]);
        maxWater = Math.max(maxWater, h * width);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}

// Test cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1

// Activity 4: 3Sum

// Task 4: Solve the "3Sum" problem on LeetCode.
// Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.
// Log the triplets for a few test cases, including edge cases.
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const results = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                results.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return results;
}

// Test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0, 1, 1])); // []
console.log(threeSum([0, 0, 0])); // [[0, 0, 0]]

// Activity 5: Group Anagrams

// Task 5: Solve the "Group Anagrams" problem on LeetCode.
// Write a function that takes an array of strings and groups anagrams together.
// Log the grouped anagrams for a few test cases.
function groupAnagrams(strs) {
    const map = new Map();
    for (let str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }
    return Array.from(map.values());
}

// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]

// Feature Request:

// Add Two Numbers Script: Write a script that includes a function to solve the "Add Two Numbers" problem and logs the sum as a linked list.
// Longest Substring Script: Create a script that includes a function to find the longest substring without repeating characters and logs the length.
// Container With Most Water Script: Write a script that includes a function to find the container with the most water and logs the maximum amount of water.
// 3Sum Script: Create a script that includes a function to find all unique triplets in an array that sum to zero and logs the triplets.
// Group Anagrams Script: Write a script that includes a function to group anagrams and logs the grouped anagrams.

// Achievement:

// By the end of these activities, students will:

// Solve common medium-level LeetCode problems.
// Apply advanced problem-solving skills to implement algorithms.
// Understand and handle edge cases in more complex algorithmic solutions.
// Gain confidence in solving medium-level coding challenges on LeetCode.
