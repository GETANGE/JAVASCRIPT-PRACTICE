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