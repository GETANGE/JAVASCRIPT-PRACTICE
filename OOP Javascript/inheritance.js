//example one:
class Person{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`Hello ${this.name}`);
    }
}
class Student extends Person{
    constructor(name){
        console.log("Creating student class");
        super(name);
    }
}
let student1 = new Student("Emmanuel");
student1.greet();

//example 2:
//Overriding method or property.
class Person1{
    constructor(name){
        this.name = name;
        this.occupation ='Fullstack Developer';
    }
    greet(){
        console.log('Hello world!.My name is ' + this.name);
    }
}
class Student1 extends Person1{
    constructor(name){
        super(name);
        this.occupation = 'Student';
    }
    greet(){
        console.log('Hello world!.My name is ' + this.name);
        console.log('My job is being a  ' + this.occupation);
    }
}
let student2 = new Student1('Jack');
student2.greet();