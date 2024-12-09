let empty = {}; // object syntax

// object literal notation
let person = {
    firstName: 'Getange',
    secondName: 'Mokomba',
    age: 21,
    occupation: 'Backend Developer',
    company: 'Triply.co',
    role: 'Junior Developer',
    salary: 80000,
    greet : function(){
        console.log(`Good morning ${this.firstName}`)
    },
    getFullNames: function(){
        return this.firstName + this.secondName
    },
    techStack: ['Node', 'Express', 'MongoDB', 'PostgreSQL']
}
 // accessing properties
 // 1) The dot notation (.) objectName.propertyName
console.log("My name is: " +person.firstName)
console.log("I'm of age : "+person.age)

// 2) Array-like notation ([])
console.log("My Occupation is :"+ person['occupation'])
console.log('My techstack is before updating :'+ person['techStack'])

const prop = 'company'
console.log("Dream Company is :" +person[prop])

// 3) Destructuring 
const { role, salary }= person
console.log(`My role there is : ${role} and my salary is : ${salary}/=`)


// MODIFYING THE VALUE OF A PROPERTY
// To change the value of a property, we use the assignment operator
person.techStack = ['Node', 'Express.js', 'MongoDB', 'PostgreSQL', 'Mongoose', 'Prisma']
console.log('My techstack is :'+ person['techStack'])

// Adding new properties into an object
person.gender = 'Male'
console.log("I'm a :"+ person.gender)

// DELETEing properties
delete person.salary
console.log(person)

// checking if a property exists
console.log('salary' in person)
console.log('gender' in person)

// Print the Object method
person.greet();
console.log(person.getFullNames().split(''))