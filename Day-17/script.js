// Day 17: Data Structures

// # Tasks / Activities:

// Activity 1: Linked List
// - Task 1: Implement a `Node` class to represent an element in a linked list with properties `value` and `next`.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// - Task 2: Implement a `LinkedList` class with methods to add a node to the end, remove a node from the end, and display all nodes.
class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    removeNode() {
        if (this.head === null) {
            return;
        }
        if (this.head.next === null) {
            this.head = null;
            return;
        }
        let current = this.head;
        while (current.next.next !== null) {
            current = current.next;
        }
        current.next = null;
    }

    displayNodes() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const ll = new LinkedList();
ll.addNode(1);
ll.addNode(2);
ll.addNode(3);
ll.displayNodes();
ll.removeNode();
ll.displayNodes();

// Activity 2: Stack
// - Task 3: Implement a `Stack` class with methods `push` (add element), `pop` (remove element), and `peek` (view the top element).
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // 3
stack.pop();
console.log(stack.peek()); // 2

// - Task 4: Use the `Stack` class to reverse a string by pushing all characters onto the stack and then popping them off.
function reverseStringUsingStack(str) {
    const stack = new Stack();
    for (let char of str) {
        stack.push(char);
    }
    let reversedStr = "";
    while (stack.items.length > 0) {
        reversedStr += stack.pop();
    }
    return reversedStr;
}

console.log(reverseStringUsingStack("hello")); // "olleh"

// Activity 3: Queue
// - Task 5: Implement a `Queue` class with methods `enqueue` (add element), `dequeue` (remove element), and `front` (view the first element).
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.shift();
    }

    front() {
        if (this.items.length === 0) {
            return "No elements in Queue";
        }
        return this.items[0];
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.front()); // 1
queue.dequeue();
console.log(queue.front()); // 2

// - Task 6: Use the `Queue` class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
class PrinterQueue {
    constructor() {
        this.queue = new Queue();
    }

    addJob(job) {
        this.queue.enqueue(job);
    }

    processJob() {
        if (this.queue.items.length === 0) {
            console.log("No jobs in the queue");
        } else {
            console.log(`Processing job: ${this.queue.dequeue()}`);
        }
    }
}

const printerQueue = new PrinterQueue();
printerQueue.addJob("Print document 1");
printerQueue.addJob("Print document 2");
printerQueue.processJob(); // Processing job: Print document 1
printerQueue.processJob(); // Processing job: Print document 2

// Activity 4: Binary Tree
// - Task 7: Implement a `TreeNode` class to represent a node in a binary tree with properties `value`, `left`, and `right`.
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// - Task 8: Implement a `BinaryTree` class with methods for inserting values and performing in-order traversal to display nodes.
class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal(node) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}

const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(2);
binaryTree.insert(4);
binaryTree.insert(6);
binaryTree.insert(8);
binaryTree.inOrderTraversal(binaryTree.root);

// Activity 5: Graph (Optional)
// - Task 9: Implement a `Graph` class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
// - Task 10: Use the `Graph` class to represent a simple network and perform BFS to find the shortest path between two nodes.

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1).push(vertex2);
            this.adjacencyList.get(vertex2).push(vertex1);
        }
    }

    bfs(startingNode) {
        let visited = new Set();
        let queue = [];
        visited.add(startingNode);
        queue.push(startingNode);

        while (queue.length > 0) {
            let currentNode = queue.shift();
            console.log(currentNode);

            let neighbors = this.adjacencyList.get(currentNode);
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
graph.bfs('A');

// # Feature Request:
// 1. Linked List Script: Write a script that implements a linked list with methods to add, remove, and display nodes.
// 2. Stack Script: Create a script that implements a stack and uses it to reverse a string.
// 3. Queue Script: Write a script that implements a queue and simulates a printer queue.
// 4. Binary Tree Script: Create a script that implements a binary tree with insertion and in-order traversal methods.
// 5. Graph Script: Write a script that implements a graph and performs breadth-first search (optional).

// # Achievement:
// By the end of these activities, students will:
// - Implement and use linked lists for dynamic data storage.
// - Use stacks for LIFO (Last-In-First-Out) operations and reverse data.
// - Use queues for FIFO (First-In-First-Out) operations and simulate real-world scenarios.
// - Implement binary trees for hierarchical data storage and traversal.
// - Understand and use graphs for network representations and pathfinding (optional).
