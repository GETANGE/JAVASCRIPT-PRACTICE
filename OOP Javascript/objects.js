//using object literals
let person ={
    firstName: 'John',
    secondName: 'Smith',
    address:'Luthuli Avenue 123',
    getFullDetails: function() {
        return `${person.firstName} ${person.secondName} ${person.address}`;
    }
}
//get full details
console.log(person.getFullDetails());

//using factory functions
function locateHome(Estate,House,DoorNumber){
    let house={
        Estate,
        House,
        DoorNumber,
        getFullDetails: function(){
            return `${house.Estate} ${house.House} ${house.DoorNumber}`
        }
    }
    return house;
}
//create an object.
const home1 = locateHome("Nyari Estate","King Bizzy",23);
const home2 = locateHome("Nyari Estate","Otile Brown",24);

console.log(home1.getFullDetails());
console.log(home2.getFullDetails());

//delete property.
//start with object then select the property to delete.
delete home1['Estate'];
delete home2['Estate'];
delete home2['DoorNumber'];
console.log(home1);
console.log(home2);

//adding properties.
//call the name of the object first then the propertyto be added.
home1['County'] ="Kisii";
console.log(home1);

//declaring functions internally.
//function should start with capital letter.
const home= new Function('address',`
  this.address=address;
  this.display=function(){
    console.log("My address is");
  } 
`);
//create a new object.
const address= new home(1234);
console.log(address);