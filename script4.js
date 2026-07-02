
// Employee Management Tasks
//----------------------------------------------
// Employee Array
let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];


// Task 1 - Find the Highest Salary
//----------------------------------------------

let highest = employees[0];

for (let emp of employees) {
    if (emp.salary > highest.salary) {
        highest = emp;
    }
}

console.log("Highest Salary :", highest.salary);
console.log("Employee Name :", highest.name);



// Task 2 - Find Employee by ID
//----------------------------------------------

let searchId = 103;
let found = false;

for (let emp of employees) {
    if (emp.id === searchId) {
        console.log("\nEmployee Found");
        console.log("Name :", emp.name);
        console.log("Salary :", emp.salary);
        found = true;
    }
}

if (!found) {
    console.log("Employee Not Found");
}


// Task 3 - Calculate Salary with Bonus
//----------------------------------------------

let bonus = 5000;

console.log("\nSalary After Bonus");

for (let emp of employees) {
    console.log(emp.name + " : " + (emp.salary + bonus));
}


// Task 4 - Experience Check
//----------------------------------------------

let employeeExperience = [
    {
        name: "Naveen",
        experience: 2
    },
    {
        name: "John",
        experience: 7
    },
    {
        name: "Arun",
        experience: 5
    }
];

console.log("\nExperience Report");

for (let emp of employeeExperience) {
    if (emp.experience >= 5) {
        console.log(emp.name + " - Senior Employee");
    } else {
        console.log(emp.name + " - Junior Employee");
    }
}


// Task 5 - Display Only Employee Names
//----------------------------------------------

console.log("\nEmployee Names");

for (let emp of employees) {
    console.log(emp.name);
}


// Task 6 - Display Employee IDs
//----------------------------------------------

console.log("\nEmployee IDs");

for (let emp of employees) {
    console.log(emp.id);
}

// Task 7 - Find Total Salary
//----------------------------------------------

let totalSalary = 0;

for (let emp of employees) {
    totalSalary += emp.salary;
}

console.log("\nTotal Salary :", totalSalary);


// Task 8 - Employees Earning More Than ₹40,000
//----------------------------------------------

console.log("\nEmployees Earning More Than ₹40,000");

for (let emp of employees) {
    if (emp.salary > 40000) {
        console.log(emp.name);
    }
}


// Task 9 - Increase Salary by ₹5000
//----------------------------------------------

console.log("\nSalary After Increment");

for (let emp of employees) {
    console.log(emp.name + " : " + (emp.salary + 5000));
}

// Task 10 - Employee Report
//----------------------------------------------

console.log("\nEmployee Report");

for (let emp of employees) {
    console.log(`
Employee Name : ${emp.name}
Employee ID   : ${emp.id}
Salary        : ${emp.salary}
`);
}

// Challenge Task
//----------------------------------------------

console.log("========== Challenge Task ==========");

// Total Employees

console.log("Total Employees :", employees.length);

// Highest Salary

let highestSalary = employees[0];

for (let emp of employees) {
    if (emp.salary > highestSalary.salary) {
        highestSalary = emp;
    }
}

console.log("Highest Salary :", highestSalary.salary);

// Lowest Salary

let lowestSalary = employees[0];

for (let emp of employees) {
    if (emp.salary < lowestSalary.salary) {
        lowestSalary = emp;
    }
}

console.log("Lowest Salary :", lowestSalary.salary);

// Total Salary
let companySalary = 0;

for (let emp of employees) {
    companySalary += emp.salary;
}

console.log("Total Salary :", companySalary);

// Highest Salary Employee
console.log("Employee with Highest Salary :", highestSalary.name);

// Lowest Salary Employee
console.log("Employee with Lowest Salary :", lowestSalary.name);

// Salary > 40000
console.log("\nEmployees earning more than ₹40,000");

for (let emp of employees) {
    if (emp.salary > 40000) {
        console.log(emp.name);
    }
}

// Search Employee by ID
let searchEmployeeId = 103;
let employeeFound = false;

for (let emp of employees) {
    if (emp.id === searchEmployeeId) {
        console.log("\nEmployee Found");
        console.log("Name :", emp.name);
        console.log("Salary :", emp.salary);
        employeeFound = true;
    }
}

if (!employeeFound) {
    console.log("Employee Not Found");
}

// Bonus
console.log("\nSalary After ₹5000 Bonus");

for (let emp of employees) {
    console.log(emp.name + " : " + (emp.salary + 5000));
}

// Professional Report
console.log("\nProfessional Employee Report");

for (let emp of employees) {
    console.log(`
Employee Name : ${emp.name}
Employee ID   : ${emp.id}
Salary        : ${emp.salary}
`);
}
// Functions Tasks
//----------------------------------------------

// Task 1 - Company Welcome Function
//----------------------------------------------

function welcomeCompany() {
    console.log("Welcome to Stackly IT");
}

welcomeCompany();


// Task 2 - Employee Details
//----------------------------------------------

function employeeDetails(name, department, salary) {
    console.log("Employee Name :", name);
    console.log("Department :", department);
    console.log("Salary :", salary);
}

employeeDetails("Naveen", "Developer", 30000);


// Task 3 - Calculate Bonus
//----------------------------------------------

function calculateBonus(salary, bonus) {
    console.log("Total Salary :", salary + bonus);
}

calculateBonus(40000, 5000);


// Task 4 - Student Result
//----------------------------------------------

function studentResult(marks) {

    if (marks >= 35) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }

}

studentResult(45);


// Task 5 - Return Employee Name
//----------------------------------------------

function employeeName() {
    return "Naveen";
}

let employee = employeeName();

console.log(employee);


// Task 6 - Product Price
//----------------------------------------------

function productPrice() {
    return 25000;
}

let price = productPrice();
let gst = 2500;

console.log("Price + GST :", price + gst);


// Task 7 - Scope
//----------------------------------------------

function demo() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

    }

    console.log(a);

}

demo();



// Task 8 - Hoisting
//----------------------------------------------

console.log(a);

var a = 100;


// Task 9 - Named Function
//----------------------------------------------

function greeting() {
    console.log("Good Morning");
}

greeting();


// Task 10 - Anonymous Function
//----------------------------------------------

let welcomeEmployee = function () {
    console.log("Welcome Employee");
};

welcomeEmployee();


// Task 11 - Arrow Function
//----------------------------------------------

let training = () => {
    console.log("JavaScript Training");
};

training();


// Task 12 - Return Function
//----------------------------------------------

function company() {
    return "Stackly";
}

let companyName = company();

console.log("Welcome", companyName);


// Task 13 - Higher Order Function
//----------------------------------------------

function dashboard() {
    console.log("Dashboard Loaded");
}

function login(callback) {
    console.log("Login Successful");
    callback();
}

login(dashboard);


// Task 14 - Callback Function
//----------------------------------------------

function delivered() {
    console.log("Delivered");
}

function preparingFood(callback) {
    console.log("Preparing Food");
    callback();
}

function orderReceived(callback) {
    console.log("Order Received");
    callback(delivered);
}

orderReceived(preparingFood);


// Task 15 - Generator Function
//----------------------------------------------

function* couponGenerator() {

    yield "10% Discount";
    yield "20% Discount";
    yield "30% Discount";
    yield "Better Luck Next Time";

}

let coupon = couponGenerator();

console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);


// Task 16 - Return + Generator
//----------------------------------------------

function* fruits() {

    yield "Apple";
    yield "Orange";
    yield "Banana";

}

let fruit = fruits();

console.log(fruit.next().value);
console.log(fruit.next().value);
console.log(fruit.next().value);


// Task 17 - Currying
//----------------------------------------------

function discount(price) {

    return function (percentage) {

        let finalPrice = price - (price * percentage / 100);

        console.log("Final Price :", finalPrice);

    };

}

discount(1000)(10);


// Task 18 - Company Salary
//----------------------------------------------

function salary(salaryAmount) {

    return function (bonus) {

        return function (allowance) {

            console.log("Total Salary :", salaryAmount + bonus + allowance);

        };

    };

}

salary(30000)(5000)(2000);


// Task 19 - Real-Time Login System
//----------------------------------------------

function loadDashboard() {
    console.log("Load Dashboard");
}

function loginSuccessful() {
    console.log("Login Successful");
    loadDashboard();
}

function verifyPassword() {
    console.log("Verify Password");
    loginSuccessful();
}

function enterUsername() {
    console.log("Enter Username");
    verifyPassword();
}

enterUsername();


// Mini Project - Employee Salary Management System
//----------------------------------------------

let emp = {
    name: "Naveen",
    department: "Developer",
    salary: 30000
};

// Employee Details

function displayEmployee() {

    console.log("\nEmployee Name :", emp.name);
    console.log("Department :", emp.department);
    console.log("Salary :", emp.salary);

}

// Calculate Salary

function calculateSalary(salary, bonus) {
    return salary + bonus;
}

// Arrow Function

let welcome = () => {
    console.log("\nWelcome Employee");
};

// Anonymous Function

let showDepartment = function () {
    console.log("Department :", emp.department);
};

// Higher Order Function

function dashboardLoaded() {
    console.log("Employee Dashboard Loaded");
}

function loginSystem(callback) {
    console.log("Login Successful");
    callback();
}

// Generator

function* bonusCoupon() {

    yield "5% Bonus";
    yield "10% Bonus";
    yield "15% Bonus";

}

// Currying

function tax(salary) {

    return function (taxAmount) {

        return salary - taxAmount;

    };

}

// Main Program

welcome();
displayEmployee();
showDepartment();
let finalSalary = calculateSalary(emp.salary, 5000);
console.log("Final Salary :", finalSalary);
loginSystem(dashboardLoaded);
let coupons = bonusCoupon();
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);
let salaryAfterTax = tax(finalSalary)(2000);
console.log("Salary After Tax :", salaryAfterTax);
console.log("\nEmployee Report");
console.log(`
Employee Name : ${emp.name}
Department    : ${emp.department}
Final Salary  : ${salaryAfterTax}
`);