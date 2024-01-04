// A variable is a container for storing data 
// A variable behaves as if it was the value that it containes 

//Two steps:
//1. Declaration (var, let, const)
//2. Assignment (= assignemnt operator)

//numbers
let age;
age = 23;
age = age + 1;
console.log(age);
console.log("I'm" + " " + age + " " + "Years Old")

let agee = 23;
console.log(agee);

//string
//string is a series of characters 
let firstName = "Amira";
console.log(firstName);
console.log("My name is" + " " + firstName)

let aage = "23";
aage = aage + 1;
console.log(aage);
console.log("I'm not" + " " + aage + "." + "This is a string error" )

//Boolean
//One of two types: true or false
let student = false; 
console.log(student);
console.log("Enrolled:" + " " + student);

//working on the index
document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "I'm " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;
