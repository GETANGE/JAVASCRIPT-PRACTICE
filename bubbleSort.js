function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Example usage
const unsortedArr = [3, 7, 1, 9, 2,20];
console.log("Unsorted array:", unsortedArr);

const sortedArr = bubbleSort(unsortedArr);
console.log("Sorted array:", sortedArr); // [1, 2, 3, 7, 9]


function fizzBuzz(){
    for(let i=1;i<=100; i++){
        if(i %3 === 0 && i%5===0){
            console.log("FizzBuzz")
        }else if(i%3===0){
            console.log("Fizz")
        }else if(i%5===0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
      }
 }
 fizzBuzz();