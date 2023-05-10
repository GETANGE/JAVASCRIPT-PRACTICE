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
    if(number %2==0){
        return false;
    }
    else{
        return true;
    }
}
//get the first even number.
let evenNumber=array.find(checkEven);
console.log(evenNumber);

//get the first odd number.
let oddNumber=array.find(checkOdd);
console.log(oddNumber);