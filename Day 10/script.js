// Day 10: Event Handling

// Day 10: Event Handling

// Activity 1: Basic Event Handling
// - Task 1: Add a click event listener to a button that changes the text content of a paragraph.
document.getElementById("myButton").addEventListener("click", function () {
    document.getElementById("myParagraph").textContent = "Button Clicked!";
});

// - Task 2: Add a double-click event listener to an image that toggles its visibility.
document.getElementById("myImageVis").addEventListener("dblclick", function () {
    const image = document.getElementById("myImage");
    if (image.style.display === "none") {
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
});

// Activity 2: Mouse Events
// - Task 3: Add a mouseover event listener to an element that changes its background color.
document.getElementById("myElement").addEventListener("mouseover", function () {
    this.style.backgroundColor = "red";
});

// - Task 4: Add a mouseout event listener to an element that resets its background color.
document.getElementById("myElement").addEventListener("mouseout", function () {
    this.style.backgroundColor = "white";
});

// Activity 3: Keyboard Events
// - Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
document.getElementById("myInput").addEventListener("keydown", function (event) {
    console.log("Input key: " + event.key);
});

// - Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
document.getElementById("myInput").addEventListener("keyup", function (event) {
    document.getElementById("myParagraphInput").textContent = event.target.value;
});

// Activity 4: Form Events
// - Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log("Form Data:", Object.fromEntries(formData.entries()));
});

// - Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
document.getElementById("mySelect").addEventListener("change", function () {
    document.getElementById("myParagraphSelect").textContent = this.value;
});

// Activity 5: Event Delegation
// - Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
document.getElementById("myList").addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        console.log("Clicked List Item:", event.target.textContent);
    }
});

// - Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
document.getElementById("myParent").addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        console.log("Clicked Child Element:", event.target.textContent);
    }
});















// Feature Request:
// 1. Click Event Script: Write a script that adds a click event listener to a button to change the text content of a paragraph.
// 2. Mouse Events Script: Create a script that handles mouseover and mouseout events to change the background color of an element.
// 3. Keyboard Events Script: Write a script that logs key presses and displays input field values using keydown and keyup event listeners.
// 4. Form Events Script: Create a script that handles form submission and change events on a select dropdown.
// 5. Event Delegation Script: Write a script that demonstrates event delegation by handling events on dynamically added child elements.

// Achievement:
// By the end of these activities, students will:
// - Add and handle basic events like click, double-click, mouseover, mouseout, keydown, and keyup.
// - Understand and handle form events.
// - Implement event delegation to manage events on dynamically added elements.
// - Make web pages interactive by responding to various user actions.