// Task 1 - Employee Login Eligibility

let empAge = Number(prompt("Enter Employee Age:"));
let ID = confirm("Do you have Employee ID?");
let attendance = Number(prompt("Enter Attendance Percentage:"));

if (empAge >= 18 && ID && attendance >= 75) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

// Task 2 - Student Grade System

let marks = Number(prompt("Enter Marks:"));

if (marks >= 90 && marks <= 100) {
    console.log("Grade A+");
} else if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// Task 3 - ATM Withdrawal

let balance = 5000;
let withdraw = 3000;

if (withdraw <= balance && withdraw % 100 === 0) {
    balance -= withdraw;
    console.log("Transaction Successful");
    console.log("Remaining Balance : " + balance);
} else {
    console.log("Transaction Failed");
}


// Task 4 - Food Ordering App


let choice = Number(prompt("Enter Choice (1-5):"));

switch (choice) {
    case 1:
        console.log("You Ordered Pizza");
        break;
    case 2:
        console.log("You Ordered Burger");
        break;
    case 3:
        console.log("You Ordered Shawarma");
        break;
    case 4:
        console.log("You Ordered Biryani");
        break;
    case 5:
        console.log("You Ordered Juice");
        break;
    default:
        console.log("Invalid Choice");
}


// Task 5 - E-Commerce Discount


let purchase = Number(prompt("Enter Purchase Amount:"));
let premium = confirm("Are you Premium User?");

let discount = 0;

if (purchase > 5000 && premium) {
    discount = purchase * 0.20;
} else {
    discount = purchase * 0.10;
}

console.log("Original Price : " + purchase);
console.log("Discount : " + discount);
console.log("Final Price : " + (purchase - discount));


// Task 6 - Attendance Report


for (let i = 1; i <= 30; i++) {
    console.log("Day " + i + " Present");
}


// Task 7 - Even Number Generator


for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}


// Task 8 - Mobile Number Validation


let mobile = prompt("Enter Mobile Number:");

if (
    mobile.length === 10 &&
    (mobile.startsWith("6") ||
        mobile.startsWith("7") ||
        mobile.startsWith("8") ||
        mobile.startsWith("9"))
) {
    console.log("Valid Mobile Number");
} else {
    console.log("Invalid Mobile Number");
}



// Task 9 - Shopping Cart


let cart = [
    "Milk",
    "Bread",
    "Egg",
    "Rice",
    "Oil"
];

console.log("First Item : " + cart[0]);
console.log("Last Item : " + cart[cart.length - 1]);
console.log("Total Items : " + cart.length);



// Task 10 - Employee Database


let employee = {
    name: "Rahul",
    salary: 45000,
    department: "Development",
    experience: 4
};

console.log("Employee Name : " + employee.name);
console.log("Department : " + employee.department);
console.log("Experience : " + employee.experience + " Years");


// Task 11 - Company ID Generator


let empName = "Naveen";
let empID = 1045;
let department = "Development";

console.log(`Welcome ${empName}`);
console.log(`Your Employee ID is EMP${empID}`);
console.log(`Department : ${department}`);


// Task 12 - User Registration

let userName = prompt("Enter Name:");
let age = Number(prompt("Enter Age:"));
let accept = confirm("Do you accept Terms?");

if (accept) {
    alert("Registered Successfully");
} else {
    alert("Registration Cancelled");
}



// Task 13 - Salary Increment Calculator

let salary = 35000;
let increment = 15;

let incrementAmount = salary * increment / 100;
let newSalary = salary + incrementAmount;

console.log("Old Salary : " + salary);
console.log("Increment Amount : " + incrementAmount);
console.log("New Salary : " + newSalary);


// Task 14 - Restaurant Bill Generator

let burger = 150;
let pizza = 300;
let juice = 80;

let subtotal = burger + pizza + juice;
let gst = subtotal * 0.18;
let grandTotal = subtotal + gst;

console.log("Subtotal : " + subtotal);
console.log("GST : " + gst);
console.log("Grand Total : " + grandTotal);


// Task 15 - Company Attendance Dashboard

let employees = [
    { name: "Rahul", present: true },
    { name: "Arun", present: false },
    { name: "Kamal", present: true },
    { name: "Priya", present: true },
    { name: "Divya", present: false }
];

let totalPresent = 0;
let totalAbsent = 0;

for (let emp of employees) {
    if (emp.present) {
        console.log(emp.name + " - Present");
        totalPresent++;
    } else {
        console.log(emp.name + " - Absent");
        totalAbsent++;
    }
}

console.log("Total Present : " + totalPresent);
console.log("Total Absent : " + totalAbsent);


// Mini Project - Employee Management System


let employeeList = [
    { id: 101, name: "Rahul", salary: 30000, experience: 2 },
    { id: 102, name: "Priya", salary: 45000, experience: 6 },
    { id: 103, name: "Arun", salary: 40000, experience: 4 }
];

let option = Number(prompt(`
1. Add Employee
2. View Employees
3. Search Employee
4. Calculate Salary with Bonus
5. Check Experience
6. Delete Employee
7. Exit
Enter Choice:
`));

switch (option) {

    case 1:
        employeeList.push({
            id: Number(prompt("Enter ID")),
            name: prompt("Enter Name"),
            salary: Number(prompt("Enter Salary")),
            experience: Number(prompt("Enter Experience"))
        });
        console.log("Employee Added");
        break;

    case 2:
        console.log(employeeList);
        break;

    case 3:
        let searchId = Number(prompt("Enter Employee ID"));
        let found = employeeList.find(emp => emp.id === searchId);

        if (found) {
            console.log(found);
        } else {
            console.log("Employee Not Found");
        }
        break;

    case 4:
        employeeList.forEach(emp => {
            console.log(`${emp.name} Salary with Bonus : ${emp.salary + 5000}`);
        });
        break;

    case 5:
        employeeList.forEach(emp => {
            if (emp.experience >= 5) {
                console.log(`${emp.name} - Senior Employee`);
            } else {
                console.log(`${emp.name} - Junior Employee`);
            }
        });
        break;

    case 6:
        let deleteId = Number(prompt("Enter Employee ID to Delete"));
        employeeList = employeeList.filter(emp => emp.id !== deleteId);
        console.log("Employee Deleted");
        console.log(employeeList);
        break;

    case 7:
        console.log("Application Closed");
        break;

    default:
        console.log("Invalid Choice");
}