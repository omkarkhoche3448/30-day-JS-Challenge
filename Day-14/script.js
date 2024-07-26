//  Day 14: Classes

// Tasks/Activities:

// Activity 1: Class Definition

// - Task 1: Define a class `Person` with properties `name` and `age`, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    // Task 2: Add a method to the Person class that updates the age property and logs the updated age.
    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}

const person1 = new Person('Ravina Tanden', 30);
console.log(person1.greeting());
person1.updateAge(31);

// Activity 2: Class Inheritance

// - Task 3: Define a class `Student` that extends the `Person` class. Add a property `studentId` and a method to return the student ID. Create an instance of the `Student` class and log the student ID.
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    getStudentId() {
        return this.studentId;
    }

    // Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
    greeting() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old and my student ID is ${this.studentId}.`;
    }
}

const student1 = new Student('Sachin', 25, 123456);
console.log(`I am ${student1.name}, my student id is ${student1.getStudentId()}`);
console.log(student1.greeting());

// Activity 3: Static Methods and Properties

// - Task 5: Add a static method to the `Person` class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
Person.genericGreeting = function () {
    return `Hello, welcome!`;
}
console.log(Person.genericGreeting());

// - Task 6: Add a static property to the `Student` class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
class StudentWithCount extends Student {
    static totalStudents = 0;

    constructor(name, age, studentId) {
        super(name, age, studentId);
        StudentWithCount.totalStudents++;
    }
    static getTotalStudents() {
        return `Total number of students: ${StudentWithCount.totalStudents}`;
    }
}

const student2 = new StudentWithCount('Remma', 23, 4586);
const student3 = new StudentWithCount('Rahul', 24, 7890);
console.log(StudentWithCount.getTotalStudents());

// Activity 4: Getters and Setters

// - Task 7: Add a getter method to the `Person` class to return the full name (assume a `firstName` and `lastName` property). Create an instance and log the full name using the getter.
class PersonWithFullName {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person2 = new PersonWithFullName('Ramdaas', 'Athavle', 28);
console.log(person2.fullName);
person2.fullName = 'Raja Rama';
console.log(person2.fullName);

// Activity 5: Private Fields (Optional)

// - Task 9: Define a class `Account` with private fields for `balance` and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: ${amount}. New balance: ${this.#balance}`);
        } else {
            console.log('Insufficient funds or invalid amount.');
        }
    }

    get balance() {
        return this.#balance;
    }
}

// - Task 10: Create an instance of the `Account` class and test the deposit and withdraw methods, logging the balance after each operation.
const account1 = new Account(100);
account1.deposit(50);
account1.withdraw(25);
account1.withdraw(75);
console.log(`Final Balance: ${account1.balance}`)

// Feature Request:

// 1. Basic Class Script: Write a script that defines a `Person` class with properties and methods, creates instances, and logs messages.
// 2. Class Inheritance Script: Create a script that defines a `Student` class extending `Person`, overrides methods, and logs the results.
// 3. Static Methods and Properties Script: Write a script that demonstrates static methods and properties in classes.
// 4. Getters and Setters Script: Create a script that uses getters and setters in a class.
// 5. Private Fields Script: Write a script that defines a class with private fields and methods to manipulate these fields (optional).

// Achievement:

// By the end of these activities, students will:

// - Define and use classes with properties and methods.
// - Implement inheritance to extend classes.
// - Utilize static methods and properties.
// - Apply getters and setters for encapsulation.
// - Understand and use private fields and classes (optional).
