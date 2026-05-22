// Object (reference type)
let student = { name: "Ana", gpa: 3.8 };

// Array (reference type, subtype of Object)
let grades = [90, 85, 92, 88];

// Demonstrating reference behavior
let copy = student;
copy.name = "Bia";
console.log(student.name); // "Bia" — both point to the same object