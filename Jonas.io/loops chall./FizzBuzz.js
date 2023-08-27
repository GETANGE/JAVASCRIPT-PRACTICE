//FizzBuzz: Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
// you use (number.length) iff you have an array.
const FizzBuzz= function(number){
    for(let i=0; i<number; i++){
        if(i%3 === 0){
            console.log(`Fizz`);
        }else if(i%5 === 0){
            console.log(`Buzz`);
        }else if(i%3 === 0 && i%5 === 0){
            console.log(`Fizzbuzz`);
        }else{
            console.log(i);
        }
    }
}
FizzBuzz(100);

//even number.
const Even=function(number){
    for(let i=0;i<number; i++){
        if(i % 2 == 0){
            console.log(`Even number: ${i}`);
        }else{
            console.log(`Odd number: ${i}`);
        }
    }
}
Even(100);