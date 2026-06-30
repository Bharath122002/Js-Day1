// Task 1 - Employee Name
let empName = prompt("Enter your name:");
console.log(empName);
document.writeln("Welcome " + empName + "<br>");

// Task 2- Company Entry Confirmation
let isReady = confirm("Are you ready to join today's JavaScript training?");
console.log(isReady);

// Task 3 - Customer Greeting
alert("Welcome to Stackly Solutions!");
console.log("Customer entered the website.");

// Task 4 - Student Details
let studentName = prompt("Enter student name:");
let studentAge = prompt("Enter student age:");
console.log(studentName, studentAge);

// Task 5 - Product Price
let price = 100;
price = 150;
console.log(price);

// Task 6 - Login Validation
let username = prompt("Enter username:");
if (username === "") {
  console.warn("Warning: Username is empty.");
} else {
  console.log("Login Successful: " + username);
}

// Task 7 - Website Maintenance
alert("Website is under maintenance.");
console.error("Error: Website is currently unavailable.");

// Task 8 - Feedback Collection
let feedback = prompt("How was today's JavaScript session?");
console.log(feedback);
document.writeln("Thank you for your feedback!<br>");

// Task 9 - Profile Information
let name = prompt("Enter your name:");
let city = prompt("Enter your city:");
let language = prompt("Enter your favorite programming language:");
console.log(name, city, language);

// Task 10 - Mini Registration Form
let fullName = prompt("Enter full name:");
let email = prompt("Enter email:");
let mobile = prompt("Enter mobile number:");

console.log("===== Registration Details =====");
console.log("Name   :", fullName);
console.log("Email  :", email);
console.log("Mobile :", mobile);

alert("Registration Successful!");