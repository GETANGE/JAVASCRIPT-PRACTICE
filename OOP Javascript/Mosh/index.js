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
const person1 = createPerson("Emmanuel","Mokomba","Getange");
const person2 = createPerson("JoyElizabeth","Kiboi","Muthoni");

//display the person created.
console.log(person1.getFullName());
console.log(person2.getFullName());

//using the constructor functions.
function Car(owner, name, regNo){
    this.owner = owner;
    this.name = name;
    this.regNo = regNo;
}
//create a new object .
const Car1 = new Car("Emmanuel", "Mitsubishi","KDK 123B");
console.log(Car1.owner);
console.log(Car1.name);
console.log(Car1.regNo);