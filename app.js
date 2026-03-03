// alert("Hello World!");

// console.log("Hello World!");
// console.log("Welcome to JavaScript Programming");
// console.log(5 + 5);
// console.log(10 - 3);
// console.log(4 * 6);
// console.log(20 / 4);

// Variables

// let username;
// username = "John";
let username = "John";
console.log(username);
username = "Jane";
console.log(username);

const name = "Alice";


// Data Types
// primitive data types: string, number, boolean, null, undefined
// reference data types: object, array, function

let firstName = "Alice"; // string
let age = 21; // number
let isStudent = true; // boolean
let address = null; // null
let phoneNumber; // undefined

// console.log(age >= 21);

// Opeators
// Arithmetic Operators: +, -, *, /, %
let a = 15;
let b = 5;
console.log(a + b); // 20
console.log(a - b); // 10
console.log(a * b); // 75
console.log(a / b); // 3
console.log(a % b); // 0
console.log(b ** 2); // 5*5 = 25

a = a + 1; // a = 15 + 1 = 16
a += 1; // a = a + 1

// Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
let x = 7;

console.log(x > 10);
console.log(x < 10);
console.log(x >= 5);
console.log(x == 7);
console.log(x === "7");
console.log(x != 7);

// Conditional Statements
if (x >= 10) {
    console.log("x is greater than 10");
}
else {
    console.log("x is less than or equal to 10");
}

if (x > 20) {
    console.log("Your an adult");
} else {
    console.log("Your still a child");
}

let finish = true;
if (finish) {
    console.log("Task completed");
}

let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}


// Loops
let counter = 0;
while (counter <= 10) {
    console.log(counter);
    counter++;
}

for (let i = 0; i < 5; i++) {
    console.log("for loop iteration: " + i);
}


// Functions
function sayHello() {
    console.log("Hello!");
}
sayHello();

greet("Alice");
function greet(name) {
    console.log("Hello, " + name + "!");
}

function addNumbers(num1, num2) {
    console.log(num1 + num2);
}

addNumbers(2, 10);


// DOM Basics
document.body.innerHTML = "<h1>Hello World!</h1>";
document.body.innerHTML = document.body.innerHTML + "<button>Click Me</button>";

document.body.style.backgroundColor = "lightblue";