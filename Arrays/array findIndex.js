//returns the first index of the element satisfying the function passed.
let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

//function to check even numbers
function isEven(numbers){
    return numbers % 2 == 0;
}

//function to check odd numbers
function isOdd(numbers){
    return numbers % 2==1;
}

//returns the first index of the element satisfying the provided testing function.
let evenNumbers=numbers.findIndex(isEven);
console.log(evenNumbers);

let oddNumbers=numbers.findIndex(isOdd);
console.log(oddNumbers);

//test function to return -1 when non of te element is satisfying the function
let array=[1,3,5,7,9]
let array2=array.findIndex(isEven);
console.log(array2);


//using arrow functions
let days=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

//return the first index of 'Wednesday' in the array
let index=days.findIndex((day)=>
    day==="Wednesday"
)
console.log(index);