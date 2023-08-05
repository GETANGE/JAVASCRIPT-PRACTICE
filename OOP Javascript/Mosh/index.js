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
function createPerson(firstName, lastName){
    let person={
        firstName,
        lastName,
        getFullName: function(){
            return `${firstName} ${lastName}`;
        }
    }
    return person;
}
//create a new person.
const person1 = createPerson("Emmanuel","Getange");
const person2 = createPerson("JoyElizabeth","Muthoni");

//display the person created.
console.log(person1.getFullName());
console.log(person2.getFullName());