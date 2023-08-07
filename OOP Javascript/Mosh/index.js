// objects
//object literals.
let circle ={
    radius: 1,
    location:{
        x: 1,
        y: 1
    },
    draw: function(){
        console.log("Drawing circle");
    }
}
//to access the objects properties then..
circle.draw();
console.log(circle);

//deleting properties
delete circle.draw();
console.log(circle);

//using factory reconstructor functions.
function createPerson(firstName, lastName,middleName){
    let person={
        firstName,
        middleName,
        lastName,
        getFullName: function(){
            return `${firstName} ${lastName} ${middleName}`;
        }
    }
    return person;
}
//create a new person.
const person1 = createPerson("Emmanuel","Mokomba","Getange","Bomariba");
const person2 = createPerson("JoyElizabeth","Kiboi","Muthoni");

//adding properties to objects.
createPerson.location ={District: 'Bomariba'}
person1['code']={address: 123};
let propertyName='home';
person1[propertyName]={NAME:'Kiamuyu'}

//deleting  property from objects
delete person1['middleName'];
//display the person created.
console.log(person1);
console.log(person2.getFullName());

//using the constructor functions.
function Car(owner, name, regNo){
    this.owner = owner;
    this.name = name;
    this.regNo = regNo;
}
//create a new object .
const Car1 = new Car("Emmanuel", "Mitsubishi","KDK 123B");
console.log("The owner is :"+Car1.owner);
console.log("The car name is: "+Car1.name);
console.log("The car registretion number is :"+Car1.regNo);

function Circle(radius) {
    this.radius = radius;
    this.draw = function (){
        console.log("Drawing circle");
    }
}

const another = new Circle(1)
console.log(another);

//functions are objects.
//declaring functions internerlly.
const Circle1 = new Function('radius',`
   this.radius= radius;
   this.draw=function(){
    console.log('Drawing...');
   }
`);
const another2=new Circle1(23);
console.log(another2);

//primitives are copied  by their values
//dealing with 2 independent copies.
//example.
let x=10;
let y=x;

x=20
console.log(x);
console.log(y);

let number=10;
function increment(number){
    number++;
}
increment(number);
console.log(number);

//dealing with one indepenedent copy.
//objects are copied by their reference.
let obj={value:10};

function increase(obj){
    obj.value++;
}

increase(obj);
console.log(obj.value);
