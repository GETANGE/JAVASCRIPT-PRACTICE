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
function fruitProcessor(apples, oranges){
    //console.log(apples,oranges);
    const juice = `Juice is composed of ${apples} apples and  ${oranges} oranges.`;
    return juice;
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
    const age = 2023-birthYear;
    const retire= 70-age;
    return `${firstName} retires in the next ${retire} years`;
}
console.log(yearOfRetire(2001,"Emmanuel"));
console.log(yearOfRetire(2002,"JoyElizabeth"));