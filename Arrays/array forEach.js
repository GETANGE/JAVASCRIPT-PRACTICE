//invokes the specified function once for each element in the array.
let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

//function to compute the square  of each number.
function computeSquare(element){
    console.log(element*element);
}
numbers.forEach(computeSquare);

//function to print all elements in the array
function printElement(prices, index){
    console.log("The Price is "+index+":"+prices)
}

const prices=[1800,1300,1500,1200]
prices.forEach(printElement);

