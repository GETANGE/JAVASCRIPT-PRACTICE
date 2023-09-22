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

//mark's properties(full details)
const mark={
    fullName : "Mark Miller",
    mass : 78,
    height : 1.69,
    calcBMI: function(){
        this.bmi = this.mass/ (this.height * this.height);
        return this.bmi;
    }
};
// John's propertis(full details)
const john={
    fullName : "John Smith",
    mass : 92,
    height : 1.95,
    calcBMI: function(){
        this.bmi=this.mass/ (this.height * this.height);
        return this.bmi;
    }
};

//calcculate the BMI'S .
mark.calcBMI();
john.calcBMI();
console.log("Mark's BMI"+" "+mark.bmi);
console.log("John's BMI"+" "+john.bmi);

if(mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
}else if(mark.bmi < john.bmi) {
    console.log(`${john.fullName}'s (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
}

let nums=[20,23,67,0];
function find_max(nums){
    let max_num =Number.NEGATIVE_INFINITY;
    for(let num of nums){
        if(num > max_num){
            max_num= num;
        }
    }
    return max_num;
}

let numbers=find_max(nums);
console.log("The maximum number is:"+" "+numbers);


///////////////////////LOOPING THROUGH ITEMS///
////for loop.
//for loop keeps running while the condition is TRUE.
//rep++; increases until the condition is FALSE.
for(let rep =1; rep <=10; rep++){
    console.log(`Am a fullstack Developer ${rep}.`); // to ensure the the counter is incremented correctly ,use the rep varible defined using literals.
    // counter variable.
}

const dataType =[];
//looping through arrays...
let friend=['Emmanuel','DanielBrian','JoyElizabeth',10,true]
for(let i=0; i<friend.length; i++){
    console.log(friend[i], typeof friend[i]); // [i] stands for , from the first index that is initialized.

    //This line assigns the data type of the element at index i of the friend array to the ith element of the dataType array.
    //dataType[i] = typeof friend[i];
    dataType.push(typeof friend[i]); 
}
console.log(dataType);

let year= new Array(2001,2002,2003,2004,2005,2006,2007,2008,2009);
const Age=[];

for(let i=0; i<year.length; i++){
    Age.push(2023-year[i]);
}
console.log(Age);

//continue and break statements.
let friends1=['Emmanuel','DanielBrian','JoyElizabeth',10,true]
console.log("--------ONLY STRINGS--------");
for(let i=0; i<friends1.length; i++){
    if(typeof friends1[i]!=='string') continue;
        console.log(friends1[i], typeof friends1[i]);
}
console.log("--------ONLY NUMBERS--------");
for(let i=0; i<friends1.length; i++){
    if(typeof friends1[i]!=='number') continue;
        console.log(friends1[i], typeof friends1[i]);
}
console.log("--------ONLY BOOLEAN--------");
for(let i=0; i<friends1.length; i++){
    if(typeof friends1[i]!=='boolean'){
        continue;
    }
        console.log(friends1[i], typeof friends1[i]);
}

// Looping Backwards and loops in loops
// 4,3, ......., 0
for(let i=friends1.length-1; i>=0; i--){
    console.log(friends1[i], typeof friends1[i]);
}
let number=[1,2,3,4,5,6,7,8,9];
for(let i=number.length-1; i>=0; i--) {
    console.log(number[i], typeof number[i]);
}

//loop inside a loop.
console.log(`------LOOPING INSIDE A LOOP------`);
for(let exercise = 1; exercise<4; exercise++){
    console.log(`------Exercise: ${exercise}`);

    for(let rep=1; rep<=5; rep++){
        console.log(`-Lifting weights is mandatory ${rep}-`);
    }
}

/////WHILE LOOP////.
let rep2 = 1;
while(rep2 <= 5){
    console.log(`WHILE LOOP-Lifting weights is mandatory ${rep2}`);
    rep2++;
}

//example 2 : not depending on a counter.
//rolling dice .
let dice = Math.trunc(Math.random() * 6)+1;

while(dice !== 6){
    console.log(`You rolled a : ${dice}`);
    dice = Math.trunc(Math.random() * 6)+1;

    if(dice === 6){
        console.log(`The loop is about to end...`);
    }
}

//coding challange.
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

// Calculating tips
for (let i = 0; i < bills.length; i++) {
    const tip= calcTip(bills[i]); // Calculate the tips of the current array after every succesful loop.
    tips.push(tip);
}

// Calculating totals
for (let j = 0; j < tips.length; j++) {
    const total=tips[j]+bills[j]; // For each bill at index j, it retrieves the corresponding tip from the tips array using the same index j.
    totals.push(total);
}
console.log("The Bills are :"+bills);
console.log("Their tips are :"+tips);
console.log("Their totals :"+totals);

//calculating the average.
//function for setting the conditions.
const average=function(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        //sum = sum + arr[i].
        sum+=arr[i];
    }
    return sum / arr.length;
}
let billsAverage=average(bills);
let tipsAverage=average(tips);
console.log("The total average of bills is :"+billsAverage);
console.log("The total average for tips is :"+tipsAverage);
const employee={
    id: 1,
    name: 'Emmanuel',
    age: 36,
    department: "Fullstak Web Developer",
    address:{
        city: "Makati",
        country: "Kenya",
    },
};
//const id = employee.id;
//const name= employee.name;
//const age= employee.age;
//const department= employee.department;
//const address= employee.address; 
const {id:number1, name:fullName, age1, department, address:{city},address:{country}} = employee;
console.log(number, fullName, age, department, city, country);

// destructuring using functions.
const displayEmployee = function({age, name, department}){
    console.log(`My age is ${employee.age} yrs, name is  ${employee.name} and I am a ${employee.department}`);
}
displayEmployee(employee)

//destructuring ARRAYS
  //normal arrays.
const fruits =['apple', 'orange', 'banana', 'pineapple'];
const apple=fruits[0];
const orange=fruits[1];
const pineapple=fruits[2];
console.log(apple, orange, pineapple);

    //destructring the arrays
    //using the rest operator
    const [fruit1, fruit2, fruit3,...fruit4] =fruits;
    console.log(fruit1, fruit2, fruit3);
    console.log(fruit4);



//Destructuring both Arrays and Objects.
const groceryList=[
    {item:"Apples", price:25, category:"Fruits"},
    {item:"Mangoes", price:25, category:"Fruits"},
    {item:"Tomatoes", price:25, category:"Vegetables"},
    {item:"Milk", price:25, category:"Misc"},
    {item:"Eggs", price:25, category:"Misc"}
];
// accessing properties without destructuring
console.log(groceryList[0].item);

//accessing properties with destructuring
const [{item: apples,category: fruit},...rest]=groceryList;
console.log(`The Item is: ${apples} and it falls in the category ${fruit}`);
console.log(`The rest of the items are: `, rest);



const company = {
    name: "Andela",
    location: [{ city: "Nairobi" }, { city: "Nigeria" }, { city: "New York" }]
};

const [{ city: loc }] = company.location; // Destructure and assign

console.log(company.location[0].city); // Output: Nairobi
console.log(loc); // Output: Nairobi


const users = [
    ["Emmanuel", "Getange"],
    ["John", "Juma"],
    ["JoyElizabeth", "Muthoni"],
    ["DanielBrian", "Gatuhu"],
];
          [
              {
                firstName: "Emmanuel",
                secondName: "Getange",
              },
              {
                firstName: "John",
                secondName: "Juma",
              },
              {
                firstName: "JoyElizabeth",
                secondName: "Muthoni",
              },
              {
                firstName: "DanielBrian",
                secondName: "Gatuhu",
              }
          ];

          // destructering the object.
          const userObj= users.map(([firstName,secondName])=>{
            return {firstName, secondName};
          });

            console.log(userObj);


// SHORT CIRCUITING AND LOGICAL OPERATORS && || ?? 
// if true ,then compiler will display the second output
// if false ,then compiler will display the boolean output

console.log(true && 'Some string');
console.log(false && 'Some string');

console.log("Emmanuel" && "Some string");

// works for  falsy values : 0, '' , null , undefined
console.log("" && "Some string");
console.log(0 && "Some string");

// the OR operator || .
// occurs where the boolean value is true only
console.log(true || "Some string");
console.log(false || "Some string");

// EXAMPLES.
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

    const gfg= function (){
      console.log("------------------");
      console.log(false && true);
      console.log(false && false);
      console.log(true && false);
      console.log(true && true);

      console.log("----------------");
      console.log(true || false);
      console.log(true || true);
      console.log(false || true);
      console.log(false || false);
    }
    gfg();