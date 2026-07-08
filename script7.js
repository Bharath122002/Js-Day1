// Task 1 - Employee Salary Dashboard
let employees = 
[
    {name: "Rahul", salary: 45000},
    {name: "Ajay", salary: 60000},
    {name: "Sneha", salary: 120000},
    {name: "Priya", salary: 75000}
];

console.log("Task 1");
let employeeNames = employees.map(emp => emp.name);
console.log("Employee Names:", employeeNames);
let highSalary = employees.filter(emp => emp.salary > 50000);
console.log("Salary > 50000:", highSalary);
let firstHighSalary = employees.find(emp => emp.salary > 100000);
console.log("First Salary > 100000:", firstHighSalary);
let totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);
console.log("Total Salary:", totalSalary);

// Task 2 - E-Commerce Cart Management

let cart1 = ["Laptop", "Mouse"];
let cart2 = ["Keyboard", "Monitor"];

let mergedCart = [...cart1, ...cart2];
console.log("\nTask 2");
console.log("Merged Cart:", mergedCart);

let updatedCart = [...mergedCart, "Printer"];
console.log("Updated Cart:", updatedCart);

function checkout(...products)
 {
    console.log("Products:", products);
    console.log("Total Products:", products.length);
 }

checkout("Laptop","Mouse","Keyboard","Monitor","Printer");

// Task 3 - Student Report Card

let student = 
{
    name: "Rahul",
    department: "CSE",
    marks: [85, 90, 88, 92, 80]
};

let 
{ name, department, marks } = student;
let [sub1, sub2, sub3] = marks;
let totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
let averageMarks = totalMarks / marks.length;
console.log("Task 3");
console.log("Student Name:", name);
console.log("Department:", department);
console.log("First Subject:", sub1);
console.log("Second Subject:", sub2);
console.log("Third Subject:", sub3);
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);

// Task 4 - Product Search System

let searchText = "   Laptop   ";
let cleanedText = searchText.trim().toLowerCase();
let product = "Gaming Laptop".toLowerCase();
console.log("\nTask 4");
if (product.includes(cleanedText)) 
{
    console.log("Product Found");
}
 else 
{
    console.log("Product Not Found");
}
let highlighted = product.replace(cleanedText, "[" + cleanedText + "]");
console.log("Highlighted:", highlighted);

// Task 5 - Movie Collection Manager

let movies = ["Leo", "GOAT", "Retro"];
console.log("\nTask 5");
movies.push("Coolie");
movies.push("Dragon");
console.log("After Push:", movies);
movies.pop();
console.log("After Pop:", movies);
movies.shift();
console.log("After Shift:", movies);
movies.unshift("Jailer");
console.log("After Unshift:", movies);
movies.splice(2, 1, "Thug Life");
console.log("After Splice:", movies);
let ratings = [4.2, 4.8, 3.9, 4.5, 5.0];
ratings.sort((a, b) => b - a);
console.log("Ratings Descending:", ratings);
if (movies.includes("Coolie")) 
{
    console.log("Coolie Available");
} 
else 
{
    console.log("Coolie Not Available");
}