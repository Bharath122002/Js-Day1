//Task 1: Employee Age Calculator
let dob=new Date("2002-12-12")
let currentDate = new Date();
let age = currentDate.getFullYear()-dob.getFullYear()
console.log("Employee Age : ",age,"Years")

//Task 2: Online Appointment Scheduler
let App=new Date();
App.setFullYear(2027)
App.setMonth(11)    
App.setDate(15)
App.setHours(10)
App.setMinutes(30)
console.log("Updated Appointment:", App)

//Task 3: Multi-Country Meeting Time

let today=new Date();
console.log("India:",today.toLocaleString("en-IN", 
{
 timeZone: "Asia/Kolkata"
}))
console.log("America : ",today.toLocaleString("en-US",
    {
        timeZone:"America/New_York"
    }
))
console.log("Tokyo : ",today.toLocaleString("en-JP",
    {
        timeZone:"Asia/Tokyo"
    }
))

// Task 4: Product Warranty Expiry

let today1=new Date()
let ExpiryDate=new Date(today1)
ExpiryDate.setFullYear(ExpiryDate.getFullYear() + 2)
console.log("Purchase Date : ",today1);
console.log("Warranty Expiry Date : ",ExpiryDate);

//Task 5: Digital Clock
setInterval(function () 
{
    let Time = new Date();
    console.log(Time.toLocaleTimeString("en-IN"));
}, 1000);