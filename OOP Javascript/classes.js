// a class is a blueprint of an object
function Person(name, age){
    this.name = name;
    this.age = age;
}

//create a new Person(new object)
const person1= new Person("Emmanuel",22);
console.table(person1);


//instead of using the function ,, use the class keyword
class Person3{
    constructor(IDno,salary,firstName,lastName){
        this.IDno = IDno;
        this.salary = salary;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
//create an object.
const person2 = new Person3(38808187,150000,"Emmanuel","Getange");
console.table(person2)

//JAVASCRIPT CLASS METHODS.
class PERSON{
    constructor(name, age ,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    display(){// this method is not highly efficient.
        return ("My name is " + this.name+
        ",  my age is "+this.age + " "+
        "and my salary is "+this.salary);
    }
}

//create the object.
const object=new PERSON("Emmanuel",22,100000);
console.table(object);
console.log(object.display());


//example 3
class house{
    constructor(name, address,street,city,state){
        this.name=name;
        this.address=address;
        this.street=street;
        this.city=city;
        this.state=state;
    }
} 
//create a new object from the class.
const object1 = new house("JoyElizabeth","P.O Box 234","Tom Mboya Street","Nairobi","Kenya");
console.table(object1);

class Car{
    constructor(name,owner,model,registration){
        this.name = name;
        this.owner = owner;
        this.model = model;
        this.registration = registration;
    }

    //define  the method
    display1(){
        console.log(`Car Name: ${this.name}, the Owner is : ${this.owner} ,the model is : ${this.model} and the number plate is : ${this.registration}` );
    }
}

//creat an object to access using property names.
const car1 = new Car("Mercedes","Getange","Benz","KDD 345K");
console.log(car1.name,car1.model,car1.owner,car1.registration);

//accessing using the method.
car1.display1()