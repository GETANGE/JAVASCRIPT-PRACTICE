//returns the first element that satisfies the provided test function.
let array=[1,2,3,4,5,6,7,8,9,10,11,12]

//check if the number is even/
function checkEven(number) {
    if(number %2==0){
        return true;
    }
    else{
        return false;
    }
}

//check if the number is odd
function checkOdd(number){
    if(number %2==1){
        return true;
    }
    else{
        return false;
    }
}
//get the first even number.
let evenNumber=array.find(checkEven);
console.log(evenNumber);

//get the first odd number.
let oddNumber=array.find(checkOdd);
console.log(oddNumber);

//Method 2
function isEven(element){
    return element %2==0;
}

let randomArray=[23,45,48,89]

let firstEvenNumber=randomArray.find(isEven);
console.log(firstEvenNumber);

function isOdd(element){
    return element %2==1;
}

let randomArray2=[99,101,103,107]

let firstOddNumber=randomArray2.find(isOdd);
console.log(firstOddNumber);