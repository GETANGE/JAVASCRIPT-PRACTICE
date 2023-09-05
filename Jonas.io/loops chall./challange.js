//FizzBuzz: Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
// you use (number.length) iff you have an array.
const FizzBuzz= function(number){
    for(let i=0; i<=number; i++){
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
    for(let i=0;i<=number; i++){
        if(i % 2 == 0){
            console.log(`Even number: ${i}`);
        }else{
            console.log(`Odd number: ${i}`);
        }
    }
}
Even(100);

//TODO: finish this challange.
//CHALLANGE 2:
// Prime Numbers: Write a program to determine if a given number is prime (only divisible by 1 and itself). Generate a list of prime numbers up to a certain limit.




//determining the largest number in the array.
let largestNumber = function(number){
    let max=number[0];// the current maximum number.
    for(let i=0; i<number.length; i++){
        if(number[i] >= max){
            max = number[i];
        }
    }
    return max;
}
const maxNumber =[2,3,4,5,9];
let max=largestNumber(maxNumber);
console.log(max);


// calculate the temperature amplitude .
// the difference between the highest and lowest temperature.
//ignore the errors in the array.
const temperature = [3,-2,-6,-1,'error',9,13,17,15,14,9,5];

//function to calculate the temperature amplitude.
const  calcAmplitude = function(value){
    let Max=value[0]; //maximum current value.
    let Min=value[0]; //minimum current value.

    for(let i=0; i< value.length; i++){
        const curTemp=value[i]; //current value.
        if(typeof curTemp !== 'number') continue;
        if(curTemp > Max){
            Max = curTemp;
        }
        if(curTemp < Min){
            Min = curTemp;
        }
    }

    const amplitude = Max - Min;
    return amplitude;
}
let result = calcAmplitude(temperature);
console.log("The amplitude is :  "+result);

const kelvin = function(){
    const measurement = {
        temp:'value',
        unit:'Celsius',

        //fix this bug.
        // change the string to a number.
        value:Number(prompt('Degrees celsius')),
    }

    console.table(measurement)
    const kelvin = measurement.value + 273;
    return kelvin;
}
kelvin();


function solution(nums){
  
    // condition to check for null or empty arrays
    if(!Array.isArray(nums) || nums.length === 0){
      return [];
    }
    
    // bubblesort method to sort the array in ascending order.
    for(let i=0; i<nums.length; i++){
      for(let j=0; j<nums.length-i-1; j++){
        if(nums[j]>nums[j+1]){
          const temp = nums[j];
          nums[j] = nums[j+1];
          nums[j+1]= temp;
        }
      }
    }
    return nums;
  }
  const array = [1, 2, 10, 50, 5];
  const emptyArray = [];
  const nullArray1 = null;
  
  // calling the function passing the array as parameters
  const sortedArray = solution(array);
  const empty =solution(emptyArray);
  const nullArray=solution(nullArray1);
  
  //display solutions.
  console.log(sortedArray);
  console.log(empty);
  console.log(nullArray);