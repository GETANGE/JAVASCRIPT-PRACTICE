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
const home2 = locateHome("Nyari estate","Otile Brown",24);

console.log(home1.getFullDetails());
console.log(home2.getFullDetails());