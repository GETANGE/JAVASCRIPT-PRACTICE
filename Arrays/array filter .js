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
    if (number % 2== 0){
        return false;
    }
    else{
        return true;
    }
}

//create a new array by filter.
let evenNumbers=numbers.filter(checkEven);
console.log("Even Numbers are: "+evenNumbers);

let oddNumbers=numbers.filter(checkOdd);
console.log("Odd Numbers are: "+oddNumbers);