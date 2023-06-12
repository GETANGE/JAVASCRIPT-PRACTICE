let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

//function to check even numbers
function checkEven(number){
    if (number % 2== 0){
        return true;
    }
    else{
        return false;
    }
}

//function to check odd numbers
function checkOdd(number){
    if (number % 2== 1){
        return true;
    }
    else{
        return false;
    }
}

//to check prime numbers.
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
//create a new array by filter.
let evenNumbers=numbers.filter(checkEven);
console.log("Even Numbers are: "+evenNumbers);

let oddNumbers=numbers.filter(checkOdd);
console.log("Odd Numbers are: "+oddNumbers);

let primeNumbers=numbers.filter(isPrime);
console.log("Prime Numbers are: "+primeNumbers);

//practice 2:method to show authurs of books 
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Fiction" },
  { title: "1984", author: "George Orwell", year: 1949, genre: "Science Fiction" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, genre: "Fiction" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Fiction" },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954, genre: "Fantasy" },
  { title: "Animal Farm", author: "George Orwell", year: 1945, genre: "Fiction" },
  { title: "Brave New World", author: "Aldous Huxley", year: 1932, genre: "Science Fiction" }
];
console.table(books);
//function to show books written in year 1940 and above.
function Books(Authur){
  if(Authur.year>=1940){
    return true;
  }else{
    return false;
  }
}

//function to show books entitled to science.
function Science(title){
  if(title.genre=="Fiction"){
    return true;
  }else{
    return false;
  }
}

//function to print books written by George Orwell.
function George(name){
  if(name.author=="George Orwell"){
    return true;
  }else{
    return false;
  }
}

let author=books.filter(George);
console.log("Books written by George Orwell :")
console.table(author);

let books2=books.filter(Science);
console.log("Books written entirely on fiction include:");
console.table(books2);

let Books1=books.filter(Books);
console.log("These books are as follows: ");
console.table(Books1);

//Method 3 filter names which longer than others.
const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace","Emmanuel"];

function Names(person){
  if(person.length>4){
    return true;
  }else{
    return false;
  }
}

function Namess(person){
  if(person.length<4){
    return true;
  }else{
    return false;
  }
}

function Namess1(person){
  if(person.length){
    return true;
  }else{
    return false;
  }
}

let names3=names.filter(Namess1);
console.log("List of all names : ");
console.table(names3);

let names2=names.filter(Namess);
console.log("Names with less than 3 letters");
console.table(names2);

let names1=names.filter(Names);
console.log("Names with more than 4 letters: ");
console.table(names1);