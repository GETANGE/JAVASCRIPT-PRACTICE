'use strict';

let hasDriversLicense = false;
const passTest= true;

//set hasDriversLicense to true if test is passed
if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("I can drive");

//functions
function logger(){
    console.log("My name is Emmanuel");
}
// calling / invoking/ running.
logger();

//function declaration.
//function with parameters. parameters act like varibles that are only used within the function.

//calling a function within function.
const cutFruits=function(fruit) {
    return fruit*4;
}
function fruitProcessor(apples, oranges){
    //console.log(apples,oranges);
    const applePieces=cutFruits(apples);
    const orangePieces=cutFruits(oranges);
    const juice = `Juice is composed of ${apples} apples and  ${oranges} oranges.`;
    let juice2 = `Juice is composed of ${applePieces} pieces of apples and ${orangePieces} pieces of orange`;
    return juice , juice2;
}
//arguments representing the apples and oranges respectively.
fruitProcessor(3,7);
const Juice =fruitProcessor(3,7);
console.log(Juice);

//Anonymous function
//function expression.
const calculateAge=function(birthYear){
    return 2023 -birthYear;
}
const age=calculateAge(2001);
console.log(age + " years");

//arrow functions.
const age3=birthYear => 2023-birthYear;
const age4=age3(2001)
console.log(age4+ " years");

//example 3.
const yearOfRetire =(birthYear,firstName )=>{
    const age = calculateAge(birthYear);
    const retire= 70-age;

    if(retire>0){
        console.log (`${firstName} retires in the next ${retire} years`);
        return retire;
    }else{
        console.log(`${firstName} has already retired`);
        return -1;
    }
   // return `${firstName} retires in the next ${retire} years`;
}
console.log(yearOfRetire(2001,"Emmanuel"));
console.log(yearOfRetire(2002,"JoyElizabeth"));

//jonas function challenge
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const scoreDolphins = calcAverage(44, 23, 71);
console.log(scoreDolphins);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreKoalas);

let checkWinner = function (scoreKoalas, scoreDolphins) {
    if (scoreKoalas >= 2 * scoreDolphins) {
        console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
    } else if (scoreDolphins >= 2 * scoreKoalas) {
        console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
    } else {
        console.log("No team wins...");
    }
};

checkWinner(scoreKoalas, scoreDolphins);


////////////////ARRAYS//////////////////
let friends=['Emmanuel','DanielBrian','JoyElizabeth']
console.log(friends);
console.log("The total number of elements are :"+friends.length); // total number of friends in the array.
console.log("The last element in the array is : "+friends[friends.length-1]);  // used to access the last element in the array.

//mutate the array
friends[1] ='Getange';  //used to replace the array in the index allocated with the new array.
console.log(friends)

let years= new Array(2001,2002,2003,2004,2005,2006,2007,2008,2009);
console.log(years)
let calAge=calculateAge(years[3])
console.log(calAge)

//full details containing my profile.
let firstName='Emmanuel';
let Emmanuel=[firstName, 'Getange', 22,'Programmer', friends];
console.log(Emmanuel);

//BASIC OPERATIONS IN ARRAYS.
// array push
//adding elements to the array at the end of the array.
friends.push('Jonas');
console.log(friends);

//adding elements to the array from the beginning of the array.
friends.unshift('Muthoni');
console.log(friends);

//removing elements from the array.
const popped=friends.pop();//last element removed.
console.log(friends);
console.log(popped);

friends.shift(); //first element removed
console.log(friends);

console.log(friends.indexOf('Getange')); //returns the index of the element.

// method includes
// ES6 ARRAY method [boolean]
console.log(friends.includes('Getange'));

if(friends.includes('JoyElizabeth')) {
    console.log(`You have a friend called JoyElizabeth`)
}

//////////////////OBJECTS //////////////////
// use of objects in javascript.
const JonasObject ={
    firstName: "Mokomba",
    lastName: "Nyaboe" ,
    age: 2023-1972,
    job : "Fullstack Developer",
    friends: ['Ombongi', 'Taabu', 'Sylus']
}
console.log(JonasObject);
console.log(JonasObject.friends);

// when do we use the dot notation and bracket notation.
let nameKey = 'Name';
console.log(JonasObject['first'+nameKey]);
console.log(JonasObject['last'+nameKey]);

//example of bracket notation
//let interest=prompt('What do you want to know about me? choose between firstName, lastName,age and friends')
//console.log(interest);
//console.log(JonasObject[interest]);
//document.write(JonasObject[interest]);

//if(JonasObject[interest]){
//    console.log(JonasObject[interest]);
    //document.write(JonasObject[interest]);
//}else{
//    console.log(`no property like that in my storage`);
    //document.writeln(`no property like that in my storage`);
//}

//adding properties to the object.
JonasObject.Company = ' The Jitu',
JonasObject['School'] ='Dedan Kimathi University of Technology'; 
console.log(JonasObject);

//if(JonasObject[interest]){
//    console.log(JonasObject[interest]);
  //  document.write(JonasObject[interest]);
//}else{
//    console.log(`no property like that in my storage`);
//    document.writeln(`no property like that in my storage`);
//}
console.log(`The first name is ${JonasObject.firstName} and the last name is ${JonasObject.lastName}`);

const manu={
    firstName: 'Emmanuel',
    secondName: 'Getange',
    birthYear: 2001,
    job: 'Fullstack web Developer',
    hasDriversLicense: true,

  //  calAge: function(){
    //    return 2023-birthYear;
    //}

   // calAge: function(){
    //    return 2023-this.birthYear;
   // }

   calAge: function(){
    this.age =2023-this.birthYear;
    return age;
},
   getSummery: function(){
    return `My name is ${this.firstName} ${this.secondName}. I am ${this.calAge()} years of age and  I am a ${this.job}.I ${this.hasDriversLicense ?'have' : 'dont have'} a driving license`;
   }
};
const age5=manu.calAge(2001);
console.log(age5);

console.log("Using dot notation"+" "+manu.calAge());
console.log('Using bracket notation'+" "+ manu['calAge']());

const summery=manu.getSummery();
console.log(summery);


/* Write your code below. Good luck! 🙂 */

//m's properties.
const mark={
    fullName : "Mark Miller's",
    mass : 78,
    height : 1.69,
    calcBMI: function(){
        return this.mass/ (this.height * this.height);
    }
}
// John's propertis(full details)
const john={
    fullName : "John Smith's",
    mass : 92,
    height : 1.95,
    calcBMI: function(){
        return this.mass/ (this.height * this.height);
    }
}
let MarkBMI= mark.calcBMI();
mark['BMI']=MarkBMI;
let JohnBMI=john.calcBMI();
john['BMI']=JohnBMI;
//console.log(m.BMI);

if(MarkBMI>JohnBMI){
    console.log(`${mark.fullName} BMI ${mark.BMI} is higher than ${john.fullName} BMI ${john.BMI}`);
}else{
    console.log(`${john.fullName} BMI (John.BMI) is higher than ${mark.fullName} BMI ${mark.BMI}`);
}